var guardOperators = ["Flint", "Thorns", "Ayerscarpe", "Sideroca", "Cutter", "Bibeak", "Utage", "Blaze", "Broca", "Flamebringer", "Hellagur", "Astesia", "Ch'en", "Swire", "Popukar", "Skadi", "Beehunter", "Midnight", "Savage", "SilverAsh", "Specter", "Lappland", "Indra", "Franka", "Mousse", "Estelle", "Frostleaf", "Matoimaru", "Dobermann", "Melantha", "Castle-3"];

var rollATeamButton = document.getElementById("RollATeamButton"); 

rollATeamButton.onclick = function()
{
    console.clear();
    
    for (var i = 0; i < 12; i++)
    {
        console.log(guardOperators[getRandomNumber(0, guardOperators.length)]);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }