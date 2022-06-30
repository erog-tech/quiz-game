// Selects element by class
var timeEl = document.querySelector(".time");
var submitEl = document.querySelector(".submit");
var secondsLeft = 100;

function setTime() {
  // Sets interval in variable
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}


// setTime()


submitEl.addEventListner("click", setTime);
