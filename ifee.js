"use strict";

var Loader = (function(){

	var songJSON = [];
	var songJSON2 = [];

	return {

		retrieveJSON: function(callBack){
			let request = new XMLHttpRequest();
			request.addEventListener("load", function(e){
				songJSON = JSON.parse(this.responseText);
				let request2 = new XMLHttpRequest();
				request2.addEventListener("load", function(e){
					songJSON2 = JSON.parse(this.responseText);
					songJSON.songs2 = songJSON2.songs;

					console.log("songJSON", songJSON);
					callBack(songJSON);
				});
				request2.open("GET", "./songs2.json");
				request2.send();
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
