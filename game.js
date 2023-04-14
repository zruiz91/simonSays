

let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

var started = false;

let level = 0;


//detects when a keyboard key is pressedfor the first time and then calls the nextSequence function
$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

})
//detects when any of the buttons are clicked and triggers a handler function called userChoeColor
$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    // console.log(event.target.id);
    console.log(userClickedPattern.length - 1);
    checkAnswer(userClickedPattern.length - 1);
});



//function that generates random number (0,1,2,3)
function nextSequence() {

    //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    // animatePress(randomChosenColor)

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

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

//function that checks to see if the users answer matches the pattern given by the computer
function checkAnswer(currentLevel) {

    //checks if most recent user answer is the same as the game pattern
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        console.log("success");

        //if recent user answer was correct then run nextSequence after timeout.
        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {

        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function () {

            $("body").removeClass("game-over");
        }, 200)

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }

}


// function that starts the game over

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}