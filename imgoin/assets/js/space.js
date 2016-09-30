window.onload = function() {

	function gifRotate() {
		console.log("gifRotate");
		var gifNum = Math.floor(Math.random()*8)+1;

		$('#mainGif').html("<img src='assets/media/A"+gifNum+".gif'>");
	};

	$("#mainGif").click(function(){
		$('song').play();
	});

	var interval = setInterval(function(){gifRotate()}, 7000);
}