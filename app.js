const gameBoard = document.querySelector('#gameBoard');
const ctx = gameBoard.getContext('2d');
const scoreText = document.querySelector('#score');
const resetBtn = document.querySelector('#resetBtn');
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = 'white';
const snakeColor = "green";
const snakeBorder = "black";
const foodColor = "gold";
const unitSize = 30;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [ //каждый объект эта часть тела змеи
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
    running= true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};