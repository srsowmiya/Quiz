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
  question: "What is the chemical symbol for gold?",
  answers: [
    { option: "Au", correct: true },
    { option: "Ag", correct: false },
    { option: "Gd", correct: false },
    { option: "Go", correct: false }
  ]
},
{
  question: "Who developed the theory of general relativity?",
  answers: [
    { option: "Isaac Newton", correct: false },
    { option: "Nikola Tesla", correct: false },
    { option: "Albert Einstein", correct: true },
    { option: "Galileo Galilei", correct: false }
  ]
},
{
  question: "Which organ is responsible for filtering blood in the human body?",
  answers: [
    { option: "Lungs", correct: false },
    { option: "Heart", correct: false },
    { option: "Kidneys", correct: true },
    { option: "Liver", correct: false }
  ]
},
{
  question: "Which planet rotates on its side?",
  answers: [
    { option: "Jupiter", correct: false },
    { option: "Mars", correct: false },
    { option: "Uranus", correct: true },
    { option: "Neptune", correct: false }
  ]
},
{
  question: "What is the hardest natural substance on Earth?",
  answers: [
    { option: "Iron", correct: false },
    { option: "Gold", correct: false },
    { option: "Diamond", correct: true },
    { option: "Quartz", correct: false }
  ]
}
,
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
  question: "What is the hardest natural substance on Earth?",
  answers: [
    { option: "Iron", correct: false },
    { option: "Gold", correct: false },
    { option: "Diamond", correct: true },
    { option: "Quartz", correct: false }
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
  question: "What is the smallest prime number?",
  answers: [
    { option: "0", correct: false },
    { option: "1", correct: false },
    { option: "2", correct: true },
    { option: "3", correct: false }
  ]
},
{
  question: "Who painted the Mona Lisa?",
  answers: [
    { option: "Vincent van Gogh", correct: false },
    { option: "Pablo Picasso", correct: false },
    { option: "Leonardo da Vinci", correct: true },
    { option: "Michelangelo", correct: false }
  ]
},
{
  question: "Which language is used to create websites?",
  answers: [
    { option: "HTML", correct: true },
    { option: "MS Word", correct: false },
    { option: "Photoshop", correct: false },
    { option: "Excel", correct: false }
  ]
},
{
  question: "Which planet has the most moons?",
  answers: [
    { option: "Earth", correct: false },
    { option: "Mars", correct: false },
    { option: "Saturn", correct: true },
    { option: "Venus", correct: false }
  ]
},
{
  question: "Which gas do humans exhale?",
  answers: [
    { option: "Oxygen", correct: false },
    { option: "Carbon Dioxide", correct: true },
    { option: "Hydrogen", correct: false },
    { option: "Nitrogen", correct: false }
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





