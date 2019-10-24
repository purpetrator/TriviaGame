var score = 0;
var incorrect = 0;
var questionsIndex = 0;
var clockRunning = false;

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
  $("#endGame").hide();
});

// User clicks start game to start, "start game" div is hidden
// (Creating an on-click event that responds when user clicks start)
$(document).on("click", "#start-button", function() {
  $("#start-div").hide();
  $("#quiz-area").show();
  $("#timer-area").show();
  $("#results").hide();
  writeQuestion();
  clearTimeout(timer);
  clearInterval(intervalId);
  run();
  clockRunning = true;
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
  clearInterval(intervalId);
  $("#start-div").hide();
  $("#quiz-area").hide();
  $("#timer-area").hide();
  $("#results").show();
  $("#correctText").text(questions[questionsIndex].correct);
  $("#results-image").empty();
  $("#results-image").append(
    "<img src=" + questions[questionsIndex].image + " width='400'/>"
  );

  if (questionsIndex === questions.length - 1) {
    console.log("You've reached the end of the quiz");
    $("#next-question").hide();
    $("#end-game").show();
  } else {
    questionsIndex += 1;
  }
}

// Timer starts at 20 seconds and begins counting down

function run() {
  clearInterval(intervalId);
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
    clearInterval(intervalId);
    $("#wrongRight").empty();
    $("#wrongRight").text(
      "Seriously? You know you at least have a 25% chance if you guess..."
    );
    clockRunning = false;
  }
}

// User selects an answer, computer listens for click
$(".answer-button").on("click", function() {
  console.log("answer was selected");

  // This checks to see if selected answer is correct
  var selectedAnswer = $(this).text();
  console.log(selectedAnswer);
  if (selectedAnswer === questions[questionsIndex].correct) {
    score += 1;
    console.log(score);
    wrongAnswer();
    $("#wrongRight").empty();
    $("#wrongRight").text("Congratulations! You've done good, pig!");
  } else {
    incorrect += 1;
    wrongAnswer();
    $("#wrongRight").empty();
    $("#wrongRight").text("No! You've done bad, pig!");
  }
});

// Click continue to move on
$(document).on("click", "#next-question", function() {
  if (!questions[questionsIndex]) {
    $("#start-div").hide();
    $("#quiz-area").hide();
    $("#timer-area").hide();
    $("#results").hide();
    $("#results-image").show();
    $("#endGame").show();
    $("#correct-answers").text(score);
    $("#incorrect-answers").text(incorrect);
  } else {
    timer = 10;
    run();
    $("#start-div").hide();
    $("#quiz-area").show();
    $("#timer-area").show();
    $("#results").hide();

    writeQuestion();
  }
});

// I just need to code what happens when the end game button is clicked at the end
