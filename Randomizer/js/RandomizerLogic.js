// PROGRAM VARIABLES

var completePoolOfOperators = [];
var completePoolOfOperatorsDefault = ["Whislash", "Blemishine", "Aosta", "Bubble", "Conviction", "Mint", "April", "Arene", "Surtr", "Folinic", "Ceylon", "Breeze", "Sussurro", "Nightingale", "Shining", "Warfarin", "Silence", "Ptilopsis", "Perfumer", "Gavial", "Myrrh", "Ansel", "Hibiscus", "Lancet-2", "Scene", "Suzuran", "Podenco", "Tsukinogi", "Shamare", "Magallan", "Glaucus", "Angelina", "Sora", "Istina", "Pramanix", "Mayer", "Earthspirit", "Deepcolor", "Orchid", "Aciddrop", "Andreana", "Rosa(Poca)", "W", "Sesa", "GreyThroat", "Ambriel", "May", "Executor", "Vermeil", "Schwarz", "Catapult", "Exusiai", "Firewatch", "Provence", "Meteorite", "Platinum", "Blue Poison", "Shirayuki", "Meteor", "Jessica", "Adnachiel", "Kroos", "Rangers", "Chiave", "Elysium", "Bagpipe", "Reed", "Myrtle", "Grani", "Siege", "Texas", "Zima", "Vigna", "Scavenger", "Courier", "Plume", "Vanilla", "Fang", "Yato", "Jaye", "Weedy", "THRM-EX", "Phantom", "Aak", "Snowsant", "Waai Fu", "Ethan", "FEater", "Manticore", "Cliffheart", "Projekt Red", "Shaw", "Rope", "Gravel", "Eunectes", "Asbestos", "Nian", "Hung", "Bison", "Dur-nar", "Spot", "Saria", "Hoshiguma", "Vulcan", "Croissant", "Liskarm", "Nearl", "Gummy", "Cuora", "Matterhorn", "Beagle", "Cardigan", "Noir Corne", "Flint", "Thorns", "Ayerscarpe", "Sideroca", "Cutter", "Bibeak", "Utage", "Blaze", "Broca", "Flamebringer", "Hellagur", "Astesia", "Ch'en", "Swire", "Popukar", "Skadi", "Beehunter", "Midnight", "Savage", "SilverAsh", "Specter", "Lappland", "Indra", "Franka", "Mousse", "Estelle", "Frostleaf", "Matoimaru", "Dobermann", "Melantha", "Castle-3", "Tomimi", "Beeswax", "Click", "Leonhardt", "Absinthe", "Ceobe", "Leizi", "Mostima", "Greyy", "Nightmare", "Eyjafjalla", "Ifrit", "Skyfire", "Amiya", "Gitano", "Haze", "Steward", "Lava", "12F", "Durin"];
var userPoolOfOperators = [];

var rolledPoolOfOperators = [];
var rolledPoolOfOperatorsDefault = [];
var userOperatorCheckboxes = [];

