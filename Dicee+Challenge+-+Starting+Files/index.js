var number = Math.floor(Math.random() * 6);
number = number + 1;
var img = "images/dice" + number + ".png";
document.querySelector("img").setAttribute("src", img);

var number2 = Math.floor(Math.random() * 6);
number2 = number2 + 1;

var img2 = "images/dice" + number2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", img2);

if (number > number2) {
  document.querySelector("h1").innerHTML = "player 1 won";
} else if (number2 > number) {
  document.querySelector("h1").innerHTML = "player 2 won";
} else {
  document.querySelector("h1").innerHTML = "draw";
}
