// var isHidden = false;

// Here I figured out how to show and hide objects. When one is showing, the other is not.
$("#showHide").on("click", function() {
  if ($("#quiz-area").is(":visible")) {
    $("#quiz-area").hide();
    $("#results").show();
  } else {
    $("#quiz-area").show();
    $("#results").hide();
  }
});

var correct = 0;
var incorrect = 0;
var questionsIndex = 0;

var questions = [
  {
    question: "What is the most popular spice in the world?",
    answer1: "cumin",
    answer2: "pepper",
    answer3: "oregano",
    answer4: "turmeric",
    correct: "pepper",
    image: "assets/images/pepper.jpg"
  },
  {
    question: "Monterey Jack is a type of what?",
    answer1: "cheese",
    answer2: "pizza",
    answer3: "olive",
    answer4: "fish",
    correct: "cheese",
    image: "assets/images/cheese.jpg"
  },
  {
    question: "What is the national dish of England?",
    answer1: "pot roast",
    answer2: "fish & chips",
    answer3: "chicken tikka masala",
    answer4: "welsh rarebit",
    correct: "chicken tikka masala",
    image: "assets/images/tikka.jpg"
  },
  {
    question: "What is the only US State which grows coffee beans?",
    answer1: "hawaii",
    answer2: "florida",
    answer3: "california",
    answer4: "texas",
    correct: "hawaii",
    image: "assets/images/hawaii.jpeg"
  }
];

// HERE IS THE TIMER
var timer = 10;
var intervalId;

// Present user with only "start game" div on load
$(document).ready(function() {
  $("#quiz-area").hide();
  $("#timer-area").hide();
  $("#results").hide();
});

// User clicks start game to start, "start game" div is hidden
// (Creating an on-click event that responds when user clicks start)
$(document).on("click", "#start-button", function() {
  $("#start-div").hide();
  $("#quiz-area").show();
  $("#timer-area").show();
  $("#results").hide();
  writeQuestion();
});

// Counter loops through questions array and displays first question
function writeQuestion() {
  $("#question").text(questions[questionsIndex].question);
  $("#buttonA").text(questions[questionsIndex].answer1);
  $("#buttonB").text(questions[questionsIndex].answer2);
  $("#buttonC").text(questions[questionsIndex].answer3);
  $("#buttonD").text(questions[questionsIndex].answer4);
}

function wrongAnswer() {
  $("#start-div").hide();
  $("#quiz-area").hide();
  $("#timer-area").hide();
  $("#results").show();
  $("#correctText").text(questions[questionsIndex].correct);
}

// Timer starts at 20 seconds and begins counting down

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  timer--;

  //  Show the nummer in the #show-timer tag.
  $("#show-timer").html("<h2>" + timer + "</h2>");

  //  Once number hits zero...// If no user input (timer runs out), go to wrong div
  if (timer === 0) {
    //  ...run something?
    wrongAnswer();
  }
}

run();

// User selects an answer, computer listens for click
$(".answer-button").on("click", function() {
  console.log("answer was selected");

  // This checks to see if selected answer is correct
  var selectedAnswer = $(this).text();
  if (selectedAnswer === questions[questionsIndex].correct) {
    correct++;
    console.log(correct);
  }
});

// Results div is shown (question div is hidden)
// If selected answer is correct, user sees correct div
// If selected answer is wrong, user sees wrong div

// Click continue to move on
$(document).on("click", "#next-question", function() {
  $("#start-div").hide();
  $("#quiz-area").show();
  $("#timer-area").show();
  $("#results").hide();
  writeQuestion();
});

// Time remaining resets to 30 seconds

// When we get to the end of questions, you see final results screen with correct, incorrect, and unanswered tallies

// Per Shelby
// $(".button").on("click", function () {
//   var answer = $(this).text();
//   if (answer === question[counter].correct) {
//       correct++;
//   }
//   counter++;
// display next question using questions[counter].question
