$(document).ready(function(){
"use strict";

function Question (theQuestion, theChoices, theCorrectAnswer){
	this.question = theQuestion;
	this.choices = theChoices;
	this.correctAnswer = theCorrectAnswer;
}

//function to getAllQuestions from JSON file
function getAllQuestions(values) {
        allQuestions.push(values);
}

//function to reuse the showQuestion logic to use the back button
function getQuestion() {
    for(var i=0; i < allQuestions.length; i++){
            if(qCount === i){
                //$('#Question').html(allQuestions[i].question).fadeIn();
                currentQuestion = allQuestions[i].question;
                //console.log("Answer to the question is :" + allQuestions[i].correctAnswer + " - Score:"+score);

                //displays list of choices for current object in the array
                for (var j = 0, answers = allQuestions[i].choices; j < answers.length; j++){
                    $('#Selection').append("<br><label><input id='choices' type='radio' name='choice' value='"+j+"'>"+answers[j]+"</input></label>");
                }

                cAns = allQuestions[i].correctAnswer;
            } 
        }
}

function showQuestion() {

}

//users score and position in array
var score = 0;	
var qCount;
var cAns;
var selectedAnswer;
var userAnswers = [];
var allQuestions = [];
var currentQuestion;
var currentChoices;


//grab each question from JSON data and put it into global array allQuestions
$.getJSON('data/questions.json', function(json){
    $.each(json.questions, function(name, val) {
        var JSONquestion = new Question();
        JSONquestion.question = val.question;
        JSONquestion.choices = val.choices;
        JSONquestion.correctAnswer = val.answer;
        getAllQuestions(JSONquestion);
    });  
});

$('#Question').fadeIn();

    //On click, loop through array of objects to grab the question
    $('#Next').on('click', function(){

        
        //checks user input
        selectedAnswer = $("input[name='choice']:checked").val();
        console.log("Selected Answer: " + selectedAnswer);


        //validation logic could be implemented like this
        if(selectedAnswer == null && $('#Selection').html().length > 0)
        {
            alert("Dude... pick an answer.");
            return false;
        } if ($('#Selection').html().length === 0) {
            qCount = 0
        }else {
            //Question count
            qCount++;
        }


        //if selected answer is equal to correct answer, add 1
        console.log("Now comparing your answer: " + selectedAnswer  + " to correct answer: " + cAns);
        if(selectedAnswer && selectedAnswer == cAns ){
            //score will not update until next question with this logic
            score++;
        }


        //removes answers before next question is loaded
        $('#Selection').children().remove();

        //displays question of current object in the array
        getQuestion();

        

        if(qCount === 2){
            $('#Selection').after("<button id='Back' class='btn btn-success'> Back </button>")
        }else if (qCount > 10){
            $('#Question').html("Your final score is " + score+"/10");
            $('#Next').remove();
            $('#Back').remove();
        }
        console.log("Question Count: "+qCount);


    });  //End $('Next').click

    $('.container').on('click', '#Back', function(){
        
        qCount--;
        $('#Selection').children().remove();
        getQuestion();
        console.log("Question Count: "+qCount);

        if (qCount < 2){
            $('#Back').remove();
        }
    
    }); //End $('#Back').click

    $('.container').on('click', '#Fade', function(){
        
        $('#Question').fadeToggle();
    }); //End $('#Back').click
}); //End Document