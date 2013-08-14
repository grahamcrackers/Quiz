/*$(document).ready(function(){
	
		//Aligns content in the middle of the page.
	$(window).resize(function(){
	    $('.container').css({
	        position:'absolute',
	        left: ($(window).width() - $('.container').outerWidth())/2,
	        top: ($(window).height() - $('.container').outerHeight())/2
	    });
	});

	$(window).resize();
});
*/
$(document).ready(function(){
//array of questions
var allQuestions = [{question: "What does the \"AR\" in AR-15 stand for?"}, choices: ["Armalite Rifle","Aroused Rifle","Assult Rifle", "AR"], correctAnswer: 0},
					{question: "What is the difference between an AR-15 and the military issued equivilant?", choices:["Faster Trigger","Full-Auto","Select Fire"], correctAnswer: 2},
					{question: "What is the standard NATO cartridge of the AR-15", choices:["5.56","7.62",".223","9mm"], correctAnswer: 0},
					{question: "What part of the AR-15 is considered the \"gun\"?", choices:["Upper Reciever","Lower Reciever","Barrel","Trigger Assembly"], correctAnswer: 1},
					{question: "What is the minimum barrel length to comply with the NFA regulations to maintain non-NFA classification?", choices:["15\"","16\"","16.5\"","17"], correctAnswer: 1},
					{question: "Is the AR-15 an \"Assult Rifle\"?", choices:["Yes","No"], correctAnswer: 1},
					{question: "What device holds the cartridges that are fed into the weapon system?", choices:["Holder","Gat","Clip","Magazine"], correctAnswer: 3},
					{question: "Who created the AR-15", choices:["Eugene Stoner","Ronnie Barrett","Max Atchisson","Mikhail Kalashnikov"], correctAnswer: 0},
					{question: "When was the first AR-15 made?", choices:["1955", "1957","1959","1961"], correctAnswer: 2},
					{question: "What is the Military equivilant of the AR-15", choices:["M1","M4OA1","M16","M82"], correctAnswer: 2}]

});