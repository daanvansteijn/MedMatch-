
let questions = [
    { text: "What excites you most about medicine?", options: ["Diagnosing cases", "Surgery", "Talking to patients", "Research"] },
    { text: "Do you prefer fast or slow-paced environments?", options: ["Fast-paced", "Slow-paced", "Medium", "Varies"] },
    { text: "Do you enjoy working directly with patients?", options: ["Yes", "Sometimes", "Rarely", "No"] }
];
let currentQuestion = 0;
let scores = [0, 0, 0, 0];

function startQuiz() {
    document.querySelector("button").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    document.getElementById("question-text").innerText = questions[currentQuestion].text;
    let buttons = document.querySelectorAll("#quiz button");
    questions[currentQuestion].options.forEach((option, index) => {
        buttons[index].innerText = option;
    });
}

function answer(optionIndex) {
    scores[optionIndex]++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    let specialties = ["Radiology", "Surgery", "Psychiatry", "Research"];
    let maxScore = Math.max(...scores);
    let bestMatch = specialties[scores.indexOf(maxScore)];
    document.getElementById("result").innerText = "Your best medical specialty match is: " + bestMatch;
    document.getElementById("result").style.display = "block";
}
