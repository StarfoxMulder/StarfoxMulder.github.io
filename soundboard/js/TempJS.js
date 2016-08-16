window.onload = function() {
	var baseAudio = "assets/mp3/";
	var baseImg = "assets/images/";

	var soundArray = [
	{	'soundImage': 'assets/images/Countdown1.jpg',
		'soundTitle': 'Countdown',
		'soundLink': 'assets/mp3/111_COUNTDOWN.mp3'
	},
	{	'soundImage': 'assets/images/DebutConspiracy2',
		'soundTitle': 'Debut',
		'soundLink': 'assets/mp3/'
	},
	{	'soundImage': 'assets/images/Gameshow1.jpg',
		'soundTitle': 'Why Do I know this',
		'soundLink': 'assets/mp3/222_GameShow.mp3'
	},
	{	'soundImage': 'assets/images/FiveStarReview2.jpg',
		'soundTitle': 'Five Star Reviews',
		'soundLink': 'assets/mp3/888_5STAR.mp3'
	},
	{	'soundImage': 'assets/images/tUP Propsgif.gif',
		'soundTitle': 'Props',
		'soundLink': 'assets/mp3/888_BELL.mp3'
	}
	];

	for(var i = 0; i < soundArray.length; i++) {
		$('#'+i).html("<img class='img-responsive img-rounded' alt='Responsive image' src="+soundArray.soundImage+"><h2>"+soundArray.soundTitle+"</h2>");

	};

	$('div').click(function() {
		var i = $(this).attr('id');
		new Audio(soundArray[i].soundLink).play();
	});

};