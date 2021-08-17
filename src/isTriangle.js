//Triangle
const anglesInput = document.querySelectorAll(".angles");
const checkTriangleBtn = document.querySelector(".check-triangle-btn");
const triangleOutput = document.querySelector(".triangle-output-text");

const checkTriangle = () => {
  var sumOfAngles = calculateSumOfAngles(
    anglesInput[0].value,
    anglesInput[1].value,
    anglesInput[2].value
  );

  if (sumOfAngles === 180) {
    triangleOutput.innerText = "Yeah!.. These angles can make a triangle.";
  } else {
    triangleOutput.innerText = "No!.. These angles cannot make a triangle.";
  }
};

const calculateSumOfAngles = (angle1, angle2, angle3) => {
  return Number(angle1) + Number(angle2) + Number(angle3);
};

checkTriangleBtn.addEventListener("click", checkTriangle);
