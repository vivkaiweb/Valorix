const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 50, size: 30, color: "red" };

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
  clearCanvas();
  drawPlayer();
}

setInterval(gameLoop, 30);

document.addEventListener("keydown", (e) => {
  const step = 10;
  if (e.key === "ArrowUp") player.y -= step;
  if (e.key === "ArrowDown") player.y += step;
  if (e.key === "ArrowLeft") player.x -= step;
  if (e.key === "ArrowRight") player.x += step;
});
