const quizForm = document.querySelector("#triangle-quiz-form");
const quizAnswerSubmitBtn = document.querySelector(".check-triangle-btn");
const outPutText = document.querySelector(".triangle-output-text");

const correctAnswers = ["equilateral", "a2", "pythagoras", "a4", "c5"];

const calculateScore = () => {
  let score = 0;
  let index = 0;

  const formResults = new FormData(quizForm);

  for (let answer of formResults.values()) {
    if (answer === correctAnswers[index]) {
      score++;
    }
    index++;
  }

  outPutText.innerText = `Score: ${score}`;
};

quizAnswerSubmitBtn.addEventListener("click", calculateScore);
