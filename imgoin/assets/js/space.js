window.onload = function() {

	// document.getElementById('song').play();

	$('#pausePlay').click(function() {
		var audioElem = document.getElementById('song');
		if (audioElem.play) {
			console.log("pause");
			audioElem.pause();
		} else {
			console.log("play");
			audioElem.play();
		}
	});

	function gifRotate() {
		console.log("gifRotate");
		var gifNum = Math.floor(Math.random()*8)+1;

		$('#mainGif').html("<img src='assets/media/A"+gifNum+".gif'>");
	};

	// function startPlay() {
	// 	$("#song").next('audio').play();
	// };

	var interval = setInterval(function(){gifRotate()}, 7000);
}