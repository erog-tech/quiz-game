// Selects element by class
var timeEl = document.querySelector(".time");
var submitEl = document.querySelector(".submit");
var secondsLeft = 2;
var quiz = document.querySelector(".quiz1");
var clearQuiz = document.querySelector(".card");
var comment = document.querySelector("msg");

function saveName() {
    var name = {
        comment: comment.ariaValueMax.trim()
    };
    localStorage.setItem("name", JSON.stringify(saveName))
}

function setTime() {
  // Sets interval in variable
  
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left for game over";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      
      gameOver();
    }
  }, 1000);
}
function setQuiz(event) {
    clearQuiz.textContent = ""
    event.preventDefault();
    
        } 

function gameOver() {
    localStorage.etite
    let response = 
    quiz.textContent = response;
}

    
// setTime()
submitEl.addEventListener("click", setTime);
// submitEl.addEventListener("click", setQuiz);
window.onclick = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {
          'What is Canada\'s national animal?' : ['Beaver', 'Duck', 'Horse', 0],
          
          'What is converted into alcohol during brewing?' : ['Grain', 'Sugar' , 'Water', 1],
          
          'In what year was Prince Andrew born? ' : ['1955', '1960', '1970', 1]
        };
    
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is sams as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.
      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          addChecker(false);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionArea.innerHTML = 'Done';
          answerArea.innerHTML = '';
        }
                                
      };
    }
    
    function addChecker(bool) {
    // This function adds a div element to the page
    // Used to see if it was correct or false
    
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    
    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);
    
  };