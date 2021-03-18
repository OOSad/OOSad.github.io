// PROGRAM VARIABLES

var completePoolOfOperators = [];
var completePoolOfOperatorsDefault = ["Folinic", "Ceylon", "Breeze", "Sussurro", "Nightingale", "Shining", "Warfarin", "Silence", "Ptilopsis", "Perfumer", "Gavial", "Myrrh", "Ansel", "Hibiscus", "Lancet-2", "Scene", "Suzuran", "Podenco", "Tsukinogi", "Shamare", "Magallan", "Glaucus", "Angelina", "Sora", "Istina", "Pramanix", "Mayer", "Earthspirit", "Deepcolor", "Orchid", "Aciddrop", "Andreana", "Rosa(Poca)", "W", "Sesa", "GreyThroat", "Ambriel", "May", "Executor", "Vermeil", "Schwarz", "Catapult", "Exusiai", "Firewatch", "Provence", "Meteorite", "Platinum", "Blue Poison", "Shirayuki", "Meteor", "Jessica", "Adnachiel", "Kroos", "Rangers", "Chiave", "Elysium", "Bagpipe", "Reed", "Myrtle", "Grani", "Siege", "Texas", "Zima", "Vigna", "Scavenger", "Courier", "Plume", "Vanilla", "Fang", "Yato", "Jaye", "Weedy", "THRM-EX", "Phantom", "Aak", "Snowsant", "Waai Fu", "Ethan", "FEater", "Manticore", "Cliffheart", "Projekt Red", "Shaw", "Rope", "Gravel", "Eunectes", "Asbestos", "Nian", "Hung", "Bison", "Dur-nar", "Spot", "Saria", "Hoshiguma", "Vulcan", "Croissant", "Liskarm", "Nearl", "Gummy", "Cuora", "Matterhorn", "Beagle", "Cardigan", "Noir Corne", "Flint", "Thorns", "Ayerscarpe", "Sideroca", "Cutter", "Bibeak", "Utage", "Blaze", "Broca", "Flamebringer", "Hellagur", "Astesia", "Ch'en", "Swire", "Popukar", "Skadi", "Beehunter", "Midnight", "Savage", "SilverAsh", "Specter", "Lappland", "Indra", "Franka", "Mousse", "Estelle", "Frostleaf", "Matoimaru", "Dobermann", "Melantha", "Castle-3", "Tomimi", "Beeswax", "Click", "Leonhardt", "Absinthe", "Ceobe", "Leizi", "Mostima", "Greyy", "Nightmare", "Eyjafjalla", "Ifrit", "Skyfire", "Amiya", "Gitano", "Haze", "Steward", "Lava", "12F", "Durin"];

var userPoolOfOperators = [];

var rolledPoolOfOperators = [];
var userOperatorCheckboxes = [];

var medicOperators = [];
var medicOperatorsDefault = ["Folinic", "Ceylon", "Breeze", "Sussurro", "Nightingale", "Shining", "Warfarin", "Silence", "Ptilopsis", "Perfumer", "Gavial", "Myrrh", "Ansel", "Hibiscus", "Lancet-2"];
var supporterOperators = [];
var supporterOperatorsDefault = ["Scene", "Suzuran", "Podenco", "Tsukinogi", "Shamare", "Magallan", "Glaucus", "Angelina", "Sora", "Istina", "Pramanix", "Mayer", "Earthspirit", "Deepcolor", "Orchid"];
var sniperOperators = [];
var sniperOperatorsDefault = ["Aciddrop", "Andreana", "Rosa(Poca)", "W", "Sesa", "GreyThroat", "Ambriel", "May", "Executor", "Vermeil", "Schwarz", "Catapult", "Exusiai", "Firewatch", "Provence", "Meteorite", "Platinum", "Blue Poison", "Shirayuki", "Meteor", "Jessica", "Adnachiel", "Kroos", "Rangers"];
var vanguardOperators = [];
var vanguardOperatorsDefault = ["Chiave", "Elysium", "Bagpipe", "Reed", "Myrtle", "Grani", "Siege", "Texas", "Zima", "Vigna", "Scavenger", "Courier", "Plume", "Vanilla", "Fang", "Yato"];
var specialistOperators = [];
var specialistOperatorsDefault = ["Jaye", "Weedy", "THRM-EX", "Phantom", "Aak", "Snowsant", "Waai Fu", "Ethan", "FEater", "Manticore", "Cliffheart", "Projekt Red", "Shaw", "Rope", "Gravel"];
var defenderOperators = [];
var defenderOperatorsDefault = ["Eunectes", "Asbestos", "Nian", "Hung", "Bison", "Dur-nar", "Spot", "Saria", "Hoshiguma", "Vulcan", "Croissant", "Liskarm", "Nearl", "Gummy", "Cuora", "Matterhorn", "Beagle", "Cardigan", "Noir Corne"];
var guardOperators = [];
var guardOperatorsDefault = ["Flint", "Thorns", "Ayerscarpe", "Sideroca", "Cutter", "Bibeak", "Utage", "Blaze", "Broca", "Flamebringer", "Hellagur", "Astesia", "Ch'en", "Swire", "Popukar", "Skadi", "Beehunter", "Midnight", "Savage", "SilverAsh", "Specter", "Lappland", "Indra", "Franka", "Mousse", "Estelle", "Frostleaf", "Matoimaru", "Dobermann", "Melantha", "Castle-3"];
var casterOperators = [];
var casterOperatorsDefault = ["Tomimi", "Beeswax", "Click", "Leonhardt", "Absinthe", "Ceobe", "Leizi", "Mostima", "Greyy", "Nightmare", "Eyjafjalla", "Ifrit", "Skyfire", "Amiya", "Gitano", "Haze", "Steward", "Lava", "12F", "Durin"];

