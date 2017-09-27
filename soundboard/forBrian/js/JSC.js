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
	{	'soundImage': 'assets/images/AG1_5544-1_2.jpg',
		'soundTitle': 'Wikia',
		'soundLink': 'assets/mp3/888 - From the Wikia (Final Render).mp3'
	},
	{	'soundImage': 'assets/images/ResultsWinner2.jpg',
		'soundTitle': 'Winner',
		'soundLink': 'assets/mp3/WinnerSoundBite.mp3'
	},
	{	'soundImage': 'assets/images/PollResults2.jpg',
		'soundTitle': 'Poll Results',
		'soundLink': 'assets/mp3/Poll Results (Final Render).mp3'
	},
	{	'soundImage': 'assets/images/news3.jpg',
		'soundTitle': 'news theme',
		'soundLink': 'assets/mp3/Unbelievable News Theme (Final).mp3'
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
	},
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
	},
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
	},
	{	'soundImage': 'assets/images/champHead.jpg',
		'soundTitle': 'Dinosaur head',
		'soundLink': 'assets/mp3/XFX_CHAMP-DINOSAUR HEAD.mp3'
	},
	{	'soundImage': 'assets/images/roadkill.jpg',
		'soundTitle': 'Roadkill',
		'soundLink': 'assets/mp3/XFX_ROADKILL.mp3'
	},
	{	'soundImage': 'assets/images/Countdown1.jpg',
		'soundTitle': 'tastes like fish',
		'soundLink': 'assets/mp3/XFX_TASTESLIKEFISH.mp3'
	},
	{	'soundImage': 'assets/images/gabrielzeros.jpg',
		'soundTitle': 'Jellyfish',
		'soundLink': 'assets/mp3/XFX_JELLYFISH3.mp3'
	},
	{	'soundImage': 'assets/images/jelly.jpg',
		'soundTitle': 'Jellyfish II',
		'soundLink': 'assets/mp3/XFX_JELLYFISH4.mp3'
	},
	{	'soundImage': 'assets/images/shaqFlat.jpg',
		'soundTitle': 'shaq flat',
		'soundLink': 'assets/mp3/XFX_SHAQIDIOTS.mp3'
	},
	{	'soundImage': 'assets/images/sasquatchfam.jpg',
		'soundTitle': 'abducted by bigfoot',
		'soundLink': 'assets/mp3/XFX_ABDUCTEDBYBIGFOOT.mp3'
	},
	{	'soundImage': 'assets/images/grumpy-old-man.jpg',
		'soundTitle': 'Ain\'t seen no monster',
		'soundLink': 'assets/mp3/XFX_AINTSEENNOMONSTER.mp3'
	},
	{	'soundImage': 'assets/images/internetJesus.jpg',
		'soundTitle': 'internet',
		'soundLink': 'assets/mp3/XFX_IALWAYSGOONTHEINTERNET.mp3'
	},
	{	'soundImage': 'assets/images/outtahere.jpg',
		'soundTitle': 'let\'s get out of here',
		'soundLink': 'assets/mp3/XFX_LETSGETOUTTAHERE.mp3'
	},
	{	'soundImage': 'assets/images/waterHorse2_2.jpg',
		'soundTitle': 'Champy sounds',
		'soundLink': 'assets/mp3/XFX_CHAMP-SOUNDEFFECTS.mp3'
	},
	{	'soundImage': 'assets/images/lapras.jpg',
		'soundTitle': 'horse? Monster?',
		'soundLink': 'assets/mp3/XFX_CHAMP-HORSEMONSTER.mp3'
	},
	{	'soundImage': 'assets/images/bigfootSounds.jpg',
		'soundTitle': 'noises',
		'soundLink': 'assets/mp3/XFX_BIGFOOTNOISES.mp3'
	},
	{	'soundImage': 'assets/images/jpwTulpa.jpg',
		'soundTitle': 'Tulpafoot',
		'soundLink': 'assets/mp3/XFX_JOSHUAPWARREN-BIGFOOTTULPA.mp3'
	},
	{	'soundImage': 'assets/images/walnuts.jpg',
		'soundTitle': 'walnuts',
		'soundLink': 'assets/mp3/XFX_WALNUTSINPOCKET.mp3'
	},
	{	'soundImage': 'assets/images/robO.jpg',
		'soundTitle': 'fetuses',
		'soundLink': 'assets/mp3/XFX_ROB OKEY - SWERDLOW FETUS.mp3'
	},
	{	'soundImage': 'assets/images/ThickKids.jpg',
		'soundTitle': 'thick kids',
		'soundLink': 'assets/mp3/XFX_WHITLEY - THICK KIDS.mp3'
	},
	{	'soundImage': 'assets/images/Butt.jpg',
		'soundTitle': 'probe',
		'soundLink': 'assets/mp3/XFX_WHITLEY-BUTT.mp3'
	},
	{	'soundImage': 'assets/images/Yahyel.jpg',
		'soundTitle': 'yahyel',
		'soundLink': 'assets/mp3/XFX_YAHYEL.mp3'
	},
	{	'soundImage': 'assets/images/Hooray.png',
		'soundTitle': 'hooray',
		'soundLink': 'assets/mp3/XFX_WHITLEY-HOORAY.mp3'
	},
	{	'soundImage': 'assets/images/beardog2.jpg',
		'soundTitle': 'beardogs',
		'soundLink': 'assets/mp3/XFX_BIGFOOT BEAR DOGS HOG DOGS.mp3'
	},
	{	'soundImage': 'assets/images/timpeeler.jpg',
		'soundTitle': 'get away',
		'soundLink': 'assets/mp3/XFX_BIGFOOT-GET AWAY.mp3'
	},
	{	'soundImage': 'assets/images/timpeeler2.jpg',
		'soundTitle': 'yallow',
		'soundLink': 'assets/mp3/XFX_BIGFOOT-YALLOW.mp3'
	},
	{	'soundImage': 'assets/images/korton1.jpg',
		'soundTitle': 'understood',
		'soundLink': 'assets/mp3/XFX_KORTON - ANIMAL UNDERSTOOD.mp3'
	},
	{	'soundImage': 'assets/images/korton2.jpg',
		'soundTitle': 'central control',
		'soundLink': 'assets/mp3/XFX_KORTON - CENTRAL CONTROL.mp3'
	},
	{	'soundImage': 'assets/images/korton3.jpg',
		'soundTitle': 'discontinue',
		'soundLink': 'assets/mp3/XFX_KORTON - DISCONTINUE.mp3'
	},
	{	'soundImage': 'assets/images/korton4.jpg',
		'soundTitle': 'final sign off',
		'soundLink': 'assets/mp3/XFX_KORTON - THE FINAL SIGN OFF.mp3'
	},
	{	'soundImage': 'assets/images/korton5.jpg',
		'soundTitle': 'sign off',
		'soundLink': 'assets/mp3/XFX_KORTON SIGN OFF.mp3'
	},
	{	'soundImage': 'assets/images/korton6.jpg',
		'soundTitle': 'noises',
		'soundLink': 'assets/mp3/XFX_KORTON-NOISES.mp3'
	},
	{	'soundImage': 'assets/images/korton7.jpg',
		'soundTitle': 'transmit',
		'soundLink': 'assets/mp3/XFX_KORTON-READY TO TRANSMIT.mp3'
	},
	{	'soundImage': 'assets/images/king1.jpg',
		'soundTitle': 'gorbachev',
		'soundLink': 'assets/mp3/XFX_LARRY KING - GORBACHEV.mp3'
	},
	/////// 9/26 updates (don't forget to update News at the top)
	{	'soundImage': 'assets/images/theyseeus.jpg',
		'soundTitle': 'they see us',
		'soundLink': 'assets/mp3/XFX_MCPHERSON-THEY SEE US.mp3'
	},
	{	'soundImage': 'assets/images/sketch5.jpg',
		'soundTitle': 'picture',
		'soundLink': 'assets/mp3/XFX_MCPHERSON-THATS A PICTURE.mp3'
	},
	{	'soundImage': 'assets/images/spaceship2.jpg',
		'soundTitle': 'spaceship',
		'soundLink': 'assets/mp3/XFX_MCPHERSON-SPACESHIPORSOMETHINGOUTSIDE.mp3'
	},
	{	'soundImage': 'assets/images/brian1.jpg',
		'soundTitle': 'brian',
		'soundLink': 'assets/mp3/XFX_MCPHERSON-BRIAN.mp3'
	},
	{	'soundImage': 'assets/images/notpeople.jpg',
		'soundTitle': 'not people',
		'soundLink': 'assets/mp3/XFX_THEYRE NOT PEOPLE.mp3'
	},
	{	'soundImage': 'assets/images/romanek3.jpg',
		'soundTitle': 'can\'t believe',
		'soundLink': 'assets/mp3/XFX_ROMANEK-CANT BELIEVE.mp3'
	},
	{	'soundImage': 'assets/images/etking.jpg',
		'soundTitle': 'et',
		'soundLink': 'assets/mp3/XFX_LARRYKING-LOOKSLIKEET.mp3'
	},
	{	'soundImage': 'assets/images/romanek1.jpg',
		'soundTitle': 'come from',
		'soundLink': 'assets/mp3/XFX_ROMANEK-COMEFROM.mp3'
	},
	{	'soundImage': 'assets/images/helloromanek.jpg',
		'soundTitle': 'hello?',
		'soundLink': 'assets/mp3/XFX_ROMANEK-HELLO.mp3'
	},
	{	'soundImage': 'assets/images/facelessPeople2.jpgd',
		'soundTitle': 'no faces',
		'soundLink': 'assets/mp3/XFX_THEY HAD NO FACES.mp3'
	},
	{	'soundImage': 'assets/images/walnutsJPW2.png',
		'soundTitle': 'walnuts',
		'soundLink': 'assets/mp3/XFX_WALNUTS-JPW.mp3'
	},
	{	'soundImage': 'assets/images/abreast.jpg',
		'soundTitle': 'a breast',
		'soundLink': 'assets/mp3/XFX_ABREAST.mp3'
	},
	{	'soundImage': 'assets/images/ratsInsides.jpg',
		'soundTitle': 'rats',
		'soundLink': 'assets/mp3/XFX_RATSEATINGYOU.mp3'
	},
	{	'soundImage': 'assets/images/jesuslovesme.png',
		'soundTitle': 'jesus loves me',
		'soundLink': 'assets/mp3/XFX_JESUSLOVESME.mp3'
	},
	{	'soundImage': 'assets/images/sawoutthere.jpg',
		'soundTitle': 'aliens',
		'soundLink': 'assets/mp3/XFX_MCPHERSON-FUCKING ALIENS.mp3'
	},
	{	'soundImage': 'assets/images/martainshit.jpg',
		'soundTitle': 'martian',
		'soundLink': 'assets/mp3/XFX_MCPHERSON-MARTIANORSHIT.mp3'
	},
	{	'soundImage': 'assets/images/pisspants2.jpg',
		'soundTitle': 'peed my pants',
		'soundLink': 'assets/mp3/XFX_MCPHERSON-PEEDMYPANTS.mp3'
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
  var currentAudio = bonusTracks[1].soundLink;
	var row = "<div class='row arrayRow'></div>";
	var rowBonus = "<div class='row arrayRowBonus'></div>";
	var rowNum = soundArray.length / 6;
	var rowNumBonus = bonusTracks.length / 6;
	var counter = 0;
	var counterBonus = 0;
  var soundOverPlay = false;
	var soundCol = "<div class='col-xs-2 otherDiv soundBite' style='background-color:black;'></div>";
	var leftSoundCol = "<div class='col-xs-2 leftDiv soundBite' style='background-color:black;'></div>"; //col-xs-offset-1

	rowColMaker();
	soundPopulator();
	rowColMakerBonus();
	soundPopulatorBonus();

  $('#playbackC').click(function() {
    if(soundOverPlay == false){
      soundOverPlay = true;
      $('#playbackC').text('ON');
      $('#playbackC').addClass('on');
      $('#playbackC').removeClass('off');
      console.log('Sound Overplay has been activated');
    }
    else {
      soundOverPlay = false;
      // if(currentAudio.currentTime != 0 && currentAudio.currentTime != undefined){
      //   console.log(currentAudio.length);
      //   for(i=0; i<currentAudio.length; i++){
      //     currentAudio.pause();
      //     currentAudio.currentTime = 0;
      //   }
      // };
      $('#playbackC').text('OFF');
      $('#playbackC').addClass('off');
      $('#playbackC').removeClass('on');
      console.log('Sound Overplay has been deactivated');
    }
  });
  $('#stopSounds').click(function() {
    window.location.reload(false);
  });

  function rowColMaker() {
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
      $('#'+c+'').html("<img class='img'  src="+soundArray[c].soundImage+"><h2>"+soundArray[c].soundTitle+"</h2>");
    }
  };

  function rowColMakerBonus() {
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
  };

  function soundPopulatorBonus() {

    for(var e = 0; e < bonusTracks.length; e++) {
      $('#b'+e+'').html("<img class='img' alt='Responsive image' src="+bonusTracks[e].soundImage+"><h2>"+bonusTracks[e].soundTitle+"</h2>");
    }
  };


  $('.soundBite').click(function() {

    console.log('the ID of this clip is : '+$(this).attr('id'));
    if(soundOverPlay == false){
      if(currentAudio.currentTime != 0 && currentAudio.currentTime != undefined){
        console.log("currentAudio from .soundbite click "+currentAudio);
        console.log('currentTime of audio element : '+currentAudio.currentTime);
        currentAudio.pause();
        currentAudio.currentTime = 0;
      };
    };


    if ($(this).attr('id') == 'b0') {
      currentAudio = new Audio(bonusTracks[0].soundLink);
      currentAudio.play();
      cSID = 0;
    } else if ($(this).attr('id') == 'b1') {
      currentAudio = new Audio(bonusTracks[1].soundLink);
      currentAudio.play();
      cSID = 1;
    } else if ($(this).attr('id') == 'b2') {
      currentAudio = new Audio(bonusTracks[2].soundLink);
      currentAudio.play();
      cSID = 2;
    } else if ($(this).attr('id') == 'b3') {
      currentAudio = new Audio(bonusTracks[3].soundLink);
      currentAudio.play();
      cSID = 3;
    } else if ($(this).attr('id') == 'b4') {
      currentAudio = new Audio(bonusTracks[4].soundLink);
      currentAudio.play();
      cSID = 4;
    } else if ($(this).attr('id') == 'b5') {
      currentAudio = new Audio(bonusTracks[5].soundLink);
      currentAudio.play();
      cSID = 5;
    } else if ($(this).attr('id') == 'b6') {
      currentAudio = new Audio(bonusTracks[6].soundLink);
      currentAudio.play();
      cSID = 6;
    }

    else {
      var j = $(this).attr('id');
      currentAudio = new Audio(soundArray[j].soundLink);
      currentAudio.play();
      cSID = j;
    }
    
  });

  //Making the header a random sound player
  $('header').click(function() {
    console.log('the each Audio function is firing');
    if(currentAudio.currentTime != 0 && currentAudio.currentTime != undefined){
      currentAudio.pause();
      currentAudio.currentTime = 0;
      console.log('pauses and set current time to 0 of audio : '+$(this).attr('src'));
    };

    var r = Math.floor(Math.random() * (soundArray.length));
    currentAudio = new Audio(soundArray[r].soundLink);
    currentAudio.play();
  });	

};