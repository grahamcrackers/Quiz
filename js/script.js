$(document).ready(function(){

function Question (theQuestion, theChoices, theCorrectAnswer){
	this.question = theQuestion;
	this.choices = theChoices;
	this.correctAnswer = theCorrectAnswer;
}

var question0 = new Question("What does the \"AR\" in AR-15 stand for?", ["Armalite Rifle","Aroused Rifle","Assault Rifle", "Arkansas"], 0);
var question1 = new Question("What is the difference between an AR-15 and the military issued equivalent?", ["Faster Trigger","Full-Auto","Select Fire"], 2);
var question2 = new Question("What is the standard NATO cartridge of the AR-15", ["5.56","7.62",".223","9mm"], 0);
var question3 = new Question("What part of the AR-15 is considered the \"gun\"?", ["Upper Receiver","Lower Receiver","Barrel","Trigger Assembly"], 1);
var question4 = new Question("What is the minimum barrel length to comply with the NFA regulations to maintain non-NFA classification?", ["15\"","16\"","16.5\"","17"], 1);
var question5 = new Question("Is the AR-15 an \"Assault Rifle\"?", ["Yes","No"], 1);
var question6 = new Question("What device holds the cartridges that are fed into the weapon system?", ["Holder","Gat","Clip","Magazine"], 3);
var question7 = new Question("Who created the AR-15", ["Eugene Stoner","Ronnie Barrett","Max Atchisson","Mikhail Kalashnikov"], 0);
var question8 = new Question("When was the first AR-15 made?", ["1957","1958","1959","1960"], 2);
var question9 = new Question("What is the Military equivalent of the AR-15", ["M1","M4OA1","M16","M82"], 2);
//array of questions
var allQuestions = [question0,question1,question2,question3,question4,question5,question6,question7,question8,question9];

//users score and position in array
var score = 0;	
var qCount = 0;
	
    //create area for score to test for correct answer
    $('#Next').after("<br><div id='Score'>"+score+"</div>");

	//On click, loop through array of objects to grab the question
	$('#Next').click(function(){
        var currentAnswer;
		//displays question of current object in the array
		for(var i=0; i < allQuestions.length; i++){
			if(qCount === i){
				$('#Question').html(allQuestions[i].question + "<br>" + allQuestions[i].correctAnswer);
				currentAnswer = allQuestions[i].correctAnswer;


				//displays list of choices for current object in the array
				for (var j = 0, ans = allQuestions[i].choices; j < ans.length; j++){
						$('#Question').append("<br><input id='choices' type='radio' name='choice' value='"+j+"'>"+ans[j]+"</input>");					
				}
				
			}
		}
		if($("input:radio[name='choice']:checked").val() === currentAnswer){
            score++;
        }

		qCount++;

		// check to see if the correct radio button is clicked 
		// and if it matches correct answer, add 1 to score		
		//create area for score to test for correct answer
		$('#Score').replace(score);
		
		
		
	});



	
});