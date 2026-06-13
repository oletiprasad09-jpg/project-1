let steps = 0;
let calories = 0;
let water = 0;

function addSteps() {
  steps += 500;
  document.getElementById("steps").innerText = steps;
}

function addCalories() {
  calories += 50;
  document.getElementById("calories").innerText = calories;
}

function addWater() {
  water += 1;
  document.getElementById("water").innerText = water + " L";
}