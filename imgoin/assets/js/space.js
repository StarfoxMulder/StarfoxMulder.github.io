window.onload = function() {

//// Center gif randomised rotation every 7 seconds ////
	function gifRotate() {
		console.log("gifRotate");
		var gifNum = Math.floor(Math.random()*8)+1;

		$('#mainGif').html("<img src='assets/media/A"+gifNum+".gif'>");
	};
	var interval = setInterval(function(){gifRotate()}, 7000);

//// Sound playback -- setting up a delay click on the center gif MOD
	setTimeout(function() {
		document.getElementById('singSong').click();

		var songInterval = setInterval(function(){document.getElementById('singSong').click()}, 235000);
	}, 3000);
	

	$("#singSong").click(function(){
		new Audio('assets/media/yeh.mp3').play();
	});

}