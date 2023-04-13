

let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let isFirstKeyPress = true;

let level = 0;

//detects when a keyboard key is pressedfor the first time and then calls the nextSequence function
$(document).keydown(function () {
    if (isFirstKeyPress) {
        $("#level-title").text("Level " + level);
        nextSequence();
        isFirstKeyPress = false;
    }

})
//detects when any of the buttons are clicked and triggers a handler function called userChoeColor
$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    playSound(userChosenColor);
    // console.log(event.target.id);
});



//function that generates random number (0,1,2,3)
function nextSequence() {

    level++;

    $("#level-title" ).text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    // animatePress(randomChosenColor)

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColor);



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