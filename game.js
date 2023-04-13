let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];





//function that generates random number (0,1,2,3)
function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[nextSequence];

    gamePattern.push(randomChosenColor);

}