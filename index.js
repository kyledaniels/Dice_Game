var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

var image1 = document.querySeclectorAll("img")[0];

image1.setAttribute("src", randomImageSource);