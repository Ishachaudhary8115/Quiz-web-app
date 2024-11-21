const questions = [
    {
        question:"Which is largest animal in the world ?",
        answer:[
            { text:"Shark",correct:false },
            { text:"Blue while",correct: true },
            { text:"Elephant",correct:false },
            { text:"Giraffe",correct:false },
        ]
    },
    {
        question:"Which is smallest countery in the world ?",
        answer:[
            { text:"Vatican city",correct:false },
            { text:"Bhutan",correct: true },
            { text:"Nepal",correct:false },
            { text:"Shri Lanka",correct:false },
        ]
    },
    {
        question:"Which is largest desert in the world ?",
        answer:[
            { text:"kalahari",correct:false },
            { text:"Gobi",correct: false },
            { text:"Sahara",correct:false },
            { text:"Antarctica",correct:true },
        ]
    },
    {
        question:"Which is smallest continent in the world ?",
        answer:[
            { text:"Asia",correct:false },
            { text:"Australia",correct: true },
            { text:"Arctic",correct:false },
            { text:"Africa",correct:false },
        ]
    }, 
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function  showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
    
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>
    {
        if(!button.dataset.correct === "true"){
            button.classList.add("correct");
    }
    button.disabled = true;
});

nextButton.style.display = "block";
 
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();




// const questions = [
//     {
//         question:"Which is largest animal in the world ?",
//                 answer:[
//                     { text:"Shark",correct:false },
//                     { text:"Blue while",correct: true },
//                     { text:"Elephant",correct:false },
//                     { text:"Giraffe",correct:false },
//                 ]
//     },
//            {
//                 question:"Which is smallest countery in the world ?",
//                 answer:[
//                     { text:"Vatican city",correct:false },
//                     { text:"Bhutan",correct: true },
//                     { text:"Nepal",correct:false },
//                     { text:"Shri Lanka",correct:false },
//                 ]
//             },
//             {
//                 question:"Which is largest desert in the world ?",
//                 answer:[
//                     { text:"kalahari",correct:false },
//                     { text:"Gobi",correct: false },
//                     { text:"Sahara",correct:false },
//                     { text:"Antarctica",correct:true },
//                 ]
//             },
//             {
//                 question:"Which is smallest continent in the world ?",
//                 answer:[
//                     { text:"Asia",correct:false },
//                     { text:"Australia",correct: true },
//                     { text:"Arctic",correct:false },
//                     { text:"Africa",correct:false },
//                 ]
//             },
// ];
// const questionElement = document.getElementById("question");
// const questionElement = document.getElementById("ans");
// const questionElement = document.getElementById("question");