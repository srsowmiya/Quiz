const arr=[
   { question:" Which planet in the solar system is known as the Red Planet",
    answers:[
    {option:"Venus",correct:false},
    {option:"Earth",correct:false},
    {option:"Mars",correct:true},
    {option:"Jupiter",correct:false},
    ]
   },
 {
  question: "What is the capital of Japan?",
  answers: [
    { option: "Beijing", correct: false },
    { option: "Tokyo", correct: true },
    { option: "Seoul", correct: false },
    { option: "Bangkok", correct: false }
  ]
}
,{
  question: "Which river is the longest in the world?",
  answers: [
    { option: "Amazon", correct: false },
    { option: "Mississippi", correct: false },
    { option: "Nile", correct: true },
    { option: "Yangtze", correct: false }
  ]
}

,{
  question: "What gas is used to extinguish fires?",
  answers: [
    { option: "Oxygen", correct: false },
    { option: "Nitrogen", correct: true },
    { option: "Carbon dioxide", correct: false },
    { option: "Hydrogen", correct: false }
  ]
},{
  question: "Which animal is known as the King of the Jungle?",
  answers: [
    { option: "Elephant", correct: false },
    { option: "Tiger", correct: false },
    { option: "Lion", correct: true },
    { option: "Cheetah", correct: false }
  ]
},
{
  question: "What do bees make?",
  answers: [
    { option: "Milk", correct: false },
    { option: "Honey", correct: true },
    { option: "Butter", correct: false },
    { option: "Oil", correct: false }
  ]
},
{
  question: "How many days are there in a week?",
  answers: [
    { option: "5", correct: false },
    { option: "6", correct: false },
    { option: "7", correct: true },
    { option: "8", correct: false }
  ]
},
{
  question: "Which color is a banana when it's ripe?",
  answers: [
    { option: "Red", correct: false },
    { option: "Yellow", correct: true },
    { option: "Green", correct: false },
    { option: "Purple", correct: false }
  ]
},
{
  question: "What is the opposite of hot?",
  answers: [
    { option: "Cold", correct: true },
    { option: "Warm", correct: false },
    { option: "Boiling", correct: false },
    { option: "Cool", correct: false }
  ]
},{
  question: "Which shape has 3 sides?",
  answers: [
    { option: "Square", correct: false },
    { option: "Circle", correct: false },
    { option: "Triangle", correct: true },
    { option: "Rectangle", correct: false }
  ]
},
{
  question: "What is the color of the sky on a clear day?",
  answers: [
    { option: "Blue", correct: true },
    { option: "Green", correct: false },
    { option: "Red", correct: false },
    { option: "Black", correct: false }
  ]
},
{
  question: "Which number comes after 9?",
  answers: [
    { option: "8", correct: false },
    { option: "10", correct: true },
    { option: "11", correct: false },
    { option: "9", correct: false }
  ]
},
{
  question: "How many legs does a spider have?",
  answers: [
    { option: "6", correct: false },
    { option: "8", correct: true },
    { option: "4", correct: false },
    { option: "10", correct: false }
  ]
},
{
  question: "What do you use to write on a blackboard?",
  answers: [
    { option: "Pen", correct: false },
    { option: "Pencil", correct: false },
    { option: "Chalk", correct: true },
    { option: "Crayon", correct: false }
  ]
}



]
const queselement = document.querySelector(".ques");
const answeroption=document.getElementById("btns")
const nextbtn=document.getElementById("next-btn")

nextbtn.addEventListener("click", handleNext);

function handleNext(){
  index++;
  if(index<arr.length)
  {
    showquestion();
  }
  else{
    showScore();
  }
}

function showScore(){
  queselement.innerHTML=`You scored ${score} out of ${arr.length}`
  answeroption.innerHTML = "";
  nextbtn.innerText = "Restart";
  nextbtn.onclick = startquiz;
}

let index=0
let score=0

function startquiz(){
  index=0
  score=0
nextbtn.innerHTML="Next"
showquestion()
}

function showquestion(){
  let obj=arr[index]
  let questionNo=index+1
  queselement.innerHTML=questionNo +"."+obj.question

  answeroption.innerHTML = "";
  obj.answers.forEach(answer=>{
    const button=document.createElement("button")
    button.innerHTML=answer.option
    button.classList.add("btns")
    button.dataset.correct = answer.correct
    button.addEventListener("click", handleSelect);
    answeroption.appendChild(button)
  })
}

function handleSelect(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    score++
    selectedBtn.style.backgroundColor = "green";
  } else {
    selectedBtn.style.backgroundColor = "red";
  }

 
  Array.from(answeroption.children).forEach(button => {
    button.disabled = true;

    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "green";
    }
  });
}


startquiz()





