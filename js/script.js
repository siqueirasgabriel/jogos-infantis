const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');


const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
var score = 0;

function atualizarScore() {
    var scoreElement = document.getElementById("scoreValue");
    scoreElement.textContent = score;
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/mario/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = "none";
        clouds.style.right = `${cloudsPosition}px`;

        document.querySelector('.game-over').style.display = 'block';


        clearInterval(intervalId);
        clearInterval(loop);
    }

    else {


        // Exemplo de incrementar o score
        score += 10;
        atualizarScore();
    }

}, 10);

document.addEventListener('keydown', jump);

