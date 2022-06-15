const button = document.querySelector("#button");

button.addEventListener("click", calcBMI(weight, height));

function calcBMI() {
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  const calcBmi = weight / (height / 100) ** 2;

  printBMI(calcBmi);
}

function printBMI(calcBmi) {
  const BMI = document.querySelector("#bmi");
  const yourBMI = document.querySelector("#yourBmi");
  console.log(typeof calcBmi);
  if (!isNaN(calcBmi)) {
    BMI.style.display = "block";
    yourBMI.textContent = Math.floor(calcBmi);
  } else {
    BMI.style.display = "block";
    yourBMI.textContent = "Fehler! Bitte gib deine Daten ein :)";
  }
}
