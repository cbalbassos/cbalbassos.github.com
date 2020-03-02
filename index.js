let cardSources = ['img/c-teacher.png',
				   'img/c-student.png',
				   'img/c-admin.png',
				   'img/c-parent.png']

let fullGame = ['img/title.png', cardSources, 'img/great-work.png' ]



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
	
	if (imageIndex < newArray.length + 1) {
		firstImage.setAttribute("src", fullGame[1][imageIndex -1]);
	}
		
	else if (imageIndex == newArray.length + 1) {
		firstImage.setAttribute("src", fullGame[2]); //set firstImage to "great-work card"
		newArray = shuffleCards(cardSources);
	}
	
	else if (imageIndex > newArray.length + 1) {
		location.reload();
	}
		
	
}



