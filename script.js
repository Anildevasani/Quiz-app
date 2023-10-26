const questions=[
  {
    question:"What does the abbreviation HTML stand for?",
    answers:[
        {text:"Hyper Text Markup Language", correct: true},
        {text:"High Text Markup Language", correct: false},
        {text:"Hyper Text Markdown Language", correct: false},
        {text:"None of the above", correct: false},
    ]
  },
  {
    question:"What is the smallest header in HTML by default?",
    answers:[
        {text:"h2", correct: false},
        {text:"h6", correct: true},
        {text:"h4", correct: false},
        {text:"h1", correct: false},
    ]
  },
  {
    question:"Javascript is an _______ language?",
    answers:[
        {text:"Procedural", correct: false},
        {text:"Object-Based", correct: false},
        {text:"Object-Oriented", correct: true},
        {text:"None of the above", correct: false},
    ]
  },
  {
    question:"Which of the following methods can be used to display data in some form using Javascript?",
    answers:[
        {text:"document.write()", correct: false},
        {text:"console.log()", correct: false},
        {text:"window.alert()", correct: false},
        {text:"All of the above", correct: true},
    ]
  },
  {
    question:"Which of the following tag is used to add rows in the table?",
    answers:[
        {text:"td", correct: false},
        {text:"th", correct: false},
        {text:"tr", correct: true},
        {text:"None of the above", correct: false},
    ]
  },
  {
    question:"The most common programming languages used to develop websites are _________.",
    answers:[
        {text:"HTML", correct: false},
        {text:"JavaScript", correct: false},
        {text:"Cascading Style Sheet", correct: false},
        {text:"All of the above", correct: true},
    ]
  },
  {
    question:"The script tag must be placed in __________",
    answers:[
        {text:"the head tag", correct: false},
        {text:"the head or body", correct: true},
        {text:"the title or head", correct: false},
        {text:"after the body tag", correct: false},
    ]
  },
  {
    question:"In RGB Values color code can be defined between _________.",
    answers:[
        {text:" 0 to 64", correct: false},
        {text:"0 to 128", correct: false},
        {text:" 0 to 255", correct: true},
        {text:"0 to 300", correct: false},
    ]
  },
  {
    question:"A web page is linked within the same web page. It is done by using _________.",
    answers:[
        {text:" Internal Link", correct: true},
        {text:"External Link", correct: false},
        {text:"Outer Link", correct: false},
        {text:"Inner Link", correct: false},
    ]
  },
  {
    question:"If you want to apply the same style in multiple elements, which one of the style rules is best for doing the same.",
    answers:[
        {text:"Grouping Selectors", correct: true},
        {text:"Class Selectors", correct: false},
        {text:"ID Selectors", correct: false},
        {text:"Child Selector", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


currentQuestion.answers.forEach(answer => {
    const button =document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer)
});
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
}
} 

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="Play Again";
  nextButton.style.display="block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}


nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
});
startQuiz();