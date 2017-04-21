var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var x = 250;
var y = 250;
var mouseX = 250;
var mouseY = 250;
var velocity = 2;
var foodPositions = [[30, 10], [400, 90], [60, 317], [300, 268], [118, 262], [713, 860], [1365, 858], [524, 1440], [199, 1070], [1002, 744], [355, 668], [679, 445]];

function drawCircle(circleX, circleY, radius) {
context.beginPath();
context.arc(circleX, circleY, radius, 0, 2*3.14159);
context.fillStyle = "crimson";
context.fill();
}

function clearCanvas() {
    context.beginPath;
    context.rect(0, 0, 500, 500);
    context.fillStyle = "white";
    context.fill();
}

function calculatePosition() {
  // For the x-axis
  if (mouseX > x) {
    x = x + velocity;  // mouse is to the right of the ball
  } else {
    x = x - velocity;  // mouse is to the left of the ball
  }

  // For the y-axis
  if (mouseY > y) {
    y = y + velocity;  // mouse is under ball
  } else {
    y = y - velocity;  // mouse is above ball
  }
}

function drawScreen() {
  clearCanvas();
  calculatePosition();
  drawCircle(x, y, 40);
  drawCircle(foodPositions[0][0], foodPositions[0][1], 10);
  drawCircle(foodPositions[1][0], foodPositions[1][1], 10);
  drawCircle(foodPositions[2][0], foodPositions[2][1], 10);
  drawCircle(foodPositions[3][0], foodPositions[3][1], 10);
  drawCircle(foodPositions[7][3], foodPositions[6][4], 10);
  drawCircle(foodPositions[2][6], foodPositions[8][3], 10);
  drawCircle(foodPositions[8][6], foodPositions[7][4], 10);
  drawCircle(foodPositions[4][5], foodPositions[3][5], 10);
  setTimeout(drawScreen, 1000/60);
}

function mouseMoved(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

canvas.addEventListener("mousemove", mouseMoved);
drawScreen();