var listOfThingsToFilterPoolWith = [];

var oneStarOperators = [];
var oneStarOperatorsDefault = ["THRM-EX", "Castle-3", "Lancet-2"];
var twoStarOperators = [];
var twoStarOperatorsDefault = ["12F", "Durin", "Rangers", "Noir Corne", "Yato"];
var threeStarOperators = [];
var threeStarOperatorsDefault = ["Spot", "Popukar", "Midnight", "Catapult", "Orchid", "Steward", "Ansel", "Hibiscus", "Lava", "Adnachiel", "Kroos", "Beagle", "Cardigan", "Melantha", "Plume", "Vanilla", "Fang"];
var fourStarOperators = [];
var fourStarOperatorsDefault = ["Aciddrop", "Estelle", "Jaye", "Click", "Podenco", "Cutter", "Utage", "Ambriel", "May", "Ethan", "Dur-nar", "Vermeil", "Myrtle", "Sussurro", "Greyy", "Beehunter", "Shaw", "Earthspirit", "Deepcolor", "Gummy", "Cuora", "Matterhorn", "Perfumer", "Gavial", "Myrrh", "Rope", "Gravel", "Mousse", "Frostleaf", "Matoimaru", "Dobermann", "Vigna", "Scavenger", "Courier", "Shirayuki", "Meteor", "Jessica", "Gitano", "Haze"];
var fiveStarOperators = [];
var fiveStarOperatorsDefault = ["Flint", "Tomimi", "Scene", "Andreana", "Chiave", "Beeswax", "Ayerscarpe", "Folinic", "Leonhardt", "Absinthe", "Tsukinogi", "Asbestos", "Elysium", "Shamare", "Sideroca", "Sesa", "Bibeak", "Leizi", "Hung", "Snowsant", "GreyThroat", "Broca", "Reed", "Bison", "Waai Fu", "Ceylon", "Flamebringer", "Breeze", "Executor", "Astesia", "Glaucus", "Swire", "Grani", "Nightmare", "Savage", "FEater", "Manticore", "Sora", "Istina", "Pramanix", "Cliffheart", "Firewatch", "Provence", "Vulcan", "Croissant", "Liskarm", "Projekt Red", "Nearl", "Warfarin", "Silence", "Mayer", "Skyfire", "Amiya", "Meteorite", "Platinum", "Blue Poison", "Specter", "Lappland", "Indra", "Franka", "Texas", "Zima", "Ptilopsis"];
var sixStarOperators = [];
var sixStarOperatorsDefault = ["Eunectes", "Thorns", "Suzuran", "Rosa(Poca)", "Weedy", "W", "Phantom", "Bagpipe", "Ceobe", "Nian", "Aak", "Blaze", "Mostima", "Magallan", "Hellagur", "Schwarz", "Ch'en", "Skadi", "SilverAsh", "Saria", "Hoshiguma", "Nightingale", "Shining", "Angelina", "Eyjafjalla", "Ifrit", "Siege", "Exusiai"];

