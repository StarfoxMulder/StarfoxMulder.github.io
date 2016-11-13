//// NOTE from guy at Cup A Joe ////
// First, institute some sort of .stop() control
// Once you know that you can stop sound playback,
//	you can figure out a way to control that globablly
//	from a location other than the initial click event
////////////////////////////////////

window.onload = function() {

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
		'soundLink': 'assets/mp3/888_TylerOgilvie-FiveStarReview.mp3'
	},
	{	'soundImage': 'assets/images/tUP_Propsgif3.jpg',
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
	}, /* --------- */
	{	'soundImage': 'assets/images/AJHWNC.jpg',
		'soundTitle': 'no cheese',
		'soundLink': 'assets/mp3/XFX_ALEXJONES-HAMBURGERNOCHEESE.mp3'
	},
	{	'soundImage': 'assets/images/jason2.jpg',
		'soundTitle': 'unbelievable',
		'soundLink': 'assets/mp3/XFX_ARTBELL-TOO_UNBELIEVABLE.mp3'
	}, 
	{	'soundImage': 'assets/images/codeofhonor.png',
		'soundTitle': 'code of honor',
		'soundLink': 'assets/mp3/XFX_ARTBELL-CODEOFHONOR.mp3'
	}, 
	{	'soundImage': 'assets/images/transmog.jpg',
		'soundTitle': 'TRANS\nMOGNIFIED',
		'soundLink': 'assets/mp3/XFX_ALEX JONES-TRANSMOGNIFIED_IT.mp3'
	},
	{	'soundImage': 'assets/images/HoagCNN2.jpg',
		'soundTitle': 'Watch out',
		'soundLink': 'assets/mp3/XFX_ARTBELL-WATCHOUTHOAGLAND.mp3'
	}, 
	{	'soundImage': 'assets/images/dogmanNoise.jpg',
		'soundTitle': 'growl',
		'soundLink': 'assets/mp3/XFX_DOGMAN-NOISE.mp3'
	}, 
	{	'soundImage': 'assets/images/abby-normal2.jpg',
		'soundTitle': 'Abbynormal',
		'soundLink': 'assets/mp3/XFX_ARTBELL-YOUAREABEYNORMAL.mp3'
	}, 
	{	'soundImage': 'assets/images/yesyeah1.jpg',
		'soundTitle': 'yes yeah',
		'soundLink': 'assets/mp3/XFX_ARTBELL-YESYEA.mp3'
	},	
	{	'soundImage': 'assets/images/imdifferent.jpg',
		'soundTitle': 'different',
		'soundLink': 'assets/mp3/XFX_ARTBELL-IMDIFFERENT.mp3'
	}, 
	{	'soundImage': 'assets/images/MIB1.jpg',
		'soundTitle': 'its all there',
		'soundLink': 'assets/mp3/XFX_ARTBELL-ITSTRUEABOUTTHEMIB.mp3'
	},
	{	'soundImage': 'assets/images/onemoretime1.jpg',
		'soundTitle': 'one more time',
		'soundLink': 'assets/mp3/XFX_ARTBELL-ONEMORETIME.mp3'
	}, 
	{	'soundImage': 'assets/images/timetraveler1.jpeg',
		'soundTitle': 'Time traveler',
		'soundLink': 'assets/mp3/XFX_ARTBELL-ONLYIFYOUREATIMETRAVELER.mp3'
	},
	{	'soundImage': 'assets/images/et1.jpg',
		'soundTitle': 'extra...',
		'soundLink': 'assets/mp3/XFX_ARTBELL-WHATSTHETERMET.mp3'
	}, 
	{	'soundImage': 'assets/images/dogmanWoods.jpg',
		'soundTitle': 'infested woods',
		'soundLink': 'assets/mp3/XFX_DOGMANINFESTEDWOODS.mp3'
	}, 
	{	'soundImage': 'assets/images/virus.JPG',
		'soundTitle': 'virrrus',
		'soundLink': 'assets/mp3/XFX_VIRUS.mp3'
	}, 
	{	'soundImage': 'assets/images/werewolf-picture.jpg',
		'soundTitle': 'sighting',
		'soundLink': 'assets/mp3/XFX_ISAWTHEDOGMAN.mp3'
	}, 
	{	'soundImage': 'assets/images/hisname1.jpg',
		'soundTitle': 'his name',
		'soundLink': 'assets/mp3/XFX_JOHNTITOR.mp3'
	},	
	{	'soundImage': 'assets/images/woosh1.jpg',
		'soundTitle': 'woosh',
		'soundLink': 'assets/mp3/XFX_WOOSH.mp3'
	}, /* sdf */
	{	'soundImage': 'assets/images/challengeHim1.jpg',
		'soundTitle': 'hero',
		'soundLink': 'assets/mp3/XFX_CHALLENGEHIM.mp3'
	}, 
	{	'soundImage': 'assets/images/thisMakesSense2.jpg',
		'soundTitle': 'makes sense',
		'soundLink': 'assets/mp3/XFX_ARTBELL-THISMAKESSENSE.mp3'
	}, 
	{	'soundImage': 'assets/images/fingerStickStroke1.jpg',
		'soundTitle': 'sticky',
		'soundLink': 'assets/mp3/XFX_STEVEGIBBS-FINGERSSTICKSTROKE.mp3'
	}, 
	{	'soundImage': 'assets/images/fullOfBeans1.jpg',
		'soundTitle': 'full of beans',
		'soundLink': 'assets/mp3/XFX_STEVEGIBBS-FULL_OF_BEANS.mp3'
	},	
	{	'soundImage': 'assets/images/sushi1.jpg',
		'soundTitle': 'sushi',
		'soundLink': 'assets/mp3/XFX_SUSHI.mp3'
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
	},
	{	'soundImage': 'assets/images/TheLegend.jpg',
		'soundTitle': 'the legend (\'87)',
		'soundLink': 'assets/mp3/TheLegend.mp3'
	},
	{	'soundImage': 'assets/images/johnTitor2.jpg',
		'soundTitle': 'Goin to space',
		'soundLink': 'assets/mp3/GoinToSpace.mp3'
	},
	{	'soundImage': 'assets/images/jw1.jpg',
		'soundTitle': 'Rainbow',
		'soundLink': 'assets/mp3/JeniferWhisper-ARainbowofLove.mp3'
	}
	];

	var baseAudio = "assets/mp3/";
	var baseImg = "assets/images/";
	var oneOffPlay = 1;
	var optionsHidden = 1;
	var row = "<div class='row arrayRow'></div>";
	var rowBonus = "<div class='row arrayRowBonus'></div>";
	var rowNum = soundArray.length / 6;
	var rowNumBonus = bonusTracks.length / 6;
	var counter = 0;
	var counterBonus = 0;
	var soundCol = "<div class='col-xs-2 otherDiv' style='background-color:black;'></div>";
	var leftSoundCol = "<div class='col-xs-2 leftDiv' style='background-color:black;'></div>"; //col-xs-offset-1

	rowColMaker();
	soundPopulator();
	rowColMakerBonus();
	soundPopulatorBonus();

  function rowColMaker() {

	// for(var i = 0; i < rowNum; i++) {
	// 	$('#anchor').append(row);
	// 	$('.arrayRow').last().addClass('row'+i+'');

	// 	var stopCounter = counter + 5;

	// 	for(var k = counter; k < (stopCounter+1); k++) {
	// 		if(k < soundArray.length) {
	// 			if(k % 6 == 0) {
	// 				$(leftSoundCol).attr('id', k).appendTo($('.row'+i+'')).last();
	// 			} else {
	// 				$(soundCol).attr('id', k).appendTo($('.row'+i+'')).last();
	// 			}
	// 		}
	// 	};
	// 	counter = counter + 6;
	// }
	i=0;
	$('#anchor').append(row);
	$('.arrayRow').last().addClass('row'+i+'');
	for(var k = 0; k < soundArray.length; k++) {
			if(k < soundArray.length) {
				if(k % 6 == 0) {
					$(leftSoundCol).attr('id', k).appendTo($('.row'+i+'')).last();
				} else {
					$(soundCol).attr('id', k).appendTo($('.row'+i+'')).last();
				}
			}
		};

   };

  function soundPopulator() {

	for(var c = 0; c < soundArray.length; c++) {
		// alt='Responsive image' on the following line
		$('#'+c+'').html("<img class='img'  src="+soundArray[c].soundImage+"><h2>"+soundArray[c].soundTitle+"</h2>");
	//	$('#'+c+'').attr('background-image', "url('../"+soundArray[c].soundImage+"')");
	//	$('#'+c+'').html("<h2>"+soundArray[c].soundTitle+"</h2>");
	}
  };

  function rowColMakerBonus() {

	// for(var p = 0; p < rowNumBonus; p++) {
		// $('#anchorBonus').append(rowBonus);
		// $('.arrayRowBonus').last().addClass('arrayRowBonus'+p+'');

		// var stopCounterBonus = counterBonus + 5;
		p=0;
		$('#anchorBonus').append(rowBonus);
		$('.arrayRowBonus').last().addClass('arrayRowBonus'+p+'');
		for(var d = counterBonus; d < bonusTracks.length ; d++) {
			if(d < bonusTracks.length) {
				if(d % 6 == 0) {
					$(leftSoundCol).attr('id', "b"+d+"").appendTo($('.arrayRowBonus'+p+'')).last();
				} else {
					$(soundCol).attr('id', "b"+d+"").appendTo($('.arrayRowBonus'+p+'')).last();
				}
			}
		};
		// counterBonus = counterBonus + 6;
	// }
  };

  function soundPopulatorBonus() {

	for(var e = 0; e < bonusTracks.length; e++) {
		$('#b'+e+'').html("<img class='img' alt='Responsive image' src="+bonusTracks[e].soundImage+"><h2>"+bonusTracks[e].soundTitle+"</h2>");
	//	$('#'+c+'').attr('background-image', "url('../"+soundArray[c].soundImage+"')");
	//	$('#'+c+'').html("<h2>"+soundArray[c].soundTitle+"</h2>");
	}
  };

 //  // BONUS TRACKS bc I made this shit yo
	// for(var b = 0; b < bonusTracks.length; b++) {
	// 	$('#b'+b+'').html("<img class='img-rounded' alt='image' src="+bonusTracks[b].soundImage+"><h2>"+bonusTracks[b].soundTitle+"</h2>");
	// };


  $('div').click(function() {
  	// if(multisSoundOff){
  		//for loop
  			//soundarray[i].pause()
	//}

  	//

/*	if (oneOffPlay == 1) {
  		Audio.pause();
  	} */
	if ($(this).attr('id') == 'b0') {
		currentSong.pause();
		if ($(this).data('state') == 'playing') {
			currentSong.pause();
		} else {
		new Audio(bonusTracks[0].soundLink).play();
		currentSong = Audio(bonusTracks[0].soundLink);
		$(this).data('state') = 'playing';
		}
	} else if ($(this).attr('id') == 'b1') {
		new Audio(bonusTracks[1].soundLink).play();
	} else if ($(this).attr('id') == 'b2') {
		new Audio(bonusTracks[2].soundLink).play();
	} else if ($(this).attr('id') == 'b3') {
		new Audio(bonusTracks[3].soundLink).play();
	} else if ($(this).attr('id') == 'b4') {
		new Audio(bonusTracks[4].soundLink).play();
	} else if ($(this).attr('id') == 'b5') {
		new Audio(bonusTracks[5].soundLink).play();
	} else if ($(this).attr('id') == 'b6') {
		new Audio(bonusTracks[6].soundLink).play();
	}
	/* 
		 BRIAN -- if you want to add something to the BONUS section, reach out to me and I'll either explain what to do
			or I'd be happy to reach in and tweak the code myself.  If you feel brave enough to try on your own,
			you'll have to follow these steps:
			1) Add the image, title, and sound to the server folders with the rest of those items
			2) Add the image, title, and sound locations to the BONUS array following the example laid out by the current array items
			3) Add a NEW 'else if' right above where these comments are, follwoing the example of the previous three 'else if's
			4) That new 'else if' array index will be 1 greater than the 'else if' preceeding it (the index is the number inside these [] brackets)
			5) If there are more BONUS sounds than will fit on the HTML 'row', you'll need to add another 'row' in the HTML.
				That new 'row' can be copy/pasted from the existing BONUS content row (lines 38-43 in HTML), just updating each 
				of the <div> id's with the number corresponding to the the number you added to the 'else if' in Step 4, following the id="b*" format
				already laid out, where * is the index number of that sound in the bonusTracks array (starting at line 309 in this js file).

		 I coded myself into a bit of a corner here and couldn't figure out a sustainable way to give you a more simple way of adding BONUS 
				content.  Sorry :(  But I guess that's the main trade-off of making it so easy to add new sounds to the regular soundboard area.
	*/

	else {
		var j = $(this).attr('id');
		new Audio(soundArray[j].soundLink).play();
	}
  });