var medicOperators = [];
var medicOperatorsDefault = ["Folinic", "Ceylon", "Breeze", "Sussurro", "Nightingale", "Shining", "Warfarin", "Silence", "Ptilopsis", "Perfumer", "Gavial", "Myrrh", "Ansel", "Hibiscus", "Lancet-2"];
var supporterOperators = [];
var supporterOperatorsDefault = ["Scene", "Suzuran", "Podenco", "Tsukinogi", "Shamare", "Magallan", "Glaucus", "Angelina", "Sora", "Istina", "Pramanix", "Mayer", "Earthspirit", "Deepcolor", "Orchid"];
var sniperOperators = [];
var sniperOperatorsDefault = ["Aosta", "April", "Aciddrop", "Andreana", "Rosa(Poca)", "W", "Sesa", "GreyThroat", "Ambriel", "May", "Executor", "Vermeil", "Schwarz", "Catapult", "Exusiai", "Firewatch", "Provence", "Meteorite", "Platinum", "Blue Poison", "Shirayuki", "Meteor", "Jessica", "Adnachiel", "Kroos", "Rangers"];
var vanguardOperators = [];
var vanguardOperatorsDefault = ["Chiave", "Elysium", "Bagpipe", "Reed", "Myrtle", "Grani", "Siege", "Texas", "Zima", "Vigna", "Scavenger", "Courier", "Plume", "Vanilla", "Fang", "Yato"];
var specialistOperators = [];
var specialistOperatorsDefault = ["Jaye", "Weedy", "THRM-EX", "Phantom", "Aak", "Snowsant", "Waai Fu", "Ethan", "FEater", "Manticore", "Cliffheart", "Projekt Red", "Shaw", "Rope", "Gravel"];
var defenderOperators = [];
var defenderOperatorsDefault = ["Blemishine", "Bubble", "Eunectes", "Asbestos", "Nian", "Hung", "Bison", "Dur-nar", "Spot", "Saria", "Hoshiguma", "Vulcan", "Croissant", "Liskarm", "Nearl", "Gummy", "Cuora", "Matterhorn", "Beagle", "Cardigan", "Noir Corne"];
var guardOperators = [];
var guardOperatorsDefault = ["Whislash", "Conviction", "Arene", "Surtr", "Flint", "Thorns", "Ayerscarpe", "Sideroca", "Cutter", "Bibeak", "Utage", "Blaze", "Broca", "Flamebringer", "Hellagur", "Astesia", "Ch'en", "Swire", "Popukar", "Skadi", "Beehunter", "Midnight", "Savage", "SilverAsh", "Specter", "Lappland", "Indra", "Franka", "Mousse", "Estelle", "Frostleaf", "Matoimaru", "Dobermann", "Melantha", "Castle-3"];
var casterOperators = [];
var casterOperatorsDefault = ["Mint", "Tomimi", "Beeswax", "Click", "Leonhardt", "Absinthe", "Ceobe", "Leizi", "Mostima", "Greyy", "Nightmare", "Eyjafjalla", "Ifrit", "Skyfire", "Amiya", "Gitano", "Haze", "Steward", "Lava", "12F", "Durin"];

var listOfThingsToFilterPoolWith = [];

