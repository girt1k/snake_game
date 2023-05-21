var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var grid = 16;
var count = 0;
var snake = {
    X: 160,
    Y: 160,
    dX: grid,
    dY: 0,
    cells:[],
    maxCells: 4
}

var apple = {
    X: 320,
    Y: 320
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min
};

function loop(){
    requestAnimationFrame(loop);
    if(++count < 4){
        return;
    };
    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    snake.X += snake.dX;
    snake.Y += snake.dY;
    if(snake.X < 0){
        snake.X = canvas.width - grid;
    }else if(snake.X >= canvas.width){
        snake.X = 0;
    };
    if(snake.Y < 0){
        snake.Y = canvas.height - grid;
    }else if(snake.Y >= canvas.height){
        snake.Y = 0
    };

    snake.cells.unshift({
        X: snake.X,
        Y: snake.Y
    })
    if(snake.cells.length > snake.maxCells){
        snake.cells.pop;
    };
    context.fill.style = "red";
    context.fill.rect = (apple.X, apple.Y, grid-1, grid-1);
};


