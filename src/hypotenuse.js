const baseValue = document.querySelector("#base");
const altitudeValue = document.querySelector("#altitude");
const checkHypotenuse = document.querySelector(".check-triangle-btn");
const output = document.querySelector(".triangle-output-text");

const calculateHypotenuse = () => {
  let hypotenuse = Math.sqrt(
    Math.pow(Number(baseValue.value), 2) +
      Math.pow(Number(altitudeValue.value), 2)
  );

  if (isNaN(hypotenuse)) {
    output.innerText = "Enter valid value!";
    return;
  }
  output.innerText = `Hypotenuse = ${hypotenuse}`;
};

checkHypotenuse.addEventListener("click", calculateHypotenuse);
