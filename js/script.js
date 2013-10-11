$(document).ready(function(){
"use strict";

//function object
function Question (theQuestion, theChoices, theCorrectAnswer){
	this.question = theQuestion;
	this.choices = theChoices;
	this.correctAnswer = theCorrectAnswer;
}

//function to getAllQuestions from JSON file
function getAllQuestions(values) {
        allQuestions.push(values);
}

//get all answers from JSON file and push to array
function getAllAnswers(values) {
        allAnswers.push(values);
}

//calculate score at the end of quiz
function getScore() {
    if (allAnswers.length === userAnswers.length){
        console.log("userAnswers: "+ userAnswers + " allAnswers: " + allAnswers);
        for (var i=0; i<userAnswers.length; i++) {
            if(parseInt(userAnswers[i]) === parseInt(allAnswers[i])){
                score++
            }        
        }
    } 
}

//function to reuse the showQuestion logic to use the with back button
function getQuestion() {
    for(var i=0; i < allQuestions.length; i++){

        if(qCount === i){
            $('#Question').html("<h1>"+allQuestions[i].question+"</h1>");
            //console.log("Answer to the question is :" + allQuestions[i].correctAnswer + " - Score:"+score);

            //displays list of choices for current object in the array
            for (var j = 0, answers = allQuestions[i].choices; j < answers.length; j++){
                $('#Selection').append("<br><label><input id='choice"+j+"' type='radio' name='choice' class='choice' value='"+j+"'>"+answers[j]+"</input></label>");
            }

            cAns = allQuestions[i].correctAnswer;                
        } 
    }
}

//check the radio buttons if user has already answered the question
function checkRadio() {
    for (var i=0; i<userAnswers.length; i++) {
        if (qCount === i){
            $('input[value='+userAnswers[i]+']').prop('checked',true);
        }
    } 
}


function showQuestion() {
    //removes answers before next question is loaded
    $('#Selection').children().remove();
    getScore();
    getQuestion();
    showButtons();
    checkRadio();
}

function showButtons() {
    //will insert a back button after the first question
    if(qCount > 0 && $('#Back').length == 0){
        //$('#Selection').after("<button id='Back' class='btn btn-success'> Back </button>");
        $('#Next').before("<button id='Back' class='btn btn-success'> Back </button>");
    } else if (qCount < 1){
        $('#Back').remove();
    } else if (qCount >= allQuestions.length){
        $('#Question').html("<h1>Your final score is: "+score+"/"+allQuestions.length+"</h1>");
        $('#Next').remove();
        $('#Back').remove();
    }
}

//users score and position in array
var score = 0;	
var qCount = 0;
var allQuestions = [];
var allAnswers = [];
var cAns;
var selectedAnswer;
var currentQuestion;
var userAnswers = [];


//grab each question from JSON data and put it into global array allQuestions
$.getJSON('data/questions.json', function(json){
    $.each(json.questions, function(name, val) {
        var JSONquestion = new Question();
        JSONquestion.question = val.question;
        JSONquestion.choices = val.choices;
        JSONquestion.correctAnswer = val.answer;
        getAllQuestions(JSONquestion);
        getAllAnswers(JSONquestion.correctAnswer);
    });  
});



    //On click, loop through array of objects to grab the question
    $('.container').on('click', '#Next', function(){

    console.log(allAnswers);

        //checks user input
        selectedAnswer = $("input[name='choice']:checked").val();
        console.log("Selected Answer: " + selectedAnswer);

        $('#Question').fadeOut( function (){

            //fade in question
            $('#Question').fadeIn();

            //validation logic
            if(selectedAnswer == null && $('#Selection').html().length > 0)
            {
                alert("Dude... pick an answer.");
                return false;
            } if ($('#Selection').html().length === 0 || $('#Back') === undefined) {
                //will start quiz count when next button is hit the first time
                qCount = 0
            }else {
                //stores user answer in array
                userAnswers[qCount] = selectedAnswer;
                qCount++;
            }

            //displays question of current object in the array
            showQuestion();

        }); //End fadeOut
    });  //End $('Next').click

    
    
    $('.container').on('click', '#Back', function(){
        
        $('#Question').fadeOut(function(){
            
            $('#Question').fadeIn();
            
            qCount--;

            showQuestion();

            console.log("Question Count: "+qCount);

        });
    
    }); //End $('#Back').click

    
}); //End Document