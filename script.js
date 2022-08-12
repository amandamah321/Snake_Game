let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32
let snake = []
snake[0] = {
  x: 0 * box,
  y: 8 * box
}
let direct = 'right'

function criarBG() {
  context.fillStyle = 'lightblue'
  context.fillRect(0, 0, 16 * box, 16 * box)
}

function criarCobrinha() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = 'purple'
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}

function IniciarJogo() {
  criarBG()
  criarCobrinha()
}

let jogo = setInterval(IniciarJogo, 100)

criarBG()
criarCobrinha()
