// PROGRAM VARIABLES
var operatorData, stageData;
var completePoolOfOperatorsDefault;

var userPoolOfOperators = [];

var rolledPoolOfOperators = [];
var userOperatorCheckboxes = [];

var listOfThingsToFilterPoolWith = [];

var charIdMap = {};

var stagePoolsToFilterOut = [];

var userOperatorCheckboxes, checkAllButton;

var classMapping = {"Medics": "MEDIC", "Supporters": "SUPPORT", "Snipers": "SNIPER", "Vanguards": "PIONEER", "Specialists": "SPECIAL", "Defenders": "TANK", "Guards": "WARRIOR", "Casters": "CASTER"};
var rarityMapping = ["OneStar", "TwoStar", "ThreeStar", "FourStar", "FiveStar", "SixStar"];
var stageMapping = ["Prologue", "ChapterOne", "ChapterTwo", "ChapterThree", "ChapterFour", "ChapterFive", "ChapterSix", "ChapterSeven", "ChapterEight", "ChapterNine", "ChapterTen"];

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
	for(var key in operatorData){
		charIdMap[operatorData[key].name] = key;
	}

	(function() {
		// Create and initialize things that keep track of operators user has.
		// Anything that is not declaring a function MUST be done within this function to ensure operator list had been loaded first.
		// Be sure not to declare any variables you will need elsewhere within this function (as it is not in the global scope).
		
		// create the check all box
		CreateDummyCheckbox({name: 'Check All', profession: 'ALL'})
		checkAllButton = document.getElementsByClassName("UserOperatorCheckbox")[0];
		Object.values(operatorData).sort((a,b)=>{
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;})
			.forEach(x=>CreateDummyCheckbox(x));

		// slice off the "check all" box
		userOperatorCheckboxes = Array.from(document.getElementsByClassName("UserOperatorCheckbox")).slice(1);

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
		populateSorterDiv();
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


// Rolling Operators

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
	// Filter stage data to only include main story stages
	let availableStages = Object.values(stageData.stages).filter(x=>(x.stageType=='MAIN' || x.stageType=='SUB') && x.apCost && x.dailyStageDifficulty && x.difficulty == 'NORMAL' && x.levelId);
	
	// Filter out excluded acts
	let filters = stagePoolsToFilterOut.map(x => 'main_'+stageMapping.indexOf(x))
	availableStages = availableStages.filter(x=>!filters.includes(x.zoneId))
	
	selectedStage = availableStages[Math.floor(Math.random() * availableStages.length)].code;
	
    stageLabel.textContent = selectedStage;

    var localPathToStagePicture = 'https://mrfz.fandom.com/wiki/Special:Redirect/file/' + selectedStage + '_map.png/';
    stagePreviewImage.src = localPathToStagePicture;
}




















// Functions, used throughout the program.

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

function populateSorterDiv()
{
	let mainDiv = document.getElementById('operatorSorter');
	Object.entries(classMapping).forEach(pair => {
		let [displayName, realName] = pair;
		let div = document.createElement('div');
		div.classList.add('class-selector');
		div.setAttribute('data-class', realName);
		let im = document.createElement('img');
		im.src = 'https://aceship.github.io/AN-EN-Tags/img/classes/class_' + displayName.replace(/s$/g, '').toLowerCase() + '.png';
		div.appendChild(im);
		mainDiv.appendChild(div);
		div.addEventListener('click', function(e) {
			e.preventDefault();
			div.classList.toggle('_selected');
			Array.from(document.getElementsByClassName('class-selector')).forEach(e=> {if (e!=div) e.classList.remove('_selected')});
			filterOperatorListByClass(div.getAttribute('data-class'),div.classList.contains('_selected'));
		});
	});
}

function filterOperatorListByClass(className, doFilter)
{
	if (doFilter)
	{
		document.getElementById("checkboxesDiv").classList.add('filtered')
		Array.from(document.getElementsByClassName('operatorCheckbox')).forEach(e =>{
			if (e.getAttribute('data-class') == className || e.getAttribute('data-class') == 'ALL')
				e.classList.add('show')
			else
				e.classList.remove('show')
			
		});
	}
	else
	{
		document.getElementById("checkboxesDiv").classList.remove('filtered')
		Array.from(document.getElementsByClassName('operatorCheckbox')).forEach(e =>{
			e.classList.add('show')
		});
	}
	UpdateCheckAllButton();
}

function CreateDummyCheckbox(operator)
{
	let operatorName = operator.name;
	
    var checkboxDiv = document.createElement("div");
	checkboxDiv.classList.add('operatorCheckbox');
	checkboxDiv.setAttribute('data-class', operator.profession);
	checkboxDiv.classList.add('show');

	let checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.classList.add('UserOperatorCheckbox');
	checkbox.setAttribute('onchange', 'AddCheckedOperatorsToArray(this)');
    checkbox.value = operatorName;
	checkbox.addEventListener("change", () => checkboxDiv.classList.toggle('_selected'));
	
	checkboxDiv.appendChild(checkbox);
    checkboxDiv.onclick = () => checkbox.click();
    
	if (charIdMap[operatorName])
	{
		let im = document.createElement('img');
		im.src = 'https://aceship.github.io/AN-EN-Tags/img/avatars/' + charIdMap[operatorName] + '.png';
		checkboxDiv.appendChild(im);
    }
    let name = document.createElement('div');
	name.classList.add('name');
	name.innerHTML = operatorName;
	checkboxDiv.appendChild(name);
    document.getElementById("checkboxesDiv").appendChild(checkboxDiv);
}

function FetchDesiredTeamSize()
{
    return parseInt(document.getElementById("DesiredTeamSizeField").value);
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

function AddCheckedOperatorsToArray(callerCheckbox)
{
	// First handle the "check all" box
	if (callerCheckbox == checkAllButton)
	{
		Array.from(document.getElementsByClassName('operatorCheckbox')).forEach(e => {
			if (e.parentElement.getAttribute('data-class') != 'ALL' && e.classList.contains('show') && (e.classList.contains('_selected') ^ callerCheckbox.checked)) {
				e.click();
			}
		});
	}
    else if (callerCheckbox.checked)
    {
        userPoolOfOperators.push(callerCheckbox.value);
    }

    else if (!callerCheckbox.checked)
    {
        userPoolOfOperators.splice(userPoolOfOperators.indexOf(callerCheckbox.value), 1);
    }

    WriteUserOperatorsArrayToFile(userPoolOfOperators);
}

function AllVisibleAreChecked()
{
	for (e of Array.from(document.getElementsByClassName('operatorCheckbox')))
	{
		if (e.classList.contains('show') && !e.classList.contains('_selected') && e != checkAllButton.parentElement)
			return false;
	}
	return true;
}

function UpdateCheckAllButton()
{
	if (AllVisibleAreChecked())
	{
		checkAllButton.parentElement.classList.add('_selected')
		checkAllButton.checked = true;
	}
	else
	{
		checkAllButton.parentElement.classList.remove('_selected')
		checkAllButton.checked = false;
	}
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
    desiredTeamSize = parseInt(teamSize);
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