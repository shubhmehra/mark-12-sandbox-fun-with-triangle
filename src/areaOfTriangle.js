const baseValue = document.querySelector("#base");
const altitudeValue = document.querySelector("#altitude");
const checkAreaBtn = document.querySelector(".check-triangle-btn");
const outputArea = document.querySelector(".triangle-output-text");

const calculateArea = () => {
  let area = (Number(baseValue.value) * Number(altitudeValue.value)) / 2;

  if (isNaN(area)) {
    outputArea.innerText = "Enter valid value.";
    return;
  }

  outputArea.innerHTML = `Area of triangle for given values is: ${area} cm<sup>2<sup>`;
};

checkAreaBtn.addEventListener("click", calculateArea);
