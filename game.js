let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let blueAudio = new Audio("sounds/blue.mp3");

let greenAudio = new Audio("sounds/green.mp3");

let redAudio = new Audio("sounds/red.mp3");

let yellowAudio = new Audio("sounds/yellow.mp3");

let wrongAudio = new Audio("sounds/wrong.mp3");

//adds event listener for the button to flash when clicked
$("#yellow").click(function () {
    $("#yellow").fadeOut(100).fadeIn(100)
    yellowAudio.play();
});

//adds event listener for the button to flash when clicked
$("#blue").click(function () {
    $("#blue").fadeOut(100).fadeIn(100)
    blueAudio.play();
});

//adds event listener for the button to flash when clicked
$("#red").click(function () {
    $("#red").fadeOut(100).fadeIn(100)
    redAudio.play();
});

//adds event listener for the button to flash when clicked
$("#green").click(function () {
    $("#green").fadeOut(100).fadeIn(100)
    greenAudio.play();
});


//function that generates random number (0,1,2,3)
function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[nextSequence];

    gamePattern.push(randomChosenColor);

}