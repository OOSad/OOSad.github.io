// PROGRAM VARIABLES

var completePoolOfOperators = [];
var completePoolOfOperatorsDefault = ["Folinic", "Ceylon", "Breeze", "Sussurro", "Nightingale", "Shining", "Warfarin", "Silence", "Ptilopsis", "Perfumer", "Gavial", "Myrrh", "Ansel", "Hibiscus", "Lancet-2", "Scene", "Suzuran", "Podenco", "Tsukinogi", "Shamare", "Magallan", "Glaucus", "Angelina", "Sora", "Istina", "Pramanix", "Mayer", "Earthspirit", "Deepcolor", "Orchid", "Aciddrop", "Andreana", "Rosa(Poca)", "W", "Sesa", "GreyThroat", "Ambriel", "May", "Executor", "Vermeil", "Schwarz", "Catapult", "Exusiai", "Firewatch", "Provence", "Meteorite", "Platinum", "Blue Poison", "Shirayuki", "Meteor", "Jessica", "Adnachiel", "Kroos", "Rangers", "Chiave", "Elysium", "Bagpipe", "Reed", "Myrtle", "Grani", "Siege", "Texas", "Zima", "Vigna", "Scavenger", "Courier", "Plume", "Vanilla", "Fang", "Yato", "Jaye", "Weedy", "THRM-EX", "Phantom", "Aak", "Snowsant", "Waai Fu", "Ethan", "FEater", "Manticore", "Cliffheart", "Projekt Red", "Shaw", "Rope", "Gravel", "Eunectes", "Asbestos", "Nian", "Hung", "Bison", "Dur-nar", "Spot", "Saria", "Hoshiguma", "Vulcan", "Croissant", "Liskarm", "Nearl", "Gummy", "Cuora", "Matterhorn", "Beagle", "Cardigan", "Noir Corne", "Flint", "Thorns", "Ayerscarpe", "Sideroca", "Cutter", "Bibeak", "Utage", "Blaze", "Broca", "Flamebringer", "Hellagur", "Astesia", "Ch'en", "Swire", "Popukar", "Skadi", "Beehunter", "Midnight", "Savage", "SilverAsh", "Specter", "Lappland", "Indra", "Franka", "Mousse", "Estelle", "Frostleaf", "Matoimaru", "Dobermann", "Melantha", "Castle-3", "Tomimi", "Beeswax", "Click", "Leonhardt", "Absinthe", "Ceobe", "Leizi", "Mostima", "Greyy", "Nightmare", "Eyjafjalla", "Ifrit", "Skyfire", "Amiya", "Gitano", "Haze", "Steward", "Lava", "12F", "Durin"];

var userPoolOfOperators = [""];
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













// MAIN EXECUTION

var rollATeamButton = document.getElementById("RollATeamButton"); 

for (var i = 0; i < completePoolOfOperatorsDefault.length; i++)
{
    CreateDummyCheckbox(completePoolOfOperatorsDefault[i]);
}

var userOperatorCheckboxes = document.getElementsByClassName("UserOperatorCheckbox");


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

    dummyCheckboxClone.childNodes[0].outerText = operatorName;

    dummyCheckboxClone.childNodes[1].value = operatorName;

    document.getElementById("checkboxesDiv").appendChild(dummyCheckboxClone);

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