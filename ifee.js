"use strict";

var Loader = (function(){

	var songJSON = [];

	return {

		retrieveJSON: function(callBack){
			let request = new XMLHttpRequest();
			request.addEventListener("load", function(e){
				songJSON = JSON.parse(this.responseText);
				callBack(songJSON);
				console.log("songJSON", songJSON);
			});
			request.open("GET", "./songs.json");
			request.send();
		},

		addToLibrary: function(newSongObj){
			songJSON.songs.push(newSongObj);
			console.log("addToLibrary", songJSON);
		},

		showSongs: function(callBack){
			callBack(songJSON);
			// return songJSON;
		}

	};


})();
