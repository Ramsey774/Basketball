const scoreOne = document.getElementById("score-one");
const scoreTwo = document.getElementById("score-two");

let homeScore = 0;
let guestScore = 0;

function homePlusOne() {
  homeScore += 1;
  scoreOne.textContent = homeScore;
}
function homePlusTwo() {
  homeScore += 2;
  scoreOne.textContent = homeScore;

}
function homePlusThree() {
  homeScore += 3;
  scoreOne.textContent = homeScore;
}
function guestPlusOne() {
  guestScore += 1;
  scoreTwo.textContent = guestScore;
}
function guestPlusTwo() {
  guestScore += 2;
  scoreTwo.textContent = guestScore;
}
function guestPlusThree() {
  guestScore += 3;
  scoreTwo.textContent = guestScore;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  scoreOne.textContent = homeScore;
  scoreTwo.textContent = guestScore;
  homeName.style.color = "white";
  guestName.style.color = "white";
}





