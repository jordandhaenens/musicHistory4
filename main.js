"use strict";
// retrieveSongs

function callBack(json){
	for(var prop in json){
		console.log("prop", prop); //for some reason this isn't looping through both keys
		let array = json.item;
		// console.log("callBack array", array);
		let str = "";
		array.forEach( (currVal, index) =>{
			str += `<h3>${currVal.title}</h3>
					<p>${currVal.artist} | ${currVal.album} | </p>`;
		});
	}
	console.log("str", str);
	writeFromJSON(str);
}
/**************************
Load JSON
**************************/
Loader.retrieveJSON(callBack);
/**************************
End
**************************/

/**************************
Add New Music via UI
**************************/
// function addNewMusic(){ //Tie songs back to main.js with a getter in ifee.js
// 	// let songArray = songs;
// 	let song = document.getElementById("inputSong").value;
// 	let artist = document.getElementById("inputArtist").value;
// 	let album = document.getElementById("inputAlbum").value;
// 	let str = song + " by " + artist + " on the album " + album;
// 	// songArray.push(str);

// 	writeFromPage(str);
// 	clearTextInputs();
// }

function addNewMusic(){
	let title = document.getElementById("inputSong").value;
	let artist = document.getElementById("inputArtist").value;
	let album = document.getElementById("inputAlbum").value;
	let songObj = {"title": title, "artist": artist, "album": album};
	console.log("songObj", songObj);
	Loader.addToLibrary(songObj);
	Loader.showSongs(callBack);

	// writeFromPage(str);
	clearTextInputs();
}

function clearTextInputs(){
	document.getElementById("inputSong").value = "";
	document.getElementById("inputArtist").value = "";
	document.getElementById("inputAlbum").value = "";
}
/**************************
End
**************************/

function cleanArrayAndWrite(array){
	array.forEach(function(element){
		var str = element.replace(/>/gi, '')
		.replace(/@/gi, '')
		.replace(/[*]/gi, '')
		.replace(/!/gi, '')
		.replace(/[(-)]/gi, '');
		str = str.split('  ').join(' ');
		write(str);
	});
}

function writeFromPage(string){
	var outputArea = document.getElementById("box2");
	var newDiv = `<div class="song">
					<p>${string}</p><hr>
				 </div>`;
	outputArea.innerHTML += newDiv;
}

function writeFromJSON(string){
	var outputArea = document.getElementById("box2");
	var newDiv = `<div class="song">
					${string}
				 </div>`;

	outputArea.innerHTML = newDiv;
}


// cleanArrayAndWrite(songs);

/**************************
Switch Between Views
**************************/
let inputView = document.getElementById("inputView");
let homeView = document.getElementById("box1");
let box2 = document.getElementById("box2");

let homePage = document.getElementById("homePage");
homePage.addEventListener("click", () => {

	// box2.classList.add("hidden");
	inputView.classList.add("hidden");

	homeView.classList.remove("hidden");
});

let viewMusic = document.getElementById("viewMusic");
viewMusic.addEventListener("click", () => {

	inputView.classList.add("hidden");

	homeView.classList.remove("hidden");
	box2.classList.remove("hidden");
});

let addMusic = document.getElementById("addMusic");
addMusic.addEventListener("click", () => {

	homeView.classList.add("hidden");
	// box2.classList.add("hidden");

	inputView.classList.remove("hidden");
});

let songToLibrary = document.getElementById("addToLibrary");
songToLibrary.addEventListener("click", () => {
	addNewMusic();
	box2.classList.remove("hidden");
});
/**************************
End
**************************/













