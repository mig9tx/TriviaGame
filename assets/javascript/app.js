
// Global Variables
var count = 90;
var questionIntervalId;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var questionIndex = 0;

//Questions arranged in an array of ojects.  
var questions = [{
    question: 'Which was the first film released in 2008 that began the MCU as we know it?',
    choices: ['Iron Man', 'Thor', 'Captain America: The First Avenger', 'Marvel\'s The Avengers'],
    answer: '0',
    picture: './assets/images/ironman.gif'
}, {
    question: 'The Incredible Hulk was the second movie released in 2008. Which actor played the role of Bruce Banner?',
    choices: ['Eric Bana', 'Mark Ruffalo', 'Edward Norton', 'Mark Wahlberg'],
    answer: '2',
    picture: './assets/images/edwardnorton.gif'
}, {
    question: 'Thor, the hammer wielding son of Odin, is based on which Iron Age mythology?',
    choices: ['Greek', 'Norse', 'Finnish', 'Baltic'],
    answer: '1',
    picture: './assets/images/thor.gif'
}, {
    question: "Marvel\'s The Avengers is the sixth movie released and is the culmination of what is known to be Phase One of the MCU. Which of these characters is not one of the original Avengers?",
    choices: ['Black Widow', 'Captain America', 'Ant-Man', 'Hawkeye'],
    answer: '2',
    picture: './assets/images/.gif'
}, {
    question: 'Who are the Avenger\'s defending New York from in the first Avenger\'s movie?',
    choices: ['Ultron', 'Loki', 'Magneto', 'Thanos'],
    answer: '1',
    picture: '.assets/images/.gif'
}, {
    question: 'In Captain America: The Winter Soldier, what is the name of Captain\'s best friend who turns out to be alive as the Winter Soldier?',
    choices: ['Steve Rodgers', 'Bucky Barnes', 'Sam Wilson', 'Peter Parker'],
    answer: '1',
    picture: '.assets/images/.gif'
}, {
    question: 'In Captain America: Civil War, who is Captain protecting the Winter Soldier from?',
    choices: ['Thor', 'Hulk', 'Iron-Man', 'Red Skull'],
    answer: '2',
    picture: '.assets/images/.gif'
}, {
    question: 'What is the name of the special law-enforcement, and counter-terrorism agency led by Nick Fury?',
    choices: ['S.H.I.E.L.D.', 'S.T.R.I.K.E.', 'Justice League', 'Hydra'],
    answer: '0',
    picture: '.assets/images/.gif'
}, {
    question: 'In Spider-Man: Homecoming, who gives Peter Parker his super techy spider suit?',
    choices: ['Tony Stark', 'Nick Fury', 'Agent Coulson', 'Bruce Banner'],
    answer: '0',
    picture: '.assets/images/.gif'
}, {
    question: 'First appearing in Captain America: Civil War, Black Panther had his own movie released in 2018. It is explained that the Black Panther gets his power from a meteorite that contained this fictional metal?',
    choices: ['Strontium', 'Adamantium', 'Vibranium', 'Pantherium'],
    answer: '2',
    picture: '.assets/images/.gif'
}, {
    question: 'In Thor: Ragnarok, Thor is re-united on planet Sakaar with a friend assumed lost. Which freind does the Grandmaster force him to fight in his Contest of Champions?',
    choices: ['Loki', 'Hulk', 'Thanos', 'Deadpool'],
    answer: '1',
    picture: '.assets/images/.gif'
}, {
    question: 'In Avenger\'s Infinity War, Thanos is after six infinity stones. Which of these is not one of the stones?',
    choices: ['Time', 'Power', 'Reality', 'Spirit'],
    answer: '3',
    picture: '.assets/images/.gif'
}]


