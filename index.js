var cardVisuals = new Array(4);
let cardSources = ['c-teacher.png', 'c-student.png', 'c-admin.png', 'c-parent.png']

let fullGame = ['title.png', cardSources, 'great-work.png' ]


/* SHUFFLE */
let shuffleCards = function(arr){
	// idea is to start from the last item in the array
	let newPosition,
		temp;
	for (let i = arr.length - 1; i > 0; i--) {
		newPosition = Math.floor(Math.random() * (i + 1));
		//setting each position to a random number
		// Math.floor to remove decimal
		temp = arr[i];
		arr[i] = arr[newPosition];
		arr[newPosition] = temp;
	}
	return arr;
};



var firstImage = document.getElementById('mainImage');
let newArray = shuffleCards(fullGame[1]);
var imageIndex = 0;

function changeImage(){
	firstImage.setAttribute("src", fullGame[1][imageIndex]);
	//firstImage.setAttribute("src", newArray[imageIndex]);
	//firstImage.setAttribute("src", fullGame[imageIndex]);
	imageIndex++;
	if (imageIndex > 4) {
		firstImage.setAttribute("src", fullGame[2]);
		//imageIndex = 0;
		newArray = shuffleCards(cardSources);
		// take it out of the array and put it back in again
	}
}

// for every array in the fullGame array
// if the length of the array > 1
	// run the changeImage function
// else
	// imageIndex



/*
// for every card in cardVisuals, link to a card in cardSources
for (var i = 0; i < cardVisuals.length; i++) {
	cardVisuals[i] = document.createElement("img");
	cardVisuals[i].src = cardSources[i];
	document.body.appendChild(cardVisuals[i]);	
}




/*
var testCard = new Image();
var x = document.getElementById("admin").src;
x = "img/c-admin.png";
document.getElementById("myImg").src = "hackanm.gif";
testCard.src = document.getElementsByClassName("cardOne");
document.body.appendChild(testCard);


CREATE SLIDESHOW 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = newArray;
  if (n > slides.length) { // when the user reaches the last slide, then reset. but we want to change this so that the "Game over! Restart?" card appears
	  slideIndex = 1
  }
	
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
*/


