// BONUS TRACKS bc I made this shit yo
	for(var b = 0; b < bonusTracks.length; b++) {
		$('#b'+b+'').html("<img class='img-rounded' alt='image' src="+bonusTracks[b].soundImage+"><h2>"+bonusTracks[b].soundTitle+"</h2>");
	};

//Implementing an opacity callback to indicate that an image was tapped
	// function opacity(this) {
	// 	this img att 
	// }

// For the Option-gear to give users ability over one-off or multi-off sound playback
// Was too complex trying to integrate <div> into audio play conditionals.  Switching to buttons.
	// function soundPlaybackSelector() {

	// 		// if(optionsHidden == 1) {
	// 		// 	$('#oneOff').removeAttr('visibility', 'hidden');
	// 		// 	$('#multiOff').removeAttr('visibility', 'hidden');
	// 		// 	$('#oneOff').attr('visibility', 'visible');
	// 		// 	$('#multiOff').attr('visibility', 'visible');
	// 		// 	optionsHidden = 0;
	// 		// } else if (optionsHidden == 0) {
	// 		// 	$('#oneOff').removeAttr('visibility', 'visible');
	// 		// 	$('#multiOff').removeAttr('visibility', 'visible');
	// 		// 	$('#oneOff').attr('visibility', 'hidden');
	// 		// 	$('#multiOff').attr('visibility', 'hidden');
	// 		// 	optionsHidden = 1;
	// 		// }

	// 	$('#oneOff').click(function() {
	// 		if(optionsHidden == 0) {
	// 			oneOff = 1;
	// 		} else {}
	// 	});

	// 	$('#multiOff').click(function() {
	// 		if(optionsHidden == 0) {
	// 			oneOff = 0;
	// 		} else {}
	// 	});

	// }
//Making the header a random sound player
	$('header').click(function() {
		var r = Math.floor(Math.random() * (soundArray.length));
		new Audio(soundArray[r].soundLink).play();
	});	

};