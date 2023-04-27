/* Declare variables below to save the different sections (divs) of your story*/
let cellOption = document.querySelector(".option-one");
let cellAnswer = document.querySelector(".option-one-screen");
let sleepOption = document.querySelector(".option-two");
let sleepAnswer = document.querySelector(".option-two-end");
let holeOption = document.querySelector(".ok");
let holeAnswer = document.querySelector(".option-one-hole");
let hiOption = document.querySelector(".op")
let hiAnswer = document.querySelector(".optionhi")
let moveOption = document.querySelector(".opp")
let moveAnswer = document.querySelector(".optionmove")
let toiletOption = document.querySelector(".okt");
let toiletAnswer = document.querySelector(".option-one-toilet");
let restart = document.querySelector(".restart")







sleepOption.onclick = function(){
  sleepAnswer.style.display = "block";
};

cellOption.onclick = function(){
  cellAnswer.style.display = "block";
};

holeOption.onclick = function(){
  holeAnswer.style.display = "block";
};

toiletOption.onclick = function(){
  toiletAnswer.style.display = "block";
};

hiOption.onclick = function(){
  hiAnswer.style.display = "block";
};

moveOption.onclick = function(){
  moveAnswer.style.display = "block";
};

restart.onclick = function()
{
  cellAnswer.style.display = "block";
  sleepAnswer.style.display = "none";
  cellAnswer.style.display = "none";
  holeAnswer.style.display = "none";
  toiletAnswer.style.display = "none";
  hiAnswer.style.display = "none";
  moveAnswer.style.display = "none";
}









