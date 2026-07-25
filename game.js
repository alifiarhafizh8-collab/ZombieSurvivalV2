const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const hpText = document.getElementById("hp");
const scoreText = document.getElementById("score");

const playerImg = new Image();
playerImg.src = "assets/player.png";

const zombieImg = new Image();
zombieImg.src = "assets/zombie.png";

const backgroundImg = new Image();
backgroundImg.src = "assets/background.png";

const bulletImg = new Image();
bulletImg.src = "assets/bullet.png";

const medkitImg = new Image();
medkitImg.src = "assets/medkit.png";

const player = {
    x: 160,
    y: 520,
    width: 40,
    height: 40,
    speed: 10,
    hp: 100
};

let score = 0;

const bullets = [];
const zombies = [];

const left = document.getElementById("left");
const right = document.getElementById("right");
const up = document.getElementById("up");
const down = document.getElementById("down");
const attack = document.getElementById("attack");
