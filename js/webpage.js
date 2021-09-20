var menuIcon=document.querySelector(".menuIcon");
var downMenu=document.querySelector(".downmenu");
var firstCard=document.querySelector(".first");
var secondCard=document.querySelector(".second");
var thirdCard=document.querySelector(".third");
var firstLeft=document.querySelector(".firstleft");
var firstRight=document.querySelector(".firstright");
var secondLeft=document.querySelector(".secondleft");
var secondRight=document.querySelector(".secondright");
var thirdLeft=document.querySelector(".thirdleft");
var thirdRight=document.querySelector(".thirdright");
//open menu
menuIcon.addEventListener("click", function () {
if (downMenu.style.display === "block") {
    downMenu.style.display = "none";
  } else {
    downMenu.style.display = "block";
  }
});
//change card
firstRight.addEventListener("click", function () {
  firstCard.style.display="none";
  secondCard.style.display="block";
  });
  secondRight.addEventListener("click", function () {
    secondCard.style.display="none";
    thirdCard.style.display="block";
    });
    thirdRight.addEventListener("click", function () {
      thirdCard.style.display="none";
      firstCard.style.display="block";
      });
      firstLeft.addEventListener("click", function () {
        firstCard.style.display="none";
        thirdCard.style.display="block";
        });
        secondLeft.addEventListener("click", function () {
          secondCard.style.display="none";
          firstCard.style.display="block";
          });
          thirdLeft.addEventListener("click", function () {
            thirdCard.style.display="none";
            secondCard.style.display="block";
            });