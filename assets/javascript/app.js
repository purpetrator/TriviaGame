
$(".button").on("click", function () {
    var answer = $(this).text();
    if (answer === question[counter].correct) {
        correct++;
    }
    counter++;
    // display next question using questions[counter].question
}


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
    },
];