var oneStarOperators = [];
var oneStarOperatorsDefault = ["THRM-EX", "Castle-3", "Lancet-2"];
var twoStarOperators = [];
var twoStarOperatorsDefault = ["12F", "Durin", "Rangers", "Noir Corne", "Yato"];
var threeStarOperators = [];
var threeStarOperatorsDefault = ["Spot", "Popukar", "Midnight", "Catapult", "Orchid", "Steward", "Ansel", "Hibiscus", "Lava", "Adnachiel", "Kroos", "Beagle", "Cardigan", "Melantha", "Plume", "Vanilla", "Fang"];
var fourStarOperators = [];
var fourStarOperatorsDefault = ["Bubble", "Conviction", "Arene", "Aciddrop", "Estelle", "Jaye", "Click", "Podenco", "Cutter", "Utage", "Ambriel", "May", "Ethan", "Dur-nar", "Vermeil", "Myrtle", "Sussurro", "Greyy", "Beehunter", "Shaw", "Earthspirit", "Deepcolor", "Gummy", "Cuora", "Matterhorn", "Perfumer", "Gavial", "Myrrh", "Rope", "Gravel", "Mousse", "Frostleaf", "Matoimaru", "Dobermann", "Vigna", "Scavenger", "Courier", "Shirayuki", "Meteor", "Jessica", "Gitano", "Haze"];
var fiveStarOperators = [];
var fiveStarOperatorsDefault = ["Whislash", "Aosta", "Mint", "April", "Flint", "Tomimi", "Scene", "Andreana", "Chiave", "Beeswax", "Ayerscarpe", "Folinic", "Leonhardt", "Absinthe", "Tsukinogi", "Asbestos", "Elysium", "Shamare", "Sideroca", "Sesa", "Bibeak", "Leizi", "Hung", "Snowsant", "GreyThroat", "Broca", "Reed", "Bison", "Waai Fu", "Ceylon", "Flamebringer", "Breeze", "Executor", "Astesia", "Glaucus", "Swire", "Grani", "Nightmare", "Savage", "FEater", "Manticore", "Sora", "Istina", "Pramanix", "Cliffheart", "Firewatch", "Provence", "Vulcan", "Croissant", "Liskarm", "Projekt Red", "Nearl", "Warfarin", "Silence", "Mayer", "Skyfire", "Amiya", "Meteorite", "Platinum", "Blue Poison", "Specter", "Lappland", "Indra", "Franka", "Texas", "Zima", "Ptilopsis"];
var sixStarOperators = [];
var sixStarOperatorsDefault = ["Blemishine", "Surtr", "Eunectes", "Thorns", "Suzuran", "Rosa(Poca)", "Weedy", "W", "Phantom", "Bagpipe", "Ceobe", "Nian", "Aak", "Blaze", "Mostima", "Magallan", "Hellagur", "Schwarz", "Ch'en", "Skadi", "SilverAsh", "Saria", "Hoshiguma", "Nightingale", "Shining", "Angelina", "Eyjafjalla", "Ifrit", "Siege", "Exusiai"];
var charIdMap = {"Whislash": "char_265_sophia", "Blemishine": "char_423_blemsh", "Aosta": "char_346_aosta", "Bubble": "char_381_bubble", "Conviction": "char_159_peacok", "Mint": "char_388_mint", "April": "char_365_aprl", "Arene": "char_271_spikes", "Surtr": "char_350_surtr", "Lancet-2": "char_285_medic2","Castle-3": "char_286_cast3","THRM-EX": "char_376_therex","Yato": "char_502_nblade","Noir Corne": "char_500_noirc","Rangers": "char_503_rang","Durin": "char_501_durin","12F": "char_009_12fce","Fang": "char_123_fang","Vanilla": "char_240_wyvern","Reserve Operator - Melee": "char_504_rguard","Plume": "char_192_falco","Melantha": "char_208_melan","Popukar": "char_281_popka","Cardigan": "char_209_ardign","Beagle": "char_122_beagle","Spot": "char_284_spot","Kroos": "char_124_kroos","Adnachiel": "char_211_adnach","Reserve Operator - Sniper": "char_507_rsnipe","Lava": "char_121_lava","Hibiscus": "char_120_hibisc","Ansel": "char_212_ansel","Reserve Operator - Logistics": "char_506_rmedic","Steward": "char_210_stward","Reserve Operator - Caster": "char_505_rcast","Orchid": "char_278_orchid","Haze": "char_141_nights","Gitano": "char_109_fmout","Greyy": "char_253_greyy","Click": "char_328_cammou","Jessica": "char_235_jesica","Meteor": "char_126_shotst","Vermeil": "char_190_clour","May": "char_133_mm","Shirayuki": "char_118_yuki","Ambriel": "char_302_glaze","Aciddrop": "char_366_acdrop","Courier": "char_198_blackd","Scavenger": "char_149_scave","Vigna": "char_290_vigna","Myrtle": "char_151_myrtle","Dobermann": "char_130_doberm","Matoimaru": "char_289_gyuki","Frostleaf": "char_193_frostl","Estelle": "char_127_estell","Mousse": "char_185_frncat","Cutter": "char_301_cutter","Utage": "char_337_utage","Gravel": "char_237_gravel","Jaye": "char_272_strong","Rope": "char_236_rope","Myrrh": "char_117_myrrh","Gavial": "char_187_ccheal","Sussurro": "char_298_susuro","Perfumer": "char_181_flower","Matterhorn": "char_199_yak","Cuora": "char_150_snakek","Gummy": "char_196_sunbr","Dur-nar": "char_260_durnar","Deepcolor": "char_110_deepcl","Earthspirit": "char_183_skgoat","Podenco": "char_258_podego","Ethan": "char_355_ethan","Shaw": "char_277_sqrrel","Ptilopsis": "char_128_plosis","Breeze": "char_275_breeze","Zima": "char_115_headbr","Texas": "char_102_texas","Chiave": "char_349_chiave","Reed": "char_261_sddrag","Elysium": "char_401_elysm","Swire": "char_308_swire","Franka": "char_106_franka","Flamebringer": "char_131_flameb","Sharp": "char_508_aguard","Indra": "char_155_tiger","Flint": "char_415_flint","Lappland": "char_140_whitew","Ayerscarpe": "char_294_ayer","Bibeak": "char_252_bibeak","Specter": "char_143_ghost","Broca": "char_356_broca","Astesia": "char_274_astesi","Sideroca": "char_333_sidero","Blue Poison": "char_129_bluep","Platinum": "char_204_platnm","GreyThroat": "char_367_swllow","Stormeye": "char_511_asnipe","Meteorite": "char_219_meteo","Sesa": "char_379_sesa","Executor": "char_279_excu","Amiya": "char_002_amiya","Absinthe": "char_405_absin","Tomimi": "char_411_tomimi","Skyfire": "char_166_skfire","Pith": "char_509_acast","Leizi": "char_306_leizi","Beeswax": "char_344_beewax","Leonhardt": "char_373_lionhd","Mayer": "char_242_otter","Scene": "char_336_folivo","Silence": "char_108_silent","Warfarin": "char_171_bldsk","Folinic": "char_345_folnic","Touch": "char_510_amedic","Ceylon": "char_348_ceylon","Nearl": "char_148_nearl","Hung": "char_226_hmau","Projekt Red": "char_144_red","Waai Fu": "char_243_waaifu","Liskarm": "char_107_liskam","Croissant": "char_201_moeshd","Bison": "char_325_bison","Vulcan": "char_163_hpsts","Asbestos": "char_378_asbest","Provence": "char_145_prove","Firewatch": "char_158_milu","Andreana": "char_218_cuttle","Cliffheart": "char_173_slchan","Snowsant": "char_383_snsant","Pramanix": "char_174_slbell","Shamare": "char_254_vodfox","Istina": "char_195_glassb","Glaucus": "char_326_glacus","Sora": "char_101_sora","Tsukinogi": "char_343_tknogi","Manticore": "char_215_mantic","FEater": "char_241_panda","Exusiai": "char_103_angel","Schwarz": "char_340_shwaz","W": "char_113_cqbw","Rosa(Poca)": "char_197_poca","Siege": "char_112_siege","Bagpipe": "char_222_bpipe","Ifrit": "char_134_ifrit","Mostima": "char_213_mostma","Eyjafjalla": "char_180_amgoat","Ceobe": "char_2013_cerber","Angelina": "char_291_aglina","Suzuran": "char_358_lisa","Magallan": "char_248_mgllan","Phantom": "char_250_phatom","Weedy": "char_400_weedy","Aak": "char_225_haak","Shining": "char_147_shining","Nightingale": "char_179_cgbird","Hoshiguma": "char_136_hsguma","Saria": "char_202_demkni","Nian": "char_2014_nian","Eunectes": "char_416_zumama","SilverAsh": "char_172_svrash","Thorns": "char_293_thorns","Ch'en": "char_010_chen","Blaze": "char_017_huang","Hellagur": "char_188_helage","Medic Drone": "token_10000_silent_healrb","Tentacle": "token_10001_deepcl_tentac","Mirage": "token_10003_cgbird_bird","Robotter": "token_10004_otter_motter","Soaring Dragon F": "token_10005_mgllan_drone1","Soaring Dragon L": "token_10005_mgllan_drone2","Soaring Dragon A": "token_10005_mgllan_drone3","Cursed Doll": "token_10006_vodfox_doll","Phantom in the Mirror": "token_10007_phatom_twin","Front Toward Enemy": "token_10008_cqbw_box","Industrial Reserve Water Cannon": "token_10009_weedy_cannon","Mobile Buggy Cam": "token_10010_folivo_car","Sand Obelisk": "token_10011_beewax_oblisk","Roadblock": "trap_001_crate","Stun Generator": "trap_002_emp","Gate": "trap_003_gate","Detector": "trap_005_sensor","Jammer": "trap_006_antidr","Turret": "trap_007_ballis","Command Terminal": "trap_008_farm","Portable Supply Station": "trap_009_battery","Originium Ice Crystal": "trap_010_frosts","Originium Altar": "trap_011_ore","Interference Mine": "trap_012_mine","Originium Flow Generator": "trap_013_blower","L-44 \"Gramophone\"": "trap_014_tower","Giant Mushroom": "trap_015_tree","Temporary Rhodes Island Employee": "trap_016_peon","Savage": "char_230_savage","Catapult": "char_282_catap","Midnight": "char_283_midn","Beehunter": "char_137_brownb","Nightmare": "char_164_nightm","Grani": "char_220_grani","Skadi": "char_263_skadi"};
var desiredTeamSize = 12;

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
        
