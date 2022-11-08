const quizDB = [
   
    {
        // question: ["https:\/\/raw.githubusercontent.com\/mlimapch\/images\/master\/nyc01.jpg"],
        question: "/Users/mallikharjunaakula/Downloads/images.jpeg",
        A: "1982",
        B: "1984",
        C: "1985",
        D: "1986",
        ans: "ans3"
    },
    {
        question: "Q2: Which of the following represents the Finance Commissions that have been set-up so far?",
        A: "10",
        B: "11",
        C: "12",
        D: "13",
        ans: "ans4"
    },
    {
        question: "Q3: Which of the following is the largest and the deepest ocean in8 the world?",
        A: "the Arctic",
        B: "Atlantic",
        C: "Pacific",
        D: "Indian",
        ans: "ans3"
    },
    {
        question: "Q4: Harshcharita and KadamBari are the works of…..",
        A: "Kalhan",
        B: "Panini",
        C: "Bana Bhatta",
        D: "Patanjali",
        ans: "ans3"
    },
    {
        question: "Q5: Where is ‘Dudhsagar Waterfall’ in India?",
        A: "At the border of the Indian state of Goa and Karnataka",
        B: "in Karnataka",
        C: "in Gujarat",
        D: "in Rajasthan",
    }
    
];




const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

// const loadQuestion = () => {

//     const questionList = quizDB[questionCount]

//     question.innerText = questionList.question;

//     option1.innerText = questionList.A;
//     option2.innerText = questionList.B;
//     option3.innerText = questionList.C;
//     option4.innerText = questionList.D;

// }

// loadQuestion();

function loadQuestion(){
    var ques = document.getElementById("question");

    // Put images like this:
    // ques.innerHTML = `<img src='${}'>`; 
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
            <h3> you scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.href='file:///Users/mallikharjunaakula/Documents/assignment%204/quiz3.html' "> Round3</button>
        `;
        
         showScore.classList.remove('scoreArea');
    }


});

var countDownDate = new Date().getTime() + 8 * 60 * 1000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("showtime").innerHTML =
   minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("showtime").innerHTML = "EXPIRED";
  }
}, 1000);


