let string = "";
let height;
let weight;
let bmi;
const onSubmit = () => {
  height = document.getElementById("height").value;
  weight = document.getElementById("weight").value;
  if ((height == "") | (weight == "")) {
    document.getElementById("com").innerHTML =
      "You can'not Leave the Input Fields Empty";
  } else {
    bmi = weight / ((height / 100) ^ 2);
    bmi = bmi.toFixed(2);

    document.getElementById("bmi").innerHTML = "BMI = " + bmi;
    if (bmi < 18.5) {
      document.getElementById("com").innerHTML =
        "You are Under Weight Eat Healthy";
    } else if (bmi > 18 && bmi < 25) {
      document.getElementById("com").innerHTML =
        " Your are Healthy Just Maintain Weight";
    } else if (bmi > 25 && bmi < 30) {
      document.getElementById("com").innerHTML =
        " Your are over weigth Start Exercise and Eat Less";
    } else if (bmi > 30) {
      document.getElementById("com").innerHTML =
        " You are Fat as Hell Go for Run Mother F**cker";
    }
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
  }
};
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater
