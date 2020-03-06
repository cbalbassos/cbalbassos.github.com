let cardSources = ['img/c-teacher.svg',
				   'img/c-student.svg',
				   'img/c-admin.svg',
				   'img/c-parent.svg']

let fullGame = ['img/title.svg', cardSources, 'img/great-work.svg' ]



/* SHUFFLE */
let shuffleCards = function(arr){
	let newPosition,
		temp;
	for (let i = arr.length - 1; i > 0; i--) {
		newPosition = Math.floor(Math.random() * (i + 1));
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
	imageIndex++;
	document.getElementById("count").style.color = "#FFFFFF";
	
	
	if (imageIndex == 1) {
		timer();
	}
	
	
	if (imageIndex < newArray.length + 1) {
		firstImage.setAttribute("src", fullGame[1][imageIndex -1]);
	}
		
	else if (imageIndex == newArray.length + 1) {
		document.getElementById("count").style.color = "#15364F";
		firstImage.setAttribute("src", fullGame[2]); //set firstImage to "great-work card"
		newArray = shuffleCards(cardSources); //shuffle cards
	}
	
	else if (imageIndex > newArray.length + 1) { //if the user goes through the entire array
		location.reload();
	}	
	
}



//TIMER
function timer() {
	var count = 59;
	var interval = setInterval
		(function(){
		  document.getElementById('count').innerHTML=count;
		  count--;
		  if (count === -1){
			document.getElementById('count').innerHTML="Time's Up";
			firstImage.setAttribute("src", fullGame[2]); // shows the "great-work" card
			imageIndex = 5  
			clearInterval(interval);
		  }
		}, 1000);
}










