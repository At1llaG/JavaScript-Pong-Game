import Ball from "./Ball.js"
import Paddle from "./Paddle.js"

const ball = new Ball(document.getElementById("ball"))
const paddle1 = new Paddle(document.getElementById("paddle1"))
const paddle2 = new Paddle(document.getElementById("paddle2"))
const score1Elem = document.getElementById("score1")
const score2Elem = document.getElementById("score2")

let lastTime
let gameMode = 0

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta, [paddle1.rect(), paddle2.rect()])
    paddle2.update(delta, ball.y)
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)
    //document.documentElement.style.setProperty("--hue2", hue + delta * 0.01)

    if (isLose()) handleLose()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

function startGame() {
  setEvents();
}

function setEvents() {
  $(document).on('keydown', function (e) {
      if (e.keyCode == 87 && CSS.stick1.top > 0) {
          CONSTS.stick1Speed = -10;
      }
  });

  $(document).on('keydown', function (e) {
      if (e.keyCode == 83 && CSS.stick1.top < CSS.arena.height - CSS.stick1.top) {
          CONSTS.stick1Speed = 10;
      }
  });

  $(document).on('keydown', function (e) {
      if (e.keyCode == 38) {
          CONSTS.stick2Speed = -10;
      }
  });

  $(document).on('keydown', function (e) {
      if (e.keyCode == 40) {
          CONSTS.stick2Speed = 10;
      }
  });

  $(document).on('keyup', function (e) {    
      CONSTS.stick1Speed = 0;    
      CONSTS.stick2Speed = 0;
  });
}


function isLose() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    score1Elem.textContent = parseInt(score1Elem.textContent) + 1
  } else {
    score2Elem.textContent = parseInt(score2Elem.textContent) + 1
  }
  ball.reset()
  paddle2.reset()

  if(score1Elem.textContent >= 5 || score2Elem.textContent >= 5) {
    console.log('game over');
  }
}

document.addEventListener("mousemove", e => {
  paddle1.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)

window.onload = function() {
  //alert('sup');
}

window.playerVsPlayer = function playerVsPlayer() {
  console.log('player vs player');
}

window.playerVsCpu = function playerVsCpu() {
  console.log('playerVsCpu');
}

window.cpuVsCpu = function cpuVsCpu() {
  console.log('cpuVsCpu');
}



