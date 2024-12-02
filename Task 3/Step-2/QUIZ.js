// Quiz Data
const quizData = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris",
        },
        correct: "c",
    },
    {
        question: "Which language is used for web development?",
        answers: {
            a: "Python",
            b: "JavaScript",
            c: "C++",
        },
        correct: "b",
    },
    {
        question: "What is 2 + 2?",
        answers: {
            a: "3",
            b: "4",
            c: "5",
        },
        correct: "b",
    },
    {
        question: "HTML Full form?",
        answers: {
            a: "High Text Markup Language",
            b: "Hard Text Markdown Language",
            c: "Hyper Text Markup Language",
        },
        correct: "c",
    },
    {
        question: "What is 30/5?",
        answers: {
            a: "6",
            b: "2",
            c: "9",
        },
        correct: "a",
    },
    {
        question: "Full form of AI?",
        answers: {
            a: "Another Intelligence",
            b: "Artificial Intention",
            c: "Artificial Intelligence",
        },
        correct: "c",
    },
    {
        question: "Which company invented ChatGPT?",
        answers: {
            a: "Microsoft",
            b: "Google",
            c: "OpenAI",
        },
        correct: "c",
    },
    {
        question: "What is 5*5?",
        answers: {
            a: "10",
            b: "25",
            c: "50",
        },
        correct: "b",
    },
];

// Elements
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const restoreButton = document.getElementById("restore");
const resultsContainer = document.getElementById("results");

// Build Quiz
function buildQuiz() {
    quizContainer.innerHTML = ""; // Clear existing content
    resultsContainer.textContent = ""; // Clear results
    quizData.forEach((q, index) => {
        const answersHTML = Object.keys(q.answers)
            .map(
                (key) =>
                    `<label>
                        <input type="radio" name="question${index}" value="${key}">
                        ${key}: ${q.answers[key]}
                    </label>`
            )
            .join("");

        quizContainer.innerHTML += `<div class="question">
            <p>${q.question}</p>
            <div class="answers">${answersHTML}</div>
        </div>`;
    });
}

// Show Results
function showResults() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );
        if (selected && selected.value === q.correct) {
            score++;
        }
    });
    resultsContainer.textContent = `You scored ${score} out of ${quizData.length}`;
}

// Restore Quiz
function restoreQuiz() {
    buildQuiz(); // Rebuild the quiz
}

// Initialize
buildQuiz();
submitButton.addEventListener("click", showResults);
restoreButton.addEventListener("click", restoreQuiz);
