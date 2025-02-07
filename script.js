const quizData = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    // Adicione mais perguntas aqui
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;

    optionsEl.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const label = document.createElement("label");
        label.innerText = option;
        label.innerHTML = `
            <input type="radio" name="answer" value="${option}">
            ${option}
        `;
        optionsEl.appendChild(label);
    });
}

function getSelectedAnswer() {
    const answerInputs = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;

    answerInputs.forEach(input => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });

    return selectedAnswer;
}

submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();

    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            resultEl.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
            submitBtn.innerText = "Reiniciar Quiz";
            submitBtn.addEventListener("click", () => {
                location.reload();
            });
        }
    }
});

loadQuiz();