function calcBMI() {
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  const calcBmi = Math.floor(weight / (height / 100) ** 2);
  // Item Anlegen
  const userBmi = localStorage.getItem("YourBMI");
  localStorage.setItem("YourBMI", calcBmi);
  printBMI(calcBmi, userBmi);
}

function printBMI(calcBmi, userBmi) {
  const BMI = document.querySelector("#bmi");
  const yourBMI = document.querySelector("#yourBmi");
  // Item abfragen
  BMI.style.display = "block";
  console.log(typeof calcBmi, userBmi);
  if (!isNaN(calcBmi)) {
    yourBMI.textContent = calcBmi;
    if (calcBmi != userBmi) {
      yourBMI.textContent = `last BMI: ${calcBmi} | new BMI: ${userBmi}`;
    }
  } else {
    yourBMI.textContent = "Fehler! Bitte gib deine Daten ein :)";
  }
}
