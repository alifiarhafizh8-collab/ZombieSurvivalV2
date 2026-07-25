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
function drawPlayer() {
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
}

function drawBullets() {
    bullets.forEach((bullet, index) => {
        bullet.y -= bullet.speed;

        if (bullet.y < -20) {
            bullets.splice(index, 1);
            return;
        }

        ctx.drawImage(
            bulletImg,
            bullet.x,
            bullet.y,
            bullet.width,
            bullet.height
        );
    });
}

function drawZombies() {
    zombies.forEach((zombie, index) => {
        zombie.y += zombie.speed;

        if (zombie.y > canvas.height) {
            zombies.splice(index, 1);
            return;
        }

        ctx.drawImage(
            zombieImg,
            zombie.x,
            zombie.y,
            zombie.width,
            zombie.height
        );
    });
}
function checkCollision() {
    bullets.forEach((bullet, bIndex) => {
        zombies.forEach((zombie, zIndex) => {

            if (
                bullet.x < zombie.x + zombie.width &&
                bullet.x + bullet.width > zombie.x &&
                bullet.y < zombie.y + zombie.height &&
                bullet.y + bullet.height > zombie.y
            ) {

                bullets.splice(bIndex, 1);
                zombies.splice(zIndex, 1);

                score += 10;
                scoreText.textContent = score;
            }

        });
    });

    zombies.forEach((zombie) => {

        if (
            player.x < zombie.x + zombie.width &&
            player.x + player.width > zombie.x &&
            player.y < zombie.y + zombie.height &&
            player.y + player.height > zombie.y
        ) {

            player.hp--;

            hpText.textContent = player.hp;

            zombie.y = -50;

            if (player.hp <= 0) {
                alert("GAME OVER!\nScore: " + score);
                location.reload();
            }
        }

    });
}

function gameLoop() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(
        backgroundImg,
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawPlayer();
    drawBullets();
    drawZombies();

    checkCollision();

    requestAnimationFrame(gameLoop);
}

gameLoop();
