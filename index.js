
    function cardClicked(emotion){
	    switch(emotion){
		    case "happy":
		    	response = "You picked the happy card! Keep being happy!";
				break;
			case "sad":
				response = "You picked the sad card. Let's figure out a way to lift that frown upside down.";
				break;
			case "worried":
				response = "You picked the worried card. What's worrying you?";
				break;
			case "angry":
				response = "You picked the angry card. Some things you might do include yoga and deep breathing.";
				break;
			default:
				response = "You didn't pick any card.";
	    }
	    voice = "US English Female";
	    responsiveVoice.speak(response, voice, {pitch: 1.25}, {rate: 1.0});
	    take_snapshot();
    }
    
    Webcam.attach('#my_camera');
    
    function take_snapshot() {
    	Webcam.snap( function(data_uri) {
        // snap complete, image data is in 'data_uri'
        Webcam.upload(data_uri, 'https://autismtracker.vishnu.io/upload_img.php', function(code, text) {
        obj = $.parseJSON(text);
		anger = obj[0].scores.anger;
        disgust = obj[0].scores.disgust;
        contempt = obj[0].scores.contempt;
        fear = obj[0].scores.fear;
        happiness = obj[0].scores.happiness;

		var emotions = [anger, disgust, contempt, fear, happiness],
		maxEmotion = Math.max.apply(Math.max, emotions),
		emotionNames = ["angry", "disgusted", "worried", "afraid", "happy"],
		maxEmotionName = emotionNames[emotions.indexOf(maxEmotion)];
		
		$('#response').html("Your face looks " + maxEmotionName + ".");
		window.expression = maxEmotionName;
		
        } );

    } );    
}