var desiredTeamSize;

var desiredNumberOfMedics = 0;
var desiredNumberOfSupporters = 0;
var desiredNumberOfSnipers = 0;
var desiredNumberOfVanguards = 0;
var desiredNumberOfSpecialists = 0;
var desiredNumberOfDefenders = 0;
var desiredNumberOfGuards = 0;
var desiredNumberOfCasters = 0;



var prologueStages = [ "0-1", "0-2", "0-3", "0-4", "0-5", "0-6", "0-7", "0-8", "0-9", "0-10", "0-11" ];
var chapterOneStages = [ "1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-8", "1-9", "1-10", "1-12", "S2-1", "S2-2", "S2-3", "S2-4", "S2-5", "S2-6", "S2-7", "S2-8", "S2-9", "S2-10", "S2-11", "S2-12" ];
var chapterTwoStages = [ "2-1", "S2-1", "2-2", "S2-2", "S2-3", "S2-4", "2-3", "2-4", "S2-5", "S2-6", "S2-7", "2-5", "2-6", "2-7", "S2-8", "S2-9", "2-8", "2-9", "S2-10", "S2-11", "S2-12", "2-10" ];
var chapterThreeStages = [ "3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8", "S3-1", "S3-2", "S3-3", "S3-4", "S3-5", "S3-6" ];
var chapterFourStages = ["4-1", "4-2", "4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9", "4-10", "S4-1", "S4-2", "S4-3", "S4-4", "S4-5", "S4-6", "S4-7", "S4-8", "S4-9", "S4-10" ];
var chapterFiveStages = [ "5-1", "5-2", "5-3", "5-4", "5-5", "5-6", "5-7", "5-8", "5-9", "5-10", "S5-1", "S5-2", "S5-3", "S5-4", "S5-5", "S5-6", "S5-7", "S5-8", "H5-1", "H5-2", "H5-3", "H5-4" ];
var chapterSixStages = [ "6-1", "6-2", "6-3", "6-4", "6-5", "6-8", "6-9", "6-10", "6-11", "6-12", "6-14", "6-15", "6-16", "S6-1", "S6-2", "S6-3", "S6-4", "H6-1", "H6-2", "H6-3", "H6-4" ];
var chapterSevenStages = [ "7-2", "7-3", "7-4", "7-5", "7-6", "7-8", "7-9", "7-10", "7-11", "7-12", "7-13", "7-14", "7-15", "7-16", "7-18", "S7-1", "S7-2", "H7-1", "H7-2", "H7-3", "H7-4" ];
        
var completePoolOfStages = [ ];
var completePoolOfStagesDefault = [ "0-1", "0-2", "0-3", "0-4", "0-5", "0-6", "0-7", "0-8", "0-9", "0-10", "0-11", "1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-8", "1-9", "1-10", "1-12", "2-1", "S2-1", "2-2", "S2-2", "S2-3", "S2-4", "2-3", "2-4", "S2-5", "S2-6", "S2-7", "2-5", "2-6", "2-7", "S2-8", "S2-9", "2-8", "2-9", "S2-10", "S2-11", "S2-12", "2-10", "3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8", "4-1", "4-2", "4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9", "4-10", "5-1", "5-2", "5-3", "5-4", "5-5", "5-6", "5-7", "5-8", "5-9", "5-10", "6-1", "6-2", "6-3", "6-4", "6-5", "6-8", "6-9", "6-10", "6-11", "6-12", "6-14", "6-15", "6-16", "7-2", "7-3", "7-4", "7-5", "7-6", "7-8", "7-9", "7-10", "7-11", "7-12", "7-13", "7-14", "7-15", "7-16", "7-18", "S3-1", "S3-2", "S3-3", "S3-4", "S3-5", "S3-6", "S4-1", "S4-2", "S4-3", "S4-4", "S4-5", "S4-6", "S4-7", "S4-8", "S4-9", "S4-10", "S5-1", "S5-2", "S5-3", "S5-4", "S5-5", "S5-6", "S5-7", "S5-8", "H5-1", "H5-2", "H5-3", "H5-4", "H6-1", "H6-2", "H6-3", "H6-4", "H7-1", "H7-2", "H7-3", "H7-4" ];

var chaptersToFilterOut = [];