var completePoolOfStages = [];
var completePoolOfStagesDefault = [ "0-1", "0-2", "0-3", "0-4", "0-5", "0-6", "0-7", "0-8", "0-9", "0-10", "0-11", "1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-8", "1-9", "1-10", "1-12", "2-1", "S2-1", "2-2", "S2-2", "S2-3", "S2-4", "2-3", "2-4", "S2-5", "S2-6", "S2-7", "2-5", "2-6", "2-7", "S2-8", "S2-9", "2-8", "2-9", "S2-10", "S2-11", "S2-12", "2-10", "3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7", "3-8", "4-1", "4-2", "4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9", "4-10", "5-1", "5-2", "5-3", "5-4", "5-5", "5-6", "5-7", "5-8", "5-9", "5-10", "6-1", "6-2", "6-3", "6-4", "6-5", "6-8", "6-9", "6-10", "6-11", "6-12", "6-14", "6-15", "6-16", "7-2", "7-3", "7-4", "7-5", "7-6", "7-8", "7-9", "7-10", "7-11", "7-12", "7-13", "7-14", "7-15", "7-16", "7-18", "S3-1", "S3-2", "S3-3", "S3-4", "S3-5", "S3-6", "S4-1", "S4-2", "S4-3", "S4-4", "S4-5", "S4-6", "S4-7", "S4-8", "S4-9", "S4-10", "S5-1", "S5-2", "S5-3", "S5-4", "S5-5", "S5-6", "S5-7", "S5-8", "H5-1", "H5-2", "H5-3", "H5-4", "H6-1", "H6-2", "H6-3", "H6-4", "H7-1", "H7-2", "H7-3", "H7-4" ];

