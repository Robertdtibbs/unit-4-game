// Variables

var blueCrystal = Math.floor(Math.random()*120)+39;
var redCrystal = Math.floor(Math.random()*120)+39;
var greenCrystal = Math.floor(Math.random()*120)+39;
var yellowCrystal = Math.floor(Math.random()*120)+39;
var randomNumber = Math.floor(Math.random()*120)+39;
var userNumber = 0;
var userWins = 0;
var userLosses = 0;


//function to set the board for the game
var startUp = function() {
    $("#random-number").text(randomNumber);
    blueCrystal.attr("data-blue-crystal", blueCrystal);
    redCrystal.attr("data-red-crystal", redCrystal);
    greenCrystal.attr("data-green-crystal", greenCrystal);
    yellowCrystal.attr("data-yellow-crystal", yellowCrystal);
};

// once the window loads the start up function starts
window.onload = function() {
    startUp();
}

$("#blue-crystal").on("click", function() {

    var blueCrystalValue = ($(this).attr("data-blue-crystal"));
    blueCrystalValue = parseInt(blueCrystalValue);

    userNumber += blueCrystalValue;

    if(userNumber === randomNumber) {
        $(#"")
    }
});