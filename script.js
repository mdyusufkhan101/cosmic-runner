const rocket = document.getElementById("rocket");
const fuelMeter = document.getElementById("fuel-meter");
const initialPosition = rocket.style.bottom;

let fuel = 100;
let distance = 0;
let maxHeight = 0;

function launchRocket() {
  if (fuel > 0) {
    fuel--;
    distance++;
    maxHeight = Math.max(maxHeight, distance);
    rocket.style.bottom = `${distance}px`;
    fuelMeter.style.width = `${fuel}%`;
    requestAnimationFrame(launchRocket);
  } else {
    alert(`Game over! Your score is ${maxHeight} meters.`);
    resetRocket();
  }
}

function resetRocket() {
  fuel = 100;
  distance = 0;
  rocket.style.bottom = initialPosition;
  fuelMeter.style.width = "100%";
}

rocket.addEventListener("click", launchRocket);