// MAIN EXECUTION

var rollATeamButton = document.getElementById("RollATeamButton"); 
var rollAStageButton = document.getElementById("RollAStageButton");

for (var i = 0; i < completePoolOfOperatorsDefault.length; i++)
{
    CreateDummyCheckbox(completePoolOfOperatorsDefault[i]);
}

var userOperatorCheckboxes = document.getElementsByClassName("UserOperatorCheckbox");
userOperatorCheckboxes[0].setAttribute("onchange", "CheckAllTheUserOperatorCheckboxes(this)");


if (JSON.parse(localStorage.getItem("UserOps") == null))
{
    localStorage.setItem("UserOps", JSON.stringify(userPoolOfOperators));
}

userPoolOfOperators = JSON.parse(localStorage.getItem("UserOps"));

console.log(userPoolOfOperators);

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

completePoolOfOperators = userPoolOfOperators;
completePoolOfOperatorsDefault = completePoolOfOperators;

















rollATeamButton.onclick = function()
{
    console.clear();
    
    rolledPoolOfOperators = EmptyList();

    ResetEveryPoolOfOperatorsToDefault();

    desiredTeamSize = document.getElementById("DesiredTeamSizeField").value;

    FilterOperatorPoolBasedOnPreferences(listOfThingsToFilterPoolWith);


    if (desiredNumberOfMedics != 0)
    {
        CheckAndAddRandomUnit(desiredNumberOfMedics, completePoolOfOperators, medicOperators);
    }

    if (desiredNumberOfSupporters != 0)
    {
        CheckAndAddRandomUnit(desiredNumberOfSupporters, completePoolOfOperators, supporterOperators);
    }

    if (desiredNumberOfSnipers != 0)
    {
        CheckAndAddRandomUnit(desiredNumberOfSnipers, completePoolOfOperators, sniperOperators);
    }

    if (desiredNumberOfVanguards != 0)
    {
        CheckAndAddRandomUnit(desiredNumberOfVanguards, completePoolOfOperators, vanguardOperators);
    }

    if (desiredNumberOfSpecialists != 0)
    {
        CheckAndAddRandomUnit(desiredNumberOfSpecialists, completePoolOfOperators, specialistOperators);
    }

    if (desiredNumberOfDefenders != 0)
    {
        CheckAndAddRandomUnit(desiredNumberOfDefenders, completePoolOfOperators, defenderOperators);
    }

    if (desiredNumberOfGuards != 0)
    {
        CheckAndAddRandomUnit(desiredNumberOfGuards, completePoolOfOperators, guardOperators);
    }

    if (desiredNumberOfCasters != 0)
    {
        CheckAndAddRandomUnit(desiredNumberOfCasters, completePoolOfOperators, casterOperators);
    }
    
    
    for (var i = 0; i < desiredTeamSize; i++)
    {
        var selectedOperator = GetRandomOperatorFromOperatorPool(completePoolOfOperators);
        
        completePoolOfOperators.splice(completePoolOfOperators.indexOf(selectedOperator), 1);

        PushOperatorIntoPoolOfRolledOperators(selectedOperator);
    }

    UpdateOperatorLabelsOnPage();

}

rollAStageButton.onclick = function()
{
    console.clear();

    completePoolOfStages = [];

    for (var i = 0; i < completePoolOfStagesDefault.length; i++)
    {
        completePoolOfStages.push(completePoolOfStagesDefault[i]);
    }
     
    FilterMapPoolBasedOnPreferences(chaptersToFilterOut);
    
    var selectedMap = GetRandomOperatorFromOperatorPool(completePoolOfStages);

    

    document.getElementById("StageLabel").textContent = selectedMap;

}

















// UTILITY FUNCTIONS


