// PROGRAM VARIABLES
var operatorData, stageData;
var completePoolOfOperators = [];
var completePoolOfOperatorsDefault;

var userPoolOfOperators = [];

var rolledPoolOfOperators = [];
var rolledPoolOfOperatorsDefault = [];
var userOperatorCheckboxes = [];

var medicOperators = [];
var medicOperatorsDefault;
var supporterOperators = [];
var supporterOperatorsDefault;
var sniperOperators = [];
var sniperOperatorsDefault;
var vanguardOperators = [];
var vanguardOperatorsDefault;
var specialistOperators = [];
var specialistOperatorsDefault;
var defenderOperators = [];
var defenderOperatorsDefault;
var guardOperators = [];
var guardOperatorsDefault;
var casterOperators = [];
var casterOperatorsDefault;

var listOfThingsToFilterPoolWith = [];

var oneStarOperators = [];
var twoStarOperators = [];
var threeStarOperators = [];
var fourStarOperators = [];
var fiveStarOperators = [];
var sixStarOperators = [];

var charIdMap;

var prologueStages, chapterOneStages, chapterTwoStages, chapterThreeStages, chapterFourStages, chapterFiveStages, chapterSixStages, chapterSevenStages, chapterEightStages;
        
var completePoolOfStages = [];
var completePoolOfStagesDefault;
var stagePoolsToFilterOut = [];

var userOperatorCheckboxes;

var classMapping = {"Medics": "MEDIC", "Supporters": "SUPPORT", "Snipers": "SNIPER", "Vanguards": "PIONEER", "Specialists": "SPECIAL", "Defenders": "TANK", "Guards": "WARRIOR", "Casters": "CASTER"};
var rarityMapping = ["OneStar", "TwoStar", "ThreeStar", "FourStar", "FiveStar", "SixStar"];

fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/stage_table.json')
.then(res => res.json())
.then(js => {
	stageData = js;
	return fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/character_table.json');
})
.then(res => res.json())
.then(js => {
	operatorData = js;
	// remove all non-obtainable "operators"
	for (var key in operatorData) {
		if (!operatorData[key].displayNumber)
			delete operatorData[key]
		}
	completePoolOfOperatorsDefault = Object.values(operatorData).map(x=>x.name);

	medicOperatorsDefault = Object.values(operatorData).filter(x=>x.profession=='MEDIC').map(x=>x.name);
	supporterOperatorsDefault = Object.values(operatorData).filter(x=>x.profession=='SUPPORT').map(x=>x.name);
	sniperOperatorsDefault = Object.values(operatorData).filter(x=>x.profession=='SNIPER').map(x=>x.name);
	vanguardOperatorsDefault = Object.values(operatorData).filter(x=>x.profession=='PIONEER').map(x=>x.name);
	specialistOperatorsDefault = Object.values(operatorData).filter(x=>x.profession=='SPECIAL').map(x=>x.name);
	defenderOperatorsDefault = Object.values(operatorData).filter(x=>x.profession=='TANK').map(x=>x.name);
	guardOperatorsDefault = Object.values(operatorData).filter(x=>x.profession=='WARRIOR').map(x=>x.name);
	casterOperatorsDefault = Object.values(operatorData).filter(x=>x.profession=='CASTER').map(x=>x.name);

	oneStarOperatorsDefault = Object.values(operatorData).filter(x=>x.rarity==0).map(x=>x.name);
	twoStarOperatorsDefault = Object.values(operatorData).filter(x=>x.rarity==1).map(x=>x.name);
	threeStarOperatorsDefault = Object.values(operatorData).filter(x=>x.rarity==2).map(x=>x.name);
	fourStarOperatorsDefault = Object.values(operatorData).filter(x=>x.rarity==3).map(x=>x.name);
	fiveStarOperatorsDefault = Object.values(operatorData).filter(x=>x.rarity==4).map(x=>x.name);
	sixStarOperatorsDefault = Object.values(operatorData).filter(x=>x.rarity==5).map(x=>x.name);
	charIdMap = {};
	for(var key in operatorData){
		charIdMap[operatorData[key].name] = key;
	}

	prologueStages = Object.values(stageData.stages).filter(x=>x.zoneId=='main_0' && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code)
	chapterOneStages = Object.values(stageData.stages).filter(x=>x.zoneId=='main_1' && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code)
	chapterTwoStages = Object.values(stageData.stages).filter(x=>x.zoneId=='main_2' && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code)
	chapterThreeStages = Object.values(stageData.stages).filter(x=>x.zoneId=='main_3' && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code)
	chapterFourStages = Object.values(stageData.stages).filter(x=>x.zoneId=='main_4' && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code)
	chapterFiveStages = Object.values(stageData.stages).filter(x=>x.zoneId=='main_5' && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code)
	chapterSixStages = Object.values(stageData.stages).filter(x=>x.zoneId=='main_6' && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code)
	chapterSevenStages = Object.values(stageData.stages).filter(x=>x.zoneId=='main_7' && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code)
	chapterEightStages = Object.values(stageData.stages).filter(x=>x.zoneId=='main_8' && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code)
	completePoolOfStagesDefault = Object.values(stageData.stages).filter(x=>(x.stageType=='MAIN' || x.stageType=='SUB') && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL').map(x=>x.code);

	(function() {
		// Create and initialize things that keep track of operators user has.
		// Anything that is not declaring a function MUST be done within this function to ensure operator list had been loaded first.
		// Be sure not to declare variables you will need elsewhere within this function.
		for (var i = 0; i < completePoolOfOperatorsDefault.length; i++)
		{
			CreateDummyCheckbox(completePoolOfOperatorsDefault[i]);
		}

		userOperatorCheckboxes = document.getElementsByClassName("UserOperatorCheckbox");
		userOperatorCheckboxes[0].setAttribute("onchange", "CheckAllTheUserOperatorCheckboxes(this)");

		if (JSON.parse(localStorage.getItem("UserOps") == null))
		{
			localStorage.setItem("UserOps", JSON.stringify(userPoolOfOperators));
		}

		userPoolOfOperators = JSON.parse(localStorage.getItem("UserOps"));

		for (var i = 0; i < userPoolOfOperators.length; i++)
		{
			for (var x = 0; x < userOperatorCheckboxes.length; x++)
			{
				if (userOperatorCheckboxes[x].value == userPoolOfOperators[i])
				{
					userOperatorCheckboxes[x].checked = true;
				}
			}
		}

		updateSelectedState();

		completePoolOfOperators = userPoolOfOperators;
})()})


var desiredTeamSize = 12;

var desiredClassAmounts = {"MEDIC":0, "SUPPORT":0, "SNIPER":0, "PIONEER":0, "SPECIAL":0, "TANK":0, "WARRIOR":0, "CASTER":0}

var rollATeamButton = document.getElementById("RollATeamButton"); 
var rollAStageButton = document.getElementById("RollAStageButton");
var sortAlphabeticallyButton = document.getElementById("SortAlphabeticallyButton");
var stageLabel = document.getElementById("StageLabel");
var stagePreviewImage = document.getElementById("StagePreviewImage");




updateSelectedState = function()
{
    for (var i = 0; i < userOperatorCheckboxes.length; i++)
    {
        if (userOperatorCheckboxes[i].checked)
        {
            userOperatorCheckboxes[i].parentElement.classList.add('_selected');
        }
        else
        {
            userOperatorCheckboxes[i].parentElement.classList.remove('_selected');
        }
    }
}


function shuffle(array) {
	// see: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// Rolling Operators
// If the user hits the roll a team button, reset the involved lists, select random operators and update the labels on the page.
// If the user wants a specific number of operators from a certain class, then add those to the list of rolled operators first.

rollATeamButton.onclick = function()
{
    // Get list of operators from JSON
	let availableOperators = Object.values(operatorData).filter(x=>userPoolOfOperators.includes(x.name))
	
	// Filter list using selected rarities/classes
	let filters = listOfThingsToFilterPoolWith.map(x => classMapping[x] ? classMapping[x] : rarityMapping.indexOf(x))
	availableOperators = availableOperators.filter(x=>!(filters.includes(x.rarity) || filters.includes(x.profession)))
	
	rolledPoolOfOperators = [];
	desiredTeamSize = FetchDesiredTeamSize();
	
	// Add required number of each class to pool
	Object.entries(desiredClassAmounts).forEach(pair => {
		let [className, amountNeeded] = pair;
		rolledPoolOfOperators = rolledPoolOfOperators.concat(shuffle(availableOperators.filter(x=>x.profession==className)).slice(0,amountNeeded))
	});
	
	// Add filler operators to meet the required team size
	rolledPoolOfOperators = rolledPoolOfOperators.concat(shuffle(availableOperators.filter(x=>!rolledPoolOfOperators.includes(x))).slice(0,(desiredTeamSize - rolledPoolOfOperators.length)))
	
	// Truncate the pool if too large
	rolledPoolOfOperators = shuffle(rolledPoolOfOperators).slice(0,desiredTeamSize);
	rolledPoolOfOperators = rolledPoolOfOperators.map(x=>x.name);

    UpdateOperatorLabelsOnPage();
}


sortAlphabeticallyButton.onclick = function()
{
    rolledPoolOfOperators.sort();
    UpdateOperatorLabelsOnPage();
}













// Rolling For Stages
// For now, pictures are grabbed from a local folder. 
// Is there a website I could grab these from instead, just like we do for operator icons?

rollAStageButton.onclick = function()
{
    completePoolOfStages = ResetPoolOfThingsToDefault(completePoolOfStagesDefault);
    FilterCompletePoolOfStagesBasedOnFilteringPreferences(stagePoolsToFilterOut);
    
    var selectedStage = GetRandomItemFromPool(completePoolOfStages);
    stageLabel.textContent = selectedStage;

    var localPathToStagePicture = 'StageIcons/' + selectedStage + '_map.png';
    stagePreviewImage.src = localPathToStagePicture;
}




















// Functions, used throughout the program.

function CreateDummyCheckbox(operatorName)
{
    var dummyCheckbox = document.getElementById("dummyCheckbox");

    var dummyCheckboxClone = dummyCheckbox.cloneNode(true);
	
	dummyCheckboxClone.removeAttribute('id');
    dummyCheckboxClone.childNodes[0].textContent = operatorName;
    dummyCheckboxClone.childNodes[0].onclick = null;
    dummyCheckboxClone.childNodes[1].value = operatorName;

    dummyCheckboxClone.childNodes[1].addEventListener("change", () => dummyCheckboxClone.classList.toggle('_selected'));
    dummyCheckboxClone.onclick = () => dummyCheckboxClone.childNodes[1].click();
    let im = document.createElement('img');
    im.src = 'https://aceship.github.io/AN-EN-Tags/img/avatars/' + charIdMap[operatorName] + '.png';
    if (charIdMap[operatorName])
    {
        dummyCheckboxClone.appendChild(im);
    }
    let name = document.createElement('div');
	name.classList.add('name');
	name.innerHTML = operatorName;
	dummyCheckboxClone.appendChild(name);
    document.getElementById("checkboxesDiv").appendChild(dummyCheckboxClone);

}

function FetchDesiredTeamSize()
{
    return parseInt(document.getElementById("DesiredTeamSizeField").value);
}

function GetRandomItemFromPool(poolOfThings)
{
    var randomNumber = GetRandomNumber(0, poolOfThings.length);

    return poolOfThings[randomNumber];
}

function UpdateOperatorLabelsOnPage()
{
    var operatorLabels = FetchAllOperatorLabelsOnPage()


    for (var i = 0; i < operatorLabels.length; i++)
    {
        operatorLabels[i].textContent = rolledPoolOfOperators[i];
		if (i < rolledPoolOfOperators.length)
		{
			let im = document.createElement('img');
			im.src = 'https://aceship.github.io/AN-EN-Tags/img/avatars/' + charIdMap[rolledPoolOfOperators[i]] + '.png';
			if (charIdMap[rolledPoolOfOperators[i]])
			{
				operatorLabels[i].appendChild(im);
			}
		}
    }
}

function FetchAllOperatorLabelsOnPage()
{
    var operatorLabels = document.getElementsByClassName("OpRollingAreaColumn");
    return operatorLabels;
}

function FilterCompletePoolOfStagesBasedOnFilteringPreferences(listOfChapters)
{
    for (var i = 0; i < listOfChapters.length; i++)
    {
        switch (listOfChapters[i])
        {
            case "Prologue":
                FilterOutIndividualPoolOfMaps(prologueStages);
            break;

            case "ChapterOne":
                FilterOutIndividualPoolOfMaps(chapterOneStages);
            break;
            
            case "ChapterTwo":
                FilterOutIndividualPoolOfMaps(chapterTwoStages);
            break;

            case "ChapterThree":
                FilterOutIndividualPoolOfMaps(chapterThreeStages);
            break;

            case "ChapterFour":
                FilterOutIndividualPoolOfMaps(chapterFourStages);
            break;

            case "ChapterFive":
                FilterOutIndividualPoolOfMaps(chapterFiveStages);
            break;

            case "ChapterSix":
                FilterOutIndividualPoolOfMaps(chapterSixStages);
            break;

            case "ChapterSeven":
                FilterOutIndividualPoolOfMaps(chapterSevenStages);
            break;

            default:
            break;
        }
    }
}

function FilterOutIndividualPoolOfMaps(stagesToFilter)
{
    for (var i = 0; i < stagesToFilter.length; i++)
    {
        for (var x = 0; x < completePoolOfStages.length; x++)
        {
            if (stagesToFilter[i] == completePoolOfStages[x])
            {
                completePoolOfStages.splice(completePoolOfStages.indexOf(stagesToFilter[i]), 1);
            }

            else {}
        }
    }
}

function CheckAllTheUserOperatorCheckboxes(callerCheckbox)
{
    userPoolOfOperators = EmptyList();

    if (callerCheckbox.checked)
    {
        for (var i = 0; i < userOperatorCheckboxes.length; i++)
        {
            userOperatorCheckboxes[i].checked = true;
            AddCheckedOperatorsToArray(userOperatorCheckboxes[i]);
        }
    }

    else if (!callerCheckbox.checked)
    {
        for (var i = 0; i < userOperatorCheckboxes.length; i++)
        {
            userOperatorCheckboxes[i].checked = false;
            AddCheckedOperatorsToArray(userOperatorCheckboxes[i]);

        }
    }
    
    updateSelectedState();
}

function AddCheckedOperatorsToArray(callerCheckbox)
{
    if (callerCheckbox.checked)
    {
        userPoolOfOperators.push(callerCheckbox.value);
    }

    if (!callerCheckbox.checked)
    {
        userPoolOfOperators.splice(userPoolOfOperators.indexOf(callerCheckbox.value), 1);
    }

    WriteUserOperatorsArrayToFile(userPoolOfOperators);
}

function WriteUserOperatorsArrayToFile(userOperators)
{
    localStorage.setItem("UserOps", JSON.stringify(userOperators));
}

function ClearUserOperatorsFile(userOperators)
{
    userOperators = [];
}

function EmptyList()
{
    var listToClearOut = [];
    return listToClearOut;
}

function GetRandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min) ) + min;
}

function ToggleOperatorClassFromListOfClasses(callerCheckbox)
{
    if (!callerCheckbox.checked)
    {
        listOfThingsToFilterPoolWith.push(callerCheckbox.value);
    }

    else
    {
        listOfThingsToFilterPoolWith.splice(listOfThingsToFilterPoolWith.indexOf(callerCheckbox.value), 1);
    }
    
}
function UpdateDesiredClassAmount(inputElement)
{
	desiredClassAmounts[inputElement.getAttribute('data-class')] = parseInt(inputElement.value);
}
function UpdateDesiredTeamSize(teamSize)
{
    desiredTeamSize = teamSize;
}

function ToggleStagePoolFromListOfStages(callerCheckbox)
{
    if (!callerCheckbox.checked)
    {
        stagePoolsToFilterOut.push(callerCheckbox.value);
    }

    else
    {
        stagePoolsToFilterOut.splice(stagePoolsToFilterOut.indexOf(callerCheckbox.value), 1);
    }

}