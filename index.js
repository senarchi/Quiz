const quizDB=[
    {
    question: "1. What is the full form of HTML?",
    a: "Hello to My Land",
    b:"Hey Text Markup Language",
    c:"HyperText Makeup Language",
    d:"HyperText MarkUp Language",
    ans: "ans4"
    },
    {
        question: "2. What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheet",
        d:"Cascading Super Sheet",
        ans: "ans1"   
    },
    {
        question: "3. What is the full form of HTTP?",
        a: "Hypertext Transfer Protocol",
        b:"Hypertext Test Product",
        c:"Hypertext Transfer Product",
        d:"Hey Transfer Protocol",
        ans: "ans1"
    },
    {
        question: "4. What is the full form of Js?",
        a: "JavaSuper",
        b:"JavaScript",
        c:"JustScript",
        d:"JordanShoes",
        ans: "ans2"
    }
];

const question=document.querySelector(".question");
const option1= document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3= document.querySelector("#option3");
const option4= document.querySelector("#option4");
const submit=document.querySelector("#submit");

const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore");

let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList=quizDB[questionCount];

    question.innerHTML=questionList.question;

    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach((currElem)=>{
        if(currElem.checked){
            answer=currElem.id;
        }
    })
    return answer;
}
const deselectAll=()=>{
    answers.forEach((currElem)=>{
        currElem.checked=false;
    })
};



submit.addEventListener("click",()=>{
    const checkAnswer=getCheckAnswer();

    if(checkAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML= `
        <h3>You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>`;

        showScore.classList.remove("scoreArea")
    }
});