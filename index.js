let gameloop = new GameLoop();
let ball = new Ball();
let timer = 0;

window.onload = function() {
    //gameloop.start();
}

gameloop.init = function() {
    timer = 0;
    ball.init(gameloop.cnv);
}

gameloop.update = function() {
    timer++;
    //console.log(timer);
    ball.update(gameloop.cnv)
    if(timer > 120)
        gameloop.stop();
}

gameloop.render = function() {
    gameloop.ctx.fillStyle = '#1bafdb';
    gameloop.ctx.fillRect(0, 0, gameloop.cnv.width, gameloop.cnv.height);
    ball.render(gameloop.ctx);
}

gameloop.resize = function() {
    console.log('the game is resizing index.js');
}

window.onresize = function() {
    gameloop.onresize();
    ball.resize(gameloop.cnv)
}

// function startGame() {
//     //console.log('start game');
//     gameloop.start();
// }

function playerVsPlayer() {
    gameloop.start();
}

function playAgain() {
    gameloop.start();
}

function mainMenu() {
    gameloop.mainMenu();
}