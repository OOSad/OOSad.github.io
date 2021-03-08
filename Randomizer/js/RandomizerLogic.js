var completePoolOfOperators = ["Folinic", "Ceylon", "Breeze", "Sussurro", "Nightingale", "Shining", "Warfarin", "Silence", "Ptilopsis", "Perfumer", "Gavial", "Myrrh", "Ansel", "Hibiscus", "Lancet-2", "Scene", "Suzuran", "Podenco", "Tsukinogi", "Shamare", "Magallan", "Glaucus", "Angelina", "Sora", "Istina", "Pramanix", "Mayer", "Earthspirit", "Deepcolor", "Orchid", "Aciddrop", "Andreana", "Rosa(Poca)", "W", "Sesa", "GreyThroat", "Ambriel", "May", "Executor", "Vermeil", "Schwarz", "Catapult", "Exusiai", "Firewatch", "Provence", "Meteorite", "Platinum", "Blue Poison", "Shirayuki", "Meteor", "Jessica", "Adnachiel", "Kroos", "Rangers", "Chiave", "Elysium", "Bagpipe", "Reed", "Myrtle", "Grani", "Siege", "Texas", "Zima", "Vigna", "Scavenger", "Courier", "Plume", "Vanilla", "Fang", "Yato", "Jaye", "Weedy", "THRM-EX", "Phantom", "Aak", "Snowsant", "Waai Fu", "Ethan", "FEater", "Manticore", "Cliffheart", "Projekt Red", "Shaw", "Rope", "Gravel", "Eunectes", "Asbestos", "Nian", "Hung", "Bison", "Dur-nar", "Spot", "Saria", "Hoshiguma", "Vulcan", "Croissant", "Liskarm", "Nearl", "Gummy", "Cuora", "Matterhorn", "Beagle", "Cardigan", "Noir Corne", "Flint", "Thorns", "Ayerscarpe", "Sideroca", "Cutter", "Bibeak", "Utage", "Blaze", "Broca", "Flamebringer", "Hellagur", "Astesia", "Ch'en", "Swire", "Popukar", "Skadi", "Beehunter", "Midnight", "Savage", "SilverAsh", "Specter", "Lappland", "Indra", "Franka", "Mousse", "Estelle", "Frostleaf", "Matoimaru", "Dobermann", "Melantha", "Castle-3", "Tomimi", "Beeswax", "Click", "Leonhardt", "Absinthe", "Ceobe", "Leizi", "Mostima", "Greyy", "Nightmare", "Eyjafjalla", "Ifrit", "Skyfire", "Amiya", "Gitano", "Haze", "Steward", "Lava", "12F", "Durin"];

var medicOperators = ["Folinic", "Ceylon", "Breeze", "Sussurro", "Nightingale", "Shining", "Warfarin", "Silence", "Ptilopsis", "Perfumer", "Gavial", "Myrrh", "Ansel", "Hibiscus", "Lancet-2"];
var supporterOperators = ["Scene", "Suzuran", "Podenco", "Tsukinogi", "Shamare", "Magallan", "Glaucus", "Angelina", "Sora", "Istina", "Pramanix", "Mayer", "Earthspirit", "Deepcolor", "Orchid"];
var sniperOperators = ["Aciddrop", "Andreana", "Rosa(Poca)", "W", "Sesa", "GreyThroat", "Ambriel", "May", "Executor", "Vermeil", "Schwarz", "Catapult", "Exusiai", "Firewatch", "Provence", "Meteorite", "Platinum", "Blue Poison", "Shirayuki", "Meteor", "Jessica", "Adnachiel", "Kroos", "Rangers"];
var vanguardOperators = ["Chiave", "Elysium", "Bagpipe", "Reed", "Myrtle", "Grani", "Siege", "Texas", "Zima", "Vigna", "Scavenger", "Courier", "Plume", "Vanilla", "Fang", "Yato"];
var specialistOperators = ["Jaye", "Weedy", "THRM-EX", "Phantom", "Aak", "Snowsant", "Waai Fu", "Ethan", "FEater", "Manticore", "Cliffheart", "Projekt Red", "Shaw", "Rope", "Gravel"];
var defenderOperators = ["Eunectes", "Asbestos", "Nian", "Hung", "Bison", "Dur-nar", "Spot", "Saria", "Hoshiguma", "Vulcan", "Croissant", "Liskarm", "Nearl", "Gummy", "Cuora", "Matterhorn", "Beagle", "Cardigan", "Noir Corne"];
var guardOperators = ["Flint", "Thorns", "Ayerscarpe", "Sideroca", "Cutter", "Bibeak", "Utage", "Blaze", "Broca", "Flamebringer", "Hellagur", "Astesia", "Ch'en", "Swire", "Popukar", "Skadi", "Beehunter", "Midnight", "Savage", "SilverAsh", "Specter", "Lappland", "Indra", "Franka", "Mousse", "Estelle", "Frostleaf", "Matoimaru", "Dobermann", "Melantha", "Castle-3"];
var casterOperators = ["Tomimi", "Beeswax", "Click", "Leonhardt", "Absinthe", "Ceobe", "Leizi", "Mostima", "Greyy", "Nightmare", "Eyjafjalla", "Ifrit", "Skyfire", "Amiya", "Gitano", "Haze", "Steward", "Lava", "12F", "Durin"];

