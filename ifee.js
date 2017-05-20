"use strict";

var Loader = (function(){

	var songs = [];

	return {

		retrieveSongs: function(callBack){
			let request = new XMLHttpRequest();
			request.addEventListener("load", function(e){
				songs = JSON.parse(this.responseText);
				callBack(songs);
			});
			request.open("GET", "./songs.json");
			request.send();
			}

	};


})();
