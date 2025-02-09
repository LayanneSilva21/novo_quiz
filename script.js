const quizData = [
    {
        question: "Quem reconstruiu o muro de Jerusalém em 52 dias?",
        options: ["Ester", "Naamã", "Elias", "Neemias"],
        answer: "Neemias"
    },
    {
        question: "Qual o maior capitulo da Biblia?",
        options: ["Salmos 119", "João 16", "Mateus 25", "Neemias 2"],
        answer: "Salmos 119"
    },
    {
        question: "Qual profeta era calvo e chegou a ser zombado pela sua aparência?",
        options: ["Eliseu", "Jonas", "Samuel", "Elias"],
        answer: "Eliseu"
    },
    {
        question: "Quem ficou temporariamente mudo no Novo Testamento?",
        options: ["Paulo", "Zacarias", "Simeão", "Pedro"],
        answer: "Zacarias"
    },
    {
        question: "Qual o nome da mãe de Isaque?",
        options: ["Penina", "Sara", "Raquel", "Hagar"],
        answer: "Sara"
    },
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
