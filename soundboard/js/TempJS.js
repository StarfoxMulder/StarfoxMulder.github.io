window.onload = function() {

	var baseAudio = "assets/mp3/";
	var baseImg = "assets/images/";

	var soundArray = [
	{	'soundImage': 'assets/images/Countdown1.jpg',
		'soundTitle': 'Countdown',
		'soundLink': 'assets/mp3/111_COUNTDOWN.mp3'
	},
	{	'soundImage': 'assets/images/DebutConspiracy2.jpg',
		'soundTitle': 'Debut',
		'soundLink': 'assets/mp3/222_DebutConspiracy.mp3'
	},
	{	'soundImage': 'assets/images/Gameshow1.jpg',
		'soundTitle': 'Why Do I know this',
		'soundLink': 'assets/mp3/222_GameShow.mp3'
	},
	{	'soundImage': 'assets/images/FiveStarReview2.jpg',
		'soundTitle': 'Five Star Reviews',
		'soundLink': 'assets/mp3/888_5STAR.mp3'
	},
	{	'soundImage': 'assets/images/tUP_Propsgif2.png',
		'soundTitle': 'Props',
		'soundLink': 'assets/mp3/888_BELL.mp3'
	},
	{	'soundImage': 'assets/images/Mail1.jpg',
		'soundTitle': 'Mailbag',
		'soundLink': 'assets/mp3/888_MAIL.mp3'
	},
	{	'soundImage': 'assets/images/Wikia1.JPG',
		'soundTitle': 'Wikia',
		'soundLink': 'assets/mp3/888_WIKIA.mp3'
	},
	{	'soundImage': 'assets/images/ResultsWinner2.jpg',
		'soundTitle': 'Winner',
		'soundLink': 'assets/mp3/999_CAPTION WINNER.mp3'
	},
	{	'soundImage': 'assets/images/PollResults2.jpg',
		'soundTitle': 'Poll Results',
		'soundLink': 'assets/mp3/999_PollResults.mp3'
	},
	{	'soundImage': 'assets/images/tUPCrispyCritter.jpg',
		'soundTitle': 'Crispy Critter\'d',
		'soundLink': 'assets/mp3/CrispyCrittered.mp3'
	},
	{	'soundImage': 'assets/images/tUP_FMP_II.jpg',
		'soundTitle': 'Filling my pants',
		'soundLink': 'assets/mp3/FillingMyPants.mp3'
	},
	{	'soundImage': 'assets/images/tUP_Mortal_KC2.jpg',
		'soundTitle': 'Mortal Kom-conflict',
		'soundLink': 'assets/mp3/MortalConflict.mp3'
	},
	{	'soundImage': 'assets/images/tUPSomethingWrongHere.jpg',
		'soundTitle': 'Something\'s Wrong',
		'soundLink': 'assets/mp3/NowSomethingsWrongHere.mp3'
	},
	{	'soundImage': 'assets/images/tUPHamburger.jpg',
		'soundTitle': 'Hamburger',
		'soundLink': 'assets/mp3/PeacefullyGettingAHamburger.mp3'
	},
	{	'soundImage': 'assets/images/tUPWeDontKnow2.jpg',
		'soundTitle': 'We don\'t know',
		'soundLink': 'assets/mp3/WeDontKnow.mp3'
	},
	{	'soundImage': 'assets/images/tUPHomosexual.jpg',
		'soundTitle': 'homosexual',
		'soundLink': 'assets/mp3/XF3_HOMOSEXUAL.mp3'
	},
	{	'soundImage': 'assets/images/6hrErection1.jpg',
		'soundTitle': '6 hour erection',
		'soundLink': 'assets/mp3/XFX_6HR ERECTION.mp3'
	},
	{	'soundImage': 'assets/images/7Adults1jpeg.jpeg',
		'soundTitle': 'seven adults',
		'soundLink': 'assets/mp3/XFX_7ADULTS.mp3'
	},
	{	'soundImage': 'assets/images/AboutThatHole1.jpg',
		'soundTitle': 'about that hole',
		'soundLink': 'assets/mp3/XFX_ABOUTTHATHOLE.mp3'
	},
	{	'soundImage': 'assets/images/AppleStory1.jpg',
		'soundTitle': 'Apple story',
		'soundLink': 'assets/mp3/XFX_APPLE STORY.mp3'
	},
	{	'soundImage': 'assets/images/Arrrrrgh1.JPG',
		'soundTitle': 'argghhhhhhh',
		'soundLink': 'assets/mp3/XFX_ARGHHHHH.mp3'
	},
	{	'soundImage': 'assets/images/AteMyCat1.jpg',
		'soundTitle': 'ate my cat',
		'soundLink': 'assets/mp3/XFX_ATEMYCAT.mp3'
	},
	{	'soundImage': 'assets/images/BaskinRobins1.jpg',
		'soundTitle': 'baskin robbins',
		'soundLink': 'assets/mp3/XFX_BASKIN ROBBINS.mp3'
	},
	{	'soundImage': 'assets/images/BehindABush1.jpg',
		'soundTitle': 'behind a bush',
		'soundLink': 'assets/mp3/XFX_BEHIND_A_BUSH.mp3'
	},
	{	'soundImage': 'assets/images/Montauk1.jpg',
		'soundTitle': 'junior',
		'soundLink': 'assets/mp3/XFX_BITES OUT OF BUILDINGS.mp3'
	},
	{	'soundImage': 'assets/images/YourBrainIsAShootingStar1.JPG',
		'soundTitle': 'shooting star',
		'soundLink': 'assets/mp3/XFX_BRAINSHOOTINGSTAR.mp3'
	},
	{	'soundImage': 'assets/images/BritishAfricanAmericans1png.png',
		'soundTitle': 'british',
		'soundLink': 'assets/mp3/XFX_BRITISH AFIRCAN AMERICANS.mp3'
	},
	{	'soundImage': 'assets/images/ClintonBohemianClub1.jpg',
		'soundTitle': 'bohemian club',
		'soundLink': 'assets/mp3/XFX_CLINTONBOHEMIANCLUB.mp3'
	},
	{	'soundImage': 'assets/images/CollierNoNo1.jpg',
		'soundTitle': 'free will',
		'soundLink': 'assets/mp3/XFX_COLLIER_NO NOT.mp3'
	},
	{	'soundImage': 'assets/images/CollierNo1gif2.png',
		'soundTitle': 'stand in your truth',
		'soundLink': 'assets/mp3/XFX_COLLIER_NO.mp3'
	},
	{	'soundImage': 'assets/images/DaneCookUFO1.jpg',
		'soundTitle': 'abducted',
		'soundLink': 'assets/mp3/XFX_DANECOOKUFO.mp3'
	},
	{	'soundImage': 'assets/images/DiedInPrison1.jpg',
		'soundTitle': 'died in prison',
		'soundLink': 'assets/mp3/XFX_DIED IN PRISON.mp3'
	},
	{	'soundImage': 'assets/images/DjinnHowLong2.jpg',
		'soundTitle': 'how long',
		'soundLink': 'assets/mp3/XFX_DJINNHOWLONG35.mp3'
	},
	{	'soundImage': 'assets/images/FlipItOver1.jpg',
		'soundTitle': 'flip it over',
		'soundLink': 'assets/mp3/XFX_FlipItOver.mp3'
	},
	{	'soundImage': 'assets/images/SmellIt1.jpg',
		'soundTitle': 'smeeellll iiiit',
		'soundLink': 'assets/mp3/XFX_SMELLLLITTT.mp3'
	},
	{	'soundImage': 'assets/images/tUPGoldenRice2.jpg',
		'soundTitle': 'golden rice',
		'soundLink': 'assets/mp3/XFX_GOLDENRICE.mp3'
	},
	{	'soundImage': 'assets/images/GreyOnTheRoof1.jpg',
		'soundTitle': 'observing us',
		'soundLink': 'assets/mp3/XFX_GREY ON THE ROOF.mp3'
	},
	{	'soundImage': 'assets/images/BedWithReptilian2.jpg',
		'soundTitle': 'we don\'t do that',
		'soundLink': 'assets/mp3/XFX_GROWL.mp3'
	},
	{	'soundImage': 'assets/images/HamSandwichesTuna1.jpg',
		'soundTitle': 'sandwiches',
		'soundLink': 'assets/mp3/XFX_HAMSANDWICHESTUNA.mp3'
	},
	{	'soundImage': 'assets/images/HannityKookNut1.jpg',
		'soundTitle': 'kook',
		'soundLink': 'assets/mp3/XFX_HANNITY_KOOK_NUT.mp3'
	},
	{	'soundImage': 'assets/images/HerbertHerbert1.jpg',
		'soundTitle': 'herbert herbert',
		'soundLink': 'assets/mp3/XFX_HERBERTHERBERT.mp3'
	},
	{	'soundImage': 'assets/images/tUPSheepGuy.jpg',
		'soundTitle': 'sheep guy',
		'soundLink': 'assets/mp3/XFX_IMNOSHEEPGUY.mp3'
	},
	{	'soundImage': 'assets/images/JoshuaPWarrenImg2.JPG',
		'soundTitle': 'stroke it',
		'soundLink': 'assets/mp3/XFX_JOSHUA STROKE IT.mp3'
	},
	{	'soundImage': 'assets/images/tUPHillarysOnAVan.jpg',
		'soundTitle': 'on a van',
		'soundLink': 'assets/mp3/XFX_HILLARYS ON A VAN.mp3'
	},
	{	'soundImage': 'assets/images/tUPMonkeys3.jpg',
		'soundTitle': 'monkeys',
		'soundLink': 'assets/mp3/XFX_MONKEYS.mp3'
	},
	{	'soundImage': 'assets/images/tUPObamaAliens2.jpg',
		'soundTitle': 'obama aliens',
		'soundLink': 'assets/mp3/XFX_OBAMA_ALIENS.mp3'
	},
	{	'soundImage': 'assets/images/Rand7.jpg',
		'soundTitle': 'control',
		'soundLink': 'assets/mp3/XFX_OBAMACONTROL.mp3'
	},
	{	'soundImage': 'assets/images/Rand12.jpg',
		'soundTitle': 'flat earth society',
		'soundLink': 'assets/mp3/XFX_OBAMAFLATEARTH 1.mp3'
	},
	{	'soundImage': 'assets/images/SavedByTheBellFlat2.jpg',
		'soundTitle': 'flat head',
		'soundLink': 'assets/mp3/XFX_SAVEDBYTHEBELLFLAT.mp3'
	},
	{	'soundImage': 'assets/images/PhilSchneider.JPG',
		'soundTitle': 'pick up your mouth',
		'soundLink': 'assets/mp3/XFX_PICK UP MOUTH.mp3'
	},
	{	'soundImage': 'assets/images/tUPPUYBrain.jpg',
		'soundTitle': 'pick up your brain',
		'soundLink': 'assets/mp3/XFX_PICK UP BRAIN.mp3'
	},
	{	'soundImage': 'assets/images/tUPSomethingWrongHere.jpg',
		'soundTitle': 'something\'s wrong',
		'soundLink': 'assets/mp3/XFX_SOMETHINGSWRONG HERE.mp3'
	},
	{	'soundImage': 'assets/images/ReadMyLipsAbducted1.jpg',
		'soundTitle': 'read my lips',
		'soundLink': 'assets/mp3/XFX_READMYLIPSABDUCTED.mp3'
	},
	{	'soundImage': 'assets/images/ScamOfTheCentury1.JPG',
		'soundTitle': 'scam of the century',
		'soundLink': 'assets/mp3/XFX_SCAM OF THE CENTURY.mp3'
	},
	{	'soundImage': 'assets/images/Obviously2.jpg',
		'soundTitle': 'obviously',
		'soundLink': 'assets/mp3/XFX_OBVIOUSLY.mp3'
	},
	{	'soundImage': 'assets/images/SettlesInTheAnus1jpeg.jpeg',
		'soundTitle': 'anus',
		'soundLink': 'assets/mp3/XFX_SETTLES IN THE ANUS.mp3'
	},
	{	'soundImage': 'assets/images/ReallyGoodAtIt2.jpg',
		'soundTitle': 'really good at it',
		'soundLink': 'assets/mp3/XFX_REALLYGOODATIT.mp3'
	},
	{	'soundImage': 'assets/images/skull.gif',
		'soundTitle': 's-skull',
		'soundLink': 'assets/mp3/XFX_SCREAMINGSKULL.mp3'
	},
	{	'soundImage': 'assets/images/Rand6.jpg',
		'soundTitle': 'fought it off',
		'soundLink': 'assets/mp3/XFX_SODOMY_FOUGHTITOFF.mp3'
	},
	{	'soundImage': 'assets/images/ThatsWhyItWorks1.jpg',
		'soundTitle': 'why it works',
		'soundLink': 'assets/mp3/XFX_THATS WHY IT WORKS 1.mp3'
	},
	{	'soundImage': 'assets/images/TruthersBonkers1.jpg',
		'soundTitle': 'truthers',
		'soundLink': 'assets/mp3/XFX_TRUTHERS BONKERS.mp3'
	},
	{	'soundImage': 'assets/images/RealShow1.jpg',
		'soundTitle': 'real show',
		'soundLink': 'assets/mp3/XFX_REALSHOW.mp3'
	},
	{	'soundImage': 'assets/images/Thundercats1.jpg',
		'soundTitle': 'handle this',
		'soundLink': 'assets/mp3/XFX_THUNDERCATS.mp3'
	},
	{	'soundImage': 'assets/images/TalkingCactus2.JPG',
		'soundTitle': 'cactus',
		'soundLink': 'assets/mp3/XFX_TALKINGCACTUS.mp3'
	},
	{	'soundImage': 'assets/images/WarpDrive1.jpg',
		'soundTitle': 'warp drive',
		'soundLink': 'assets/mp3/XFX_WARPDRIVE.mp3'
	},
	{	'soundImage': 'assets/images/MyFeet2.jpg',
		'soundTitle': 'feet',
		'soundLink': 'assets/mp3/XFX_WHAT FEET.mp3'
	},
	{	'soundImage': 'assets/images/whatbroughtmehere2.jpg',
		'soundTitle': 'I dont understand',
		'soundLink': 'assets/mp3/XFX_WHATBROUGHTMEHERE.mp3'
	},
	{	'soundImage': 'assets/images/LMS2.jpg',
		'soundTitle': 'washtar',
		'soundLink': 'assets/mp3/XFX_WASHTAR.mp3'
	},
	{	'soundImage': 'assets/images/RememberNothing1.jpg',
		'soundTitle': 'remember nothing',
		'soundLink': 'assets/mp3/XFX_REMEMBERNOTHING.mp3'
	},
	{	'soundImage': 'assets/images/SmellyFarts1.jpg',
		'soundTitle': 'farts',
		'soundLink': 'assets/mp3/XFX_SMELLYFARTS.mp3'
	},
	{	'soundImage': 'assets/images/WhyWouldILie1.JPG',
		'soundTitle': 'why would I lie',
		'soundLink': 'assets/mp3/XFX_WHYWOULDILIE.mp3'
	},
	{	'soundImage': 'assets/images/WillSmithCumming1.jpg',
		'soundTitle': 'cumming',
		'soundLink': 'assets/mp3/XFX_WILLSMITHCUMMING.mp3'
	},
	{	'soundImage': 'assets/images/Rand3.jpg',
		'soundTitle': 'v-witch',
		'soundLink': 'assets/mp3/XFX_WITCH.mp3'
	},
	{	'soundImage': 'assets/images/doingthatagain3.png',
		'soundTitle': 'doing that again',
		'soundLink': 'assets/mp3/XFX_WONTBEDOING.mp3'
	},
	{	'soundImage': 'assets/images/Rand11.jpg',
		'soundTitle': 'put it on your face',
		'soundLink': 'assets/mp3/XFX_YOUR_FACE.mp3'
	},
	{	'soundImage': 'assets/images/ShootAMonkey2.jpg',
		'soundTitle': 'shoot a monkey',
		'soundLink': 'assets/mp3/XFX_SHOOTAMONKEY.mp3'
	}
	];

	var bonusTracks = [
	{	'soundImage': 'assets/images/Mothman1.jpg',
		'soundTitle': 'true story',
		'soundLink': 'assets/mp3/mothman.mp3'
	},
	{	'soundImage': 'assets/images/LMS1.jpg',
		'soundTitle': 'lizardman stomp',
		'soundLink': 'assets/mp3/LizardmanStomp.mp3'
	},
	{	'soundImage': 'assets/images/puppysong2.jpg',
		'soundTitle': 'puppy song',
		'soundLink': 'assets/mp3/PuppySong.mp3'
	},
	{	'soundImage': 'assets/images/bigfootStomp.jpg',
		'soundTitle': 'bigfoot stomp',
		'soundLink': 'assets/mp3/BigfootStomp.mp3'
	}
	];

	for(var i = 0; i < soundArray.length; i++) {
		$('#'+i+'').html("<img class='img-rounded' alt='Responsive image' src="+soundArray[i].soundImage+"><h2>"+soundArray[i].soundTitle+"</h2>");
	};

	$('div').click(function() {
		
		if ($(this).attr('id') == 'b0') {
			new Audio(bonusTracks[0].soundLink).play();
		} else if ($(this).attr('id') == 'b1') {
			new Audio(bonusTracks[1].soundLink).play();
		} else if ($(this).attr('id') == 'b2') {
			new Audio(bonusTracks[2].soundLink).play();
		} else if ($(this).attr('id') == 'b3') {
			new Audio(bonusTracks[3].soundLink).play();
		}
		else {
			var j = $(this).attr('id');
			new Audio(soundArray[j].soundLink).play();
		}
	});

// BONUS TRACKS bc I made this shit yo
	for(var b = 0; b < bonusTracks.length; b++) {
		$('#b'+b+'').html("<img class='img-rounded' alt='Responsive image' src="+bonusTracks[b].soundImage+"><h2>"+bonusTracks[b].soundTitle+"</h2>");
	};


	$('#b0').click(function() {
		new Audio(bonusTracks[0].soundLink).play();
	});

	$('#b1').click(function() {
		new Audio(bonusTracks[1].soundLink).play();
	});

	$('#b2').click(function() {
		new Audio(bonusTracks[2].soundLink).play();
	});

//Making the header a random sound player
	$('header').click(function() {
		var j = Math.floor(Math.random() * (soundArray.length+1));
		new Audio(soundArray[j].soundLink).play();
	});	

};