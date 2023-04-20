
const quizData = [
    {
      question: "Who founded Kids&co?",
      answers: ["David Stevenson","Ken Adams","Will Smith","Jake Stern"],
      correctAnswer: "David Stevenson",
      feedback: "Correct! David Stevenson is the founder of Kids&co."
    },
    {
      question: "what year was the company founded?",
      answers: ["1933","1969","2004","1999"],
      correctAnswer: "1969",
      feedback: "Correct! The company was founded in 1969."
    },
    {
      question: "How many stores do we have?",
      answers: ["100","80","35","22"],
      correctAnswer: "22",
      feedback: "Correct! Kids&co has 22 stores."
    },
    {
      question: "how many collections do we show per year?",
      answers: ["1","2","3","4"],
      correctAnswer: "3",
      feedback: "Correct! We show 3 collection every year.."
    },
    {
      question: "what do we sell?",
      answers: ["Womenswear","Home Decor","Kitchen tools","Kidswear"],
      correctAnswer: "Kidswear",
      feedback: "Correct! we sell kidswear."
    }
  ];
  
  const questionContainer = document.querySelector("#question-container");
  const scoreContainer = document.querySelector("#score-container");
  const feedbackContainer = document.querySelector("#feedback-container");
  
  let currentQuestionIndex = 0;
  let score = 0;

  function init(){
    // showQuestion();
    showStart();
    // AOS.init();
  }
 

function showStart(){
  questionContainer.innerHTML = '<button class="btn btn-dark text-light fw-bold" id="id_start" onclick="showQuestion()"> Start Playing </button>';
}
  
  function showQuestion() {
    scoreContainer.innerHTML ="";
    questionContainer.classList.remove("center");
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = '';    
    questionContainer.innerHTML += '<h2 class="" data-aos="zoom-in" data-aos-duration="3000">' + currentQuestion.question + '</h2>';
    questionContainer.style.textAlign="center";
    questionContainer.innerHTML += '<div class="answers d-flex justify-content-between">';
    for (let i = 0; i < currentQuestion.answers.length; i++) {
      questionContainer.innerHTML += '<button data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000" class="btn btn-outline-secondary px-1 px-md-3 my-5 mx-1 mx-md-3 fw-bold" id=id_answer' +i +' onclick="checkAnswer(\'' + currentQuestion.answers[i] +"','" + i + '\')">' + currentQuestion.answers[i] + '</button>';
    }
    questionContainer.innerHTML += '</div>';
  }
  
  function checkAnswer(answer , chosenAnswerIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    let chosenAnswerHtml = questionContainer.querySelector(`#id_answer${chosenAnswerIndex}`);
 
    //disabling buttons
    for (let i=0; i<quizData[currentQuestionIndex].answers.length;i++){
      questionContainer.querySelector(`#id_answer${i}`).disabled="true";
    }

    if (answer === currentQuestion.correctAnswer) {
      chosenAnswerHtml.style.backgroundColor ="green";
      score++;
      feedbackContainer.innerHTML = '<p data-aos="zoom-in-up" data-aos-duration="1000" class="feedback-correct">' + currentQuestion.feedback + '</p>';
    } else {
      chosenAnswerHtml.style.backgroundColor ="red";
      feedbackContainer.innerHTML = '<p data-aos="zoom-in-up" data-aos-duration="1000" class="feedback-incorrect">Sorry, the correct answer was ' + currentQuestion.correctAnswer + '.</p>';
    }
    
    setTimeout(()=> {
      feedbackContainer.innerHTML="";},3000);

    if (currentQuestionIndex >= quizData.length-1) {
      setTimeout(()=> {
        showScore();},3000);
    }else {
      currentQuestionIndex++;
      setTimeout(()=> {
        showQuestion();},3000);
    }
  }
  
  function showScore() {
    questionContainer.innerHTML = '';
    // nextButton.style.display = 'none';
    scoreContainer.classList.remove("d-none");
    scoreContainer.innerHTML = '<h2 data-aos="zoom-in" data-aos-duration="3000" class="display-3">Your score: ' + (score*20) + '/' + (quizData.length*20) + '</h2>';
    currentQuestionIndex=0;
    questionContainer.innerHTML += '<button data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="3000" class="btn btn-dark text-light fw-bold" id="id_start" onclick="showQuestion()"> Start Playing Again </button>';
  }
  
  init();
 
  