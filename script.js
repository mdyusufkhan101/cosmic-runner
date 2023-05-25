const rocket = document.getElementById("player");
const fuelMeter = document.getElementById("fuel-meter");
const initialPosition = rocket.style.bottom;
const gameContainer = document.getElementById('container');

let fuel = 100;
let distance = 0;
let maxHeight = 0;

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
gameContainer.style.width = `${screenWidth}px`;
gameContainer.style.height = `${screenHeight}px`;


function launchRocket() {
  if (fuel > 0) {
    fuel -= 0.1;
    distance++;
    maxHeight = Math.max(maxHeight, distance);

    const xyz = 10 / 100 * screenHeight;
    const fef = screenHeight - xyz;
    const fffa = screenHeight / 2;

    var topDistance = fef - distance;
    if (topDistance <= fffa) {
      rocket.style.top = `${fffa}px`
      startScroll();
    } else {
      rocket.style.top = `${topDistance}px`
    }
    fuelMeter.style.width = `${fuel}%`;
    let score = Math.round(maxHeight/10);
    document.getElementById("score-number").innerHTML = `${score}`;
    requestAnimationFrame(launchRocket);
  } else {
    maxHeight = maxHeight / 10;
    alert(`Game over! Your score is ${maxHeight} meters.`);
    let highScore = localStorage.getItem("highScore");
    if (maxHeight > highScore) {
      localStorage.setItem("highScore", maxHeight);
      alert("New High Score " + maxHeight + " !!");
    }
    resetRocket();
  }
}

function resetRocket() {
  // fuel = 100;
  // distance = 0;
  // rocket.style.bottom = initialPosition;
  // fuelMeter.style.width = "100%";
  window.location.reload();
}

rocket.addEventListener("click", launchRocket);



function startScroll() {
  for (let i = 0; i < 1; i++) {
    var styles = `
  @keyframes scroll {
    from {
        background-position: 0 -600px;
    }

    to {
        background-position: 0px 0px;
    }
  }
  `

    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
  }


}