var oneStarOperators = ["THRM-EX", "Castle-3", "Lancet-2"];
var twoStarOperators = ["12F", "Durin", "Rangers", "Noir Corne", "Yato"];
var threeStarOperators = ["Spot", "Popukar", "Midnight", "Catapult", "Orchid", "Steward", "Ansel", "Hibiscus", "Lava", "Adnachiel", "Kroos", "Beagle", "Cardigan", "Melantha", "Plume", "Vanilla", "Fang"];
var fourStarOperators = ["Aciddrop", "Estelle", "Jaye", "Click", "Podenco", "Cutter", "Utage", "Ambriel", "May", "Ethan", "Dur-nar", "Vermeil", "Myrtle", "Sussurro", "Greyy", "Beehunter", "Shaw", "Earthspirit", "Deepcolor", "Gummy", "Cuora", "Matterhorn", "Perfumer", "Gavial", "Myrrh", "Rope", "Gravel", "Mousse", "Frostleaf", "Matoimaru", "Dobermann", "Vigna", "Scavenger", "Courier", "Shirayuki", "Meteor", "Jessica", "Gitano", "Haze"];
var fiveStarOperators = ["Flint", "Tomimi", "Scene", "Andreana", "Chiave", "Beeswax", "Ayerscarpe", "Folinic", "Leonhardt", "Absinthe", "Tsukinogi", "Asbestos", "Elysium", "Shamare", "Sideroca", "Sesa", "Bibeak", "Leizi", "Hung", "Snowsant", "GreyThroat", "Broca", "Reed", "Bison", "Waai Fu", "Ceylon", "Flamebringer", "Breeze", "Executor", "Astesia", "Glaucus", "Swire", "Grani", "Nightmare", "Savage", "FEater", "Manticore", "Sora", "Istina", "Pramanix", "Cliffheart", "Firewatch", "Provence", "Vulcan", "Croissant", "Liskarm", "Projekt Red", "Nearl", "Warfarin", "Silence", "Mayer", "Skyfire", "Amiya", "Meteorite", "Platinum", "Blue Poison", "Specter", "Lappland", "Indra", "Franka", "Texas", "Zima", "Ptilopsis"];
var sixStarOperators = ["Eunectes", "Thorns", "Suzuran", "Rosa(Poca)", "Weedy", "W", "Phantom", "Bagpipe", "Ceobe", "Nian", "Aak", "Blaze", "Mostima", "Magallan", "Hellagur", "Schwarz", "Ch'en", "Skadi", "SilverAsh", "Saria", "Hoshiguma", "Nightingale", "Shining", "Angelina", "Eyjafjalla", "Ifrit", "Siege", "Exusiai"];

var rollATeamButton = document.getElementById("RollATeamButton"); 

rollATeamButton.onclick = function()
{
    console.clear();
    
    console.log(FetchAllOperatorLabelsOnPage());
}

function GetRandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function FetchAllOperatorLabelsOnPage()
{
    var operatorLabels = document.getElementsByClassName("OperatorLabel");
    return operatorLabels;
}