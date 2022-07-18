
var imgArray = [];

imgArray.push("images/dice1.png");
imgArray.push("images/dice2.png");
imgArray.push("images/dice3.png");
imgArray.push("images/dice4.png");
imgArray.push("images/dice5.png");
imgArray.push("images/dice6.png");

var random1 = Math.random();
random1 = Math.round(random1*5);
var diceImage1 = imgArray[random1];
document.querySelector(".img1").setAttribute("src",diceImage1);

var random2 = Math.random();
random2 = Math.round(random2*5);
var diceImage2 = imgArray[random2];
document.querySelector(".img2").setAttribute("src",diceImage2);

if(random1 === random2){
  document.querySelector("h1").innerHTML="There is a tie!!!";
}else if(random1 > random2){
  document.querySelector("h1").innerHTML="🚩Player 1 won!!!";
}else if(random1 < random2){
  document.querySelector("h1").innerHTML="Player 2 won!!!🚩";
}
