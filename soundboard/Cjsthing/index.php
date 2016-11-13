<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <audio id="myAudio" tagname="audio">
          <source src=".ogg" type="audio/ogg">
          <source src="E=MC2.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <audio id="myAudio1" tagname="audio">
          <source src=".ogg" type="audio/ogg">
          <source src="So Far To Go.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <audio id="myAudio2" tagname="audio">
          <source src=".ogg" type="audio/ogg">
          <source src="Last Donut of the Night.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>

        <p>Click the buttons to play or pause the audio.</p>

        <button onclick="playAudio()" type="button">J Dilla E=MC^2</button>
        <button onclick="playAudio1()" type="button">J Dilla So Far To Go</button>
        <button onclick="playAudio2()" type="button">J Dilla Last Donut of the Night</button>
        <button id ="stopButton" type="button">Pause Audio</button>

        <script>
            var w = document.getElementById("myAudio");
            var x = document.getElementById("myAudio1");
            var y = document.getElementById("myAudio2");
            var z;
            
            function playAudio() {
                if(z  && z != w) {
                    z.pause(); 
                    }
                    //This part pauses the currently playing audio
                    if (w.paused) {
                        w.currentTime = 0;
                        w.play();
                    /*This part checks to see if w is playing. If it isn't,
                    it resets the current time to 0. Otherwise when the audio
                    pauses, it will stay at the same point in the song when you
                    cue it back up.*/
                    }else{
                        w.currentTime = 0;
                    /*This part restarts the track if you play it again.
                    Without this, each time you hit play, the track will start
                    over without stopping*/
                    }
                    z = w;
            }
            
            function playAudio1() {
                 if(z  && z != x) {
                    z.pause(); 
                    }
                    if (x.paused) {
                        x.currentTime = 0;
                        x.play();
                    }else{
                        x.currentTime = 0;
                    }
                    z = x;
            }
            
            function playAudio2() {
                 if(z  && z != y) {
                    z.pause(); 
                    }
                    if (y.paused) {
                        y.currentTime = 0;
                        y.play();
                    }else{
                        y.currentTime = 0;
                    }
                    z = y;
            }
            
            document.getElementById('stopButton').onclick = function() {
            var sounds = document.getElementsByTagName('audio');
            for(i=0; i<sounds.length; i++) sounds[i].pause();
            };
            //this is just a master pause button.
        </script>
    </body>
</html>