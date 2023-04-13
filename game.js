let gamePattern = [];

let userClickedPattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

// let blueAudio = new Audio("sounds/blue.mp3");

// let greenAudio = new Audio("sounds/green.mp3");

// let redAudio = new Audio("sounds/red.mp3");

// let yellowAudio = new Audio("sounds/yellow.mp3");

// let wrongAudio = new Audio("sounds/wrong.mp3");

//adds event listener for the button to flash when clicked
// $("#yellow").click(function () {
//     $("#yellow").fadeOut(100).fadeIn(100)
//     yellowAudio.play();
// });

//adds event listener for the button to flash when clicked
// $("#blue").click(function () {
//     $("#blue").fadeOut(100).fadeIn(100)
//     blueAudio.play();
// });

//adds event listener for the button to flash when clicked
// $("#red").click(function () {
//     $("#red").fadeOut(100).fadeIn(100)
//     redAudio.play();
// });

//adds event listener for the button to flash when clicked
// $("#green").click(function () {
//     $("#green").fadeOut(100).fadeIn(100)
//     greenAudio.play();
// });

//detects when any of the buttons are clicked and triggers a handler function called userChoeColor

$(".btn").click(function () {
    chosenColor(this.id);
    // console.log(event.target.id);
});

//handler function that stores the id of the button thats been clicked

function chosenColor(color) {
    let userChosenColor = color;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
}

//function that generates random number (0,1,2,3)
function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    animatePress(randomChosenColor)

    // $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColor);

    console.log(gamePattern);

}


//function that handles the button sounds
function playSound(name) {
    let buttonAudio = new Audio("sounds/" + name + ".mp3");

    buttonAudio.play();
}

//function that handles the button animations
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100)
}