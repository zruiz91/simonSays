let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

//adds event listener for the button to flash when clicked
$("#yellow").click(function () {
    $("#yellow").fadeOut(100).fadeIn(100)
});

//adds event listener for the button to flash when clicked
$("#blue").click(function () {
    $("#blue").fadeOut(100).fadeIn(100)
});

//adds event listener for the button to flash when clicked
$("#red").click(function () {
    $("#red").fadeOut(100).fadeIn(100)
});

//adds event listener for the button to flash when clicked
$("#green").click(function () {
    $("#green").fadeOut(100).fadeIn(100)
});


//function that generates random number (0,1,2,3)
function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[nextSequence];

    gamePattern.push(randomChosenColor);

}