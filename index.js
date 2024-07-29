const questions = [
    {question: "They ______________ her and trusted her for years?",
        answers: [
            {text: "know", corrext: "flase"},
            {text: "had known", corrext: "false"},
            {text: "knew", corrext: "true"},
            {text: "known", corrext: "false"},
        ]
    },
    {question: "Every morning she ______________ up early and gets ready for work.",
        answers: [
            {text: "is waking", corrext: "false"},
            {text: "had woken", corrext: "false"},
            {text: "has woken", corrext: "false"},
            {text: "wakes", corrext: "true"},
        ]
    }, 
    {question: "People ______________ walk on grass.",
        answers: [
            {text: "couldn't", corrext: "false"},
            {text: "needn't", corrext: "false"},
            {text: "mustn't", corrext: "true"},
            {text: "may not", corrext: "false"},
        ]
    },
    {question: "______________ you speak any foreign languages?",
        answers: [
            {text: "can't", corrext: "false"},
            {text: "shouldn't", corrext: "false"},
            {text: "couldn't", corrext: "false"},
            {text: "can", corrext: "true"},
        ]
    }
]; 

const questionElement = document.querySelector("h2");
const answersButton = document.querySelector(".answer-box");
const nextBtn = document.querySelector("#next-btn");

var totalScore = 0;
var currentQuestionIndex = 0;

function startQuiz(){
    resetState();
    nextBtn.innerHTML = "Next";
    let currentQuestion = questions[currentQuestionIndex];
    let questioNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questioNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        if(answer.corrext){
            button.dataset.correct = answer.corrext; 
        }
        button.addEventListener("click", answerHandler);
        answersButton.appendChild(button);
    });
}

function resetState(){
    nextBtn.style.display = "none";
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.lastChild);
    }
}

function answerHandler(e){
    let selectedButton = e.target;
    if(selectedButton.dataset.correct === "true"){
        selectedButton.classList.add("correct");
        totalScore++;
        
    }else{
        selectedButton.classList.add("incorrect");
    }

    Array.from(answersButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }else if(button.dataset.correct){
            button.classList.add("incorrect");
        }
        button.disabled = true; 
    });
   
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        startQuiz();
    }else{
        resetState();
        questionElement.innerHTML = "";
        answersButton.innerHTML = `You have scored ${totalScore} out of ${questions.length}.`;
        nextBtn.style.display = "block";
        nextBtn.innerHTML = "Replay";
        quizEnd();
    }
});

function quizEnd(){
    console.log("end");
    if(currentQuestionIndex == questions.length){
        console.log("end22222");
        
    }else{
        totalScore = 0;
        currentQuestionIndex = 0;
        startQuiz();
    }
        
        
        

}

startQuiz();