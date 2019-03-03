// Variables

var blueCrystal = Math.floor(Math.random()*49)+1;
var redCrystal = Math.floor(Math.random()*49)+1;
var greenCrystal = Math.floor(Math.random()*49)+1;
var yellowCrystal = Math.floor(Math.random()*49)+1;
var randomNumber = Math.floor(Math.random()*120)+39;
var userNumber = 0;
var userWins = 0;
var userLosses = 0;

//function to set the board for the game
var startUp = function() {
    $("#random-number").text(randomNumber + " feet to the peak");
    $("#blue-crystal").attr("value", blueCrystal);
    $("#red-crystal").attr("value", redCrystal);
    $("#green-crystal").attr("value", greenCrystal);
    $("#yellow-crystal").attr("value", yellowCrystal);
    $("#your-wins").text("Successful summits: " + userWins);
    $("#your-losses").text("Amount of Everest disasters: " + userLosses);
    
    console.log(randomNumber);
};

function resetStartUp(){
    randomNumber = Math.floor(Math.random()*120)+79;
    $("#random-number").text(randomNumber + " feet to the peak");
    $("#blue-crystal").attr("value", blueCrystal);
    $("#red-crystal").attr("value", redCrystal);
    $("#green-crystal").attr("value", greenCrystal);
    $("#yellow-crystal").attr("value", yellowCrystal);
    $("#your-wins").text("Successful summits: " + userWins);
    $("#your-losses").text("Amount of Everest disasters: " + userLosses);
    $(".current-score").empty();
    $(".result").empty();
    $(".restart").empty();
    
    userNumber = 0;
    

    console.log(randomNumber);
};

document.onkeyup = function(event){
    var keycode = event.keyCode;
    if(keycode === 13){
        resetStartUp();
    }
}
// once the window loads the start up function starts
window.onload = function() {
    startUp();

$(".crystal").on("click", function() {
console.log("crystal");
    var crystalValue = ($(this).attr("value"));
    console.log(crystalValue);
    crystalValue = parseInt(crystalValue);

    userNumber = userNumber + crystalValue;
    $(".current-score").text(userNumber + " feet climbed");

    console.log(userNumber)
    console.log(crystalValue)
    if(userNumber === randomNumber) {
        userWins ++;
        $(".result").text("You reached the peak");
        $(".restart").text("Press enter to climb again.");
    }
    if(userNumber > randomNumber){
        userLosses++;
        $(".result").text("A Sherpa will retrieve your frozen body.");
        $(".restart").text("Press enter to climb again.");
    }
});

}