var stagePoolsToFilterOut = [];

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



















// Create and initialize things that keep track of operators user has.

{
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
    completePoolOfOperatorsDefault = completePoolOfOperators;
}

















// Rolling Operators
// If the user hits the roll a team button, reset the involved lists, select random operators and update the labels on the page.
// If the user wants a specific number of operators from a certain class, then add those to the list of rolled operators first.

rollATeamButton.onclick = function()
{
    ResetALotOfPoolsToDefaultAtTheSameTime();

    RemoveDummyCheckboxValueFromListOfOperators(completePoolOfOperators);

    FilterCompletePoolOfOperatorsBasedOnFilteringPreferences(listOfThingsToFilterPoolWith);

    desiredTeamSize = FetchDesiredTeamSize();

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
        var selectedOperator = GetRandomItemFromPool(completePoolOfOperators);
        
        completePoolOfOperators.splice(completePoolOfOperators.indexOf(selectedOperator), 1);

        PushOperatorIntoPoolOfRolledOperators(selectedOperator);
    }


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

function RemoveDummyCheckboxValueFromListOfOperators(listOfOperators)  
{
    for (let i = 0; i < listOfOperators.length; i++)
    {
        if (listOfOperators[i] == "on")
        {
            listOfOperators.splice(listOfOperators.indexOf("on"), 1);
        }
    }

    //This function removes the default value of a checkbox (on) from an array.
    //We don't want this default "on" value to exist in any lists of operators.
}