function CheckAndAddRandomUnit(desiredUnitAmount, poolOfOperatorsToCheckAgainst, classPoolToSpliceOperatorFrom)
    {
        for (var i = 0; i < desiredUnitAmount; i++)
        {
            var randomUnit = GetRandomOperatorFromOperatorPool(classPoolToSpliceOperatorFrom);

            for (var y = 0; y < poolOfOperatorsToCheckAgainst.length; y++)
            {

                if (poolOfOperatorsToCheckAgainst[y] == randomUnit)
                {
                    PushOperatorIntoPoolOfRolledOperators(randomUnit);

                    desiredTeamSize--;

                    classPoolToSpliceOperatorFrom.splice(poolOfOperatorsToCheckAgainst.indexOf(randomUnit), 1);

                    poolOfOperatorsToCheckAgainst.splice(poolOfOperatorsToCheckAgainst.indexOf(randomUnit), 1);
                }
            }
        }

        poolOfOperatorsToCheckAgainst = SpliceAnEntireClassOutOfOperatorPool(completePoolOfOperators, medicOperators);

        // For lack of a better name, this function draws a random operator from any given class,
        // checks to see if said operator hasn't been filtered out of the complete pool of operators.
        // If they haven't been filtered, add said operator to the list of rolled operators,
        // and remove them from the complete pool + class pool as to not roll them again.
        // I begrudgingly add this comment because the convenience of having this multi-headed function
        // exceeds the drawbacks of having to repeat the code instead.
    }

function SpliceAnEntireClassOutOfOperatorPool(poolToSplice, classToSpliceOut)
    {
        for (var i = 0; i < poolToSplice.length; i++)
        {
            for (var x = 0; x < classToSpliceOut.length; x++)
            {
                if (poolToSplice[i] == classToSpliceOut[x])
                {
                    poolToSplice.splice(poolToSplice.indexOf(classToSpliceOut[x]), 1);
                }
            }
        }

        return poolToSplice;
    }


function EmptyList()
{
    var listToClearOut = [];
    return listToClearOut;
}


function ResetPoolOfOperatorsToDefault(poolOfDefaultsGlobal)
{
    var poolToReset = [];

    for (var i = 0; i < poolOfDefaultsGlobal.length; i++)
    {
        poolToReset.push(poolOfDefaultsGlobal[i]);
    }

    return poolToReset;
}

function ResetEveryPoolOfOperatorsToDefault()
{
    completePoolOfOperators = ResetPoolOfOperatorsToDefault(completePoolOfOperatorsDefault);
    medicOperators = ResetPoolOfOperatorsToDefault(medicOperatorsDefault);
    supporterOperators = ResetPoolOfOperatorsToDefault(supporterOperatorsDefault);
    sniperOperators = ResetPoolOfOperatorsToDefault(sniperOperatorsDefault);
    vanguardOperators = ResetPoolOfOperatorsToDefault(vanguardOperatorsDefault);
    specialistOperators = ResetPoolOfOperatorsToDefault(specialistOperatorsDefault);
    defenderOperators = ResetPoolOfOperatorsToDefault(defenderOperatorsDefault);
    guardOperators = ResetPoolOfOperatorsToDefault(guardOperatorsDefault);
    casterOperators = ResetPoolOfOperatorsToDefault(casterOperatorsDefault);
    oneStarOperators = ResetPoolOfOperatorsToDefault(oneStarOperatorsDefault);
    twoStarOperators = ResetPoolOfOperatorsToDefault(twoStarOperatorsDefault);
    threeStarOperators = ResetPoolOfOperatorsToDefault(threeStarOperatorsDefault);
    fourStarOperators = ResetPoolOfOperatorsToDefault(fourStarOperatorsDefault);
    fiveStarOperators = ResetPoolOfOperatorsToDefault(fiveStarOperatorsDefault);
    sixStarOperators = ResetPoolOfOperatorsToDefault(sixStarOperatorsDefault);

    completePoolOfStages = ResetPoolOfOperatorsToDefault(completePoolOfStagesDefault);
}

function PushOperatorIntoPoolOfRolledOperators(operator)
{
    rolledPoolOfOperators.push(operator);
}



function GetRandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min) ) + min;
}



function GetRandomOperatorFromOperatorPool(operatorPool)
{
    var randomNumber = GetRandomNumber(0, operatorPool.length);

    return operatorPool[randomNumber];
}



function FetchAllOperatorLabelsOnPage()
{
    var operatorLabels = document.getElementsByClassName("OpRollingAreaColumn");
    return operatorLabels;
}



function UpdateOperatorLabelsOnPage()
{
    var operatorLabels = FetchAllOperatorLabelsOnPage()


    for (var i = 0; i < operatorLabels.length; i++)
    {
        operatorLabels[i].textContent = rolledPoolOfOperators[i];
    }
}