//Functions
//will wait for the DOM to load prior to running code
$(document).ready(function () {
    //add start button to element with buttons id
    function initialize() {
        var button = $("#buttons").html("<div>START</div>");
        button.addClass("btn btn-success btn-lg");
        var rules = $("#rules").html("<br><p id='rules'>You will have 90 seconds to answer twelve questions regarding the Marvel Studios movies released in the last 10 years.</p><br><p>Press START to begin</p>")
        gameStart();
    };
    initialize();//calls the function

    function gameStart() {
        $("#buttons").on("click", function () {//even listener
            $("#buttons").hide("#buttons");//hides start button
            $("#rules").hide("#rules");//hides rules
            displayQuestions();//calls display question function
            questionIntervalId = setInterval(questionTimeout, 1000);//set questionIntervalId to run the setInterval function with questionTimeout every 1 second
            // question1(); original functions for the tougher homework
            // choices(); original functions for the tougher homework
        })
    };
    function displayQuestions() {//iterates through array of objects question property
        for (var i = 0; i < questions.length; i++) {//for loop to pull questions
            var question = $('#Question'); //defines question variable and assigns it the jQuery selector of element with Question id.
            question.append("<div class='font-weight-bold' id='question" + i + "'> " + questions[i].question + " </div>");//add IDs to question divs based on index id.
            for (var j = 0; j < questions[i].choices.length; j++) {//for loop to choose choices 
                var answerId = "answer" + i + "-" + j;//answerId gives each group of choices per question a specific id
                question.append("<input type='radio' name='choice" + i + "' id='" + answerId + "' value='" + j + "'/> " +
                    " <label for='" + answerId + "'>" + questions[i].choices[j] + "</label>");//displays the proper choices based on the index of the question
                    //adds the <input> properties to properly define each group so that only one radio button is selcted and gives a value to each radio button for comparison to the answer value assigned in the object property for the question.
            }
        }
        var finishButton = $("<div>FINISH</div>");
        finishButton.addClass("btn btn-primary btn-lg");
        $("#finishButton").append(finishButton);//places a finish button below all of the questions and radio buttons
    }

    function questionTimeout() {//timer function
        count--;
        console.log(count);
        $('#timer').html("Timer: " + count + " seconds");//selector with id to display time in html
        if (count === 0) {
            clearInterval(questionIntervalId);//stops the time of the clock.
            timeIsUp();//calls the timeIsUp function
        }
    }

    function timeIsUp() {
        for (var i = 0; i < questions.length; i++) {
            var choiceId = "choice" + i;//is used to create the name="" so that we can input it in the choiceValue
            var choiceValue = $("input[name='" + choiceId + "']:checked").val();//stores the value of the checked radio button by the user
            if (choiceValue) {
                if (choiceValue === questions[i].answer) {//compares the value of the checked radio button to the value from the array objects, both are strings
                    correctAnswers++;//if equal correct answer +1
                } else {//if not +1 to wrong
                    wrongAnswers++;
                }
            } else {//if left blank unanswered +1
                unanswered++;
            }
        }
        //if time is up, elements are hidden and new div displaying results is shown.
        $("#finishButton").hide("#finishButton");
        $("#Question").hide("#Question");
        $("#timer").hide("#timer");
        $("#results").html("<h2>Time Is Up!!!</h2> <br> <p>Results <br> Answered Correct: " + correctAnswers + "<br> Answered Incorrect: " + wrongAnswers + "<br> Unanswered: " + unanswered + "</p>");
        clearInterval(questionIntervalId);//clears the timer, checked in console
    }

    function finished() {//performs the same as timeIsUp function without the time is up alert.
        $("#finishButton").hide("#finishButton");
        $("#Question").hide("#Question");
        $("#timer").hide("#timer");
        $("#results").html("<h2>Results</h2> <br> Answered Correct: " + correctAnswers + "<br> Answered Incorrect: " + wrongAnswers + "<br> Unanswered: " + unanswered + "</div>");
        clearInterval(questionIntervalId);
        // console.log('correct= ' + correctAnswers);
        // console.log('unanswered= ' + unanswered);
        // console.log('wrongAnswers= ' + wrongAnswers);
    }
    $("#finishButton").on("click", function () {//event listener for the finish button
        for (var i = 0; i < questions.length; i++) {//iterates based on the length of the questions array
            var choiceId = "choice" + i;//defines the value for choiceId to be used in obtaining the choiceValue
            var choiceValue = $("input[name='" + choiceId + "']:checked").val();//obtains the value of the checked radio button
            if (choiceValue) {
                if (choiceValue === questions[i].answer) {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
                }
            } else {
                unanswered++;
            }
            // console.log(choiceValue);
        } finished();




        //for loop through the values of each question
        //store the checked values into an array
        //compare the stored values to the answer array
        //calculate how many are correct and how many are incorrect and add to score

        console.log("finish works");
    });


    // function question1() {
    //     var question1 = $("#Question");
    //     question1.html(questions[0].question);
    //     questionIntervalId = setInterval(questionTimeout, 1000);
    // };

    // function choices() {
    //     for (var i = 0; i < questions[0].choices.length; i++) {
    //         var finishButton = $("<button>");
    //             finishButton.addClass("btn btn-primary btn-lg");
    //         finishButton.attr("data-choices", questions[0].choices[i]);
    //         finishButton.text(questions[0].choices[i]);
    //         $("#finishButton").append(finishButton);
    //         console.log(finishButton);
    //     };
    // };

    // function answerCheck(){
    //compare the button clicked to the words in the choice array
    //if the words match then add one to correctAnswers
    //if the words don't match then add one to wrongAnswers
    //have it push to html div answer a picture and facts about the answers

    // }

    // fuction answerInterval()
    //create a timer that displays the answer div for 5 seconds
    //then moves on to the next question by re-calling the question1 function
})