function ResetALotOfPoolsToDefaultAtTheSameTime()
{
    completePoolOfOperators = ResetPoolOfThingsToDefault(completePoolOfOperatorsDefault);
    medicOperators = ResetPoolOfThingsToDefault(medicOperatorsDefault);
    supporterOperators = ResetPoolOfThingsToDefault(supporterOperatorsDefault);
    sniperOperators = ResetPoolOfThingsToDefault(sniperOperatorsDefault);
    vanguardOperators = ResetPoolOfThingsToDefault(vanguardOperatorsDefault);
    specialistOperators = ResetPoolOfThingsToDefault(specialistOperatorsDefault);
    defenderOperators = ResetPoolOfThingsToDefault(defenderOperatorsDefault);
    guardOperators = ResetPoolOfThingsToDefault(guardOperatorsDefault);
    casterOperators = ResetPoolOfThingsToDefault(casterOperatorsDefault);
    oneStarOperators = ResetPoolOfThingsToDefault(oneStarOperatorsDefault);
    twoStarOperators = ResetPoolOfThingsToDefault(twoStarOperatorsDefault);
    threeStarOperators = ResetPoolOfThingsToDefault(threeStarOperatorsDefault);
    fourStarOperators = ResetPoolOfThingsToDefault(fourStarOperatorsDefault);
    fiveStarOperators = ResetPoolOfThingsToDefault(fiveStarOperatorsDefault);
    sixStarOperators = ResetPoolOfThingsToDefault(sixStarOperatorsDefault);
    rolledPoolOfOperators = ResetPoolOfThingsToDefault(rolledPoolOfOperatorsDefault);
    completePoolOfStages = ResetPoolOfThingsToDefault(completePoolOfStagesDefault);
}

function ResetPoolOfThingsToDefault(poolOfDefaultsGlobal)
{
    var poolToReset = [];

    for (var i = 0; i < poolOfDefaultsGlobal.length; i++)
    {
        poolToReset.push(poolOfDefaultsGlobal[i]);
    }

    return poolToReset;
}

function FilterCompletePoolOfOperatorsBasedOnFilteringPreferences(listOfClasses)
{
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

function FetchDesiredTeamSize()
{
    return document.getElementById("DesiredTeamSizeField").value;
}

function CheckAndAddRandomUnit(desiredUnitAmount, poolOfOperatorsToCheckAgainst, classPoolToSpliceOperatorFrom)
{
    var foundUnits = 0;

    while (foundUnits < desiredUnitAmount)
    {
        for (var i = foundUnits; i < desiredUnitAmount; i++)
        {
            var randomUnit = GetRandomItemFromPool(classPoolToSpliceOperatorFrom);

            for (var y = 0; y < poolOfOperatorsToCheckAgainst.length; y++)
            {
                if (poolOfOperatorsToCheckAgainst[y] == randomUnit)
                {
                    PushOperatorIntoPoolOfRolledOperators(randomUnit);

                    desiredTeamSize--;

                    classPoolToSpliceOperatorFrom.splice(poolOfOperatorsToCheckAgainst.indexOf(randomUnit), 1);

                    poolOfOperatorsToCheckAgainst.splice(poolOfOperatorsToCheckAgainst.indexOf(randomUnit), 1);
                    
                    foundUnits++;
                }
            }
        }
    }

    poolOfOperatorsToCheckAgainst = SpliceAnEntireClassOutOfOperatorPool(completePoolOfOperators, medicOperators); //This isn't working properly for some reason.
}

function GetRandomItemFromPool(poolOfThings)
{
    var randomNumber = GetRandomNumber(0, poolOfThings.length);

    return poolOfThings[randomNumber];
}

function PushOperatorIntoPoolOfRolledOperators(operator)
{
    rolledPoolOfOperators.push(operator);
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

function UpdateOperatorLabelsOnPage()
{
    var operatorLabels = FetchAllOperatorLabelsOnPage()


    for (var i = 0; i < operatorLabels.length; i++)
    {
        operatorLabels[i].textContent = rolledPoolOfOperators[i];
        let im = document.createElement('img');
        im.src = 'https://aceship.github.io/AN-EN-Tags/img/avatars/' + charIdMap[rolledPoolOfOperators[i]] + '.png';
        if (charIdMap[rolledPoolOfOperators[i]])
        {
            operatorLabels[i].appendChild(im);
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