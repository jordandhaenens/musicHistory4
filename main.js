"use strict";
/**************************
Load JSON
**************************/
function callBack(json){
	console.log("json.songs", json.songs);
	let str = "";
	let array = json.songs;
	// console.log("callBack array", array);
	array.forEach( (currVal, index) =>{
		str += `<h3>${currVal.title}</h3>
				<p>${currVal.artist} | ${currVal.album} | </p><hr>`;
	});
	console.log("str", str);
	writeFromJSON(str);
}

Loader.retrieveJSON(callBack);

/**************************
End
**************************/
/**************************
Write To DOM
**************************/
function writeFromJSON(string){
	var outputArea = document.getElementById("box2");
	var newDiv = `<div class="song">
					${string}
				 </div>`;

	outputArea.innerHTML = newDiv;
}

/**************************
End
**************************/
/**************************
Add New Music via UI
**************************/
function addNewMusic(){
	let title = document.getElementById("inputSong").value;
	let artist = document.getElementById("inputArtist").value;
	let album = document.getElementById("inputAlbum").value;
	let songObj = {"title": title, "artist": artist, "album": album};
	// console.log("songObj", songObj);
	Loader.addToLibrary(songObj);
	Loader.showSongs(callBack);

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


/**************************
Switch Between Views
**************************/
let inputView = document.getElementById("inputView");
let homeView = document.getElementById("box1");
let box2 = document.getElementById("box2");

let homePage = document.getElementById("homePage");
homePage.addEventListener("click", () => {

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