function CreateDummyCheckbox(operatorName)
{
    var dummyCheckbox = document.getElementById("dummyCheckbox");

    var dummyCheckboxClone = dummyCheckbox.cloneNode(true);

    for (var i = 0; i < dummyCheckboxClone.childNodes.length; i++)
    {
        console.log(dummyCheckboxClone.childNodes)
    }
    
    for (var i = 0; i < dummyCheckboxClone.childNodes.length; i++)
    {
        if (dummyCheckboxClone.childNodes[i].outerText)
        {
            dummyCheckboxClone.childNodes[i].outerText = operatorName;
        }

        else if (dummyCheckboxClone.childNodes[i].value)
        {
            dummyCheckboxClone.childNodes[i].value = operatorName;
        }
    }

    document.getElementById("checkboxesDiv").appendChild(dummyCheckboxClone);

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



function FilterOperatorPoolBasedOnPreferences(listOfClasses)
{

    console.log(listOfThingsToFilterPoolWith);

    for (var i = 0; i < listOfClasses.length; i++)
    {
        switch (listOfClasses[i])
        {
            case "Medics":
            FilterOutIndividualClass(medicOperators);
            break;

            case "Supporters":
            FilterOutIndividualClass(supporterOperators);
            break;
            
            case "Snipers":
            FilterOutIndividualClass(sniperOperators);
            break;

            case "Vanguards":
            FilterOutIndividualClass(vanguardOperators);
            break;

            case "Specialists":
            FilterOutIndividualClass(specialistOperators);
            break;

            case "Defenders":
            FilterOutIndividualClass(defenderOperators);
            break;

            case "Guards":
            FilterOutIndividualClass(guardOperators);
            break;

            case "Casters":
            FilterOutIndividualClass(casterOperators);
            break;

            case "OneStar":
            FilterOutIndividualClass(oneStarOperators);
            break;

            case "TwoStar":
            FilterOutIndividualClass(twoStarOperators);
            break;

            case "ThreeStar":
            FilterOutIndividualClass(threeStarOperators);
            break;

            case "FourStar":
            FilterOutIndividualClass(fourStarOperators);
            break;

            case "FiveStar":
            FilterOutIndividualClass(fiveStarOperators);
            break;

            case "SixStar":
            FilterOutIndividualClass(sixStarOperators);
            break;

            default:
            break;
        }
    }

    console.log(completePoolOfOperators);
}

function FilterOutIndividualClass(operatorsToFilter)
{
    for (var i = 0; i < operatorsToFilter.length; i++)
    {
        for (var x = 0; x < completePoolOfOperators.length; x++)
        {
            if (operatorsToFilter[i] == completePoolOfOperators[x])
            {
                completePoolOfOperators.splice(completePoolOfOperators.indexOf(operatorsToFilter[i]), 1);
            }

            else {}
        }
    }
}

function UpdateDesiredNumberOfMedics(numberOfMedics)
{
    desiredNumberOfMedics = numberOfMedics.value;
}

function UpdateDesiredNumberOfSupporters(numberOfSupporters)
{
    desiredNumberOfSupporters = numberOfSupporters.value;
}

function UpdateDesiredNumberOfSnipers(numberOfSnipers)
{
    desiredNumberOfSnipers = numberOfSnipers.value;
}

function UpdateDesiredNumberOfVanguards(numberOfVanguards)
{
    desiredNumberOfVanguards = numberOfVanguards.value;
}

function UpdateDesiredNumberOfSpecialists(numberOfSpecialists)
{
    desiredNumberOfSpecialists = numberOfSpecialists.value;
}

function UpdateDesiredNumberOfDefenders(numberOfDefenders)
{
    desiredNumberOfDefenders = numberOfDefenders.value;
}

function UpdateDesiredNumberOfGuards(numberOfGuards)
{
    desiredNumberOfGuards = numberOfGuards.value;
}

function UpdateDesiredNumberOfCasters(numberOfCasters)
{
    desiredNumberOfCasters = numberOfCasters.value;
}




function ToggleStagePoolFromListOfStages(callerCheckbox)
{
    if (!callerCheckbox.checked)
    {
        chaptersToFilterOut.push(callerCheckbox.value);
    }

    else
    {
        chaptersToFilterOut.splice(chaptersToFilterOut.indexOf(callerCheckbox.value), 1);
    }

}

function FilterMapPoolBasedOnPreferences(listOfChapters)
{

    console.log(chaptersToFilterOut);

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