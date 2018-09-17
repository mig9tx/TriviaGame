$(document).ready(function () {
    //global variables

    var rightAnswer = 0;
    var wrongAnswer = 0;

    $('.startBtn').on('click')

    //Questions for the trivia game. They are an object with an array within for the answers.
    var questions = {
        q1: "Which was the first film released in 2008 that began the MCU as we know it?",
        answers1: [{
            a: "Iron Man",
            b: "Thor",
            c: "Captain America: The First Avenger",
            d: "Marvel's The Avengers"
        }],
        q2: "The Incredible Hulk was the second movie released in 2008. Which actor played the role of Bruce Banner?",
        answers2: [{
            a: "Eric Bana",
            b: "Edward Norton",
            c: "Mark Wahlberg",
            d: "Mark Ruffalo"
        }],
        q3: "Marvel's The Avengers is the sixth movie released and is the culmination of what is know to be Phase One of the MCU. Which of these characters is not one of the original Avenger's?",
        answers3: [{
            a: "Black Widow",
            b: "Captain America",
            c: "Hawkeye",
            d: "Ant-Man"
        }],
        q4: "Who are the Avenger's defending New York from in the first Avenger's movie?",
        answers4: [{
            a: "Ultron",
            b: "Loki",
            c: "Magneto",
            d: "the Green Goblin"
        }],
        q5: "In Captain America: The Winter Soldier, what is the name of Captain's best friend who turns out to be alive as the Winter Soldier",
        answers5: [{
            a: "Steve Rodgers",
            b: "Sam Wilson",
            c: "Bucky Barnes",
            d: "Peter Parker"
        }],
        q6: "What is the name of the special law-enforcement, and counter-terrorism agency led by Nick Fury?",
        answers6: [{
            a: "S.H.I.E.L.D.",
            b: "S.T.R.I.K.E.",
            c: "Justice League",
            d: "Hydra"
        }],
        q7: "In Spider-Man: Homecoming, who gives Peter Parker his super techy spider suit?",
        answers7: [{
            a: "Nick Fury",
            b: "Tony Stark",
            c: "Agent Coulson",
            d: "Bruce Banner"
        }],
        q8: "First appearing in Captain America: Civil War, Black Panther had his own movie released in 2017. It is explained that the Black Panther gets his power from a meteorite that contained this fictonal metal.",
        answers8: [{
            a: "Strontium",
            b: "Adamantium",
            c: "Vibranium",
            d: "Pantherium"
        }],
        q9: "In Thor: Ragnarok, Thor is re-united on planet Sakaar with a friend presumed to be lost. Which friend does the Grandmaster force him to fight in his Contest of Champions?",
        answers9: [{
            a: "Loki",
            b: "Hulk",
            c: "Thanos",
            d: "Deadpool"
        }],
        q10: "In Avenger's Infinity War, Thanos is after six infinity stones. Which of these is not one the stones?",
        answers10: [{
            a: "Time",
            b: "Power",
            c: "Reality",
            d: "Spirit"
        }],

    };


    function initialize() {
        //start button
        //start image
    };
    initialize();

    function startGame() {
        //sets timer allowing the user 20 seconds to answer the question
        //retrieves first question and displays it
        //adds event listeners to each button(answer)
        //waits for the user to click a button
        //once answered diplays correct/incorrect message + picture + facts
        //add 1 to rightAnswer or wrongAnswer depending on choice
        //after time passes, calls the next question and displays it
        var button = $("#buttons").html("<div>START</div>");
        button.addClass("btn btn-primary btn-lg");
        var question = $("#Question").html(questions.q1);
        var question1 = $("#Question").append(questions.q1);
        console.log(questions.q1);
    }
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










    console.log(questions.q1)
    console.log(questions.answers1[0].a);
    console.log(questions.q3)
    console.log(questions.answers3[0].d);



    https://media.giphy.com/media/fA6opG8tgo2KQ/giphy.gif










});