var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*
function randomF(n) {
	console.log(Math.random());
}
*/

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
	
	
}// JavaScript Document