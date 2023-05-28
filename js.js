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

    context.fill.style = "green";
    snake.cells.forEach(function(cell, index){
            context.fill.rect = (cell.X, cell.Y, grid-1, grid-1);
            if(cell.X === apple.X && cell.Y === apple.Y){
                snake.maxCells ++;
            }
            apple.X = getRandomInt(0,25) * grid;
            apple.Y = getRandomInt(0,25) * grid; 
        
        for (var i = index+1; i < snake.cells.lenght; i++ ){
            if(cell.X === snake.cell[i].X && cell.Y === snake.cell[i].y){
                snake.X= 160;
                snake.Y= 160;
                snake.dX= grid;
                snake.dY= 0;
                snake.cells=[];
                snake.maxCells= 4;
                apple.X= 320;
                apple.Y= 320;
            };
        };
    });
};
document.addEventListener("keydown", function(e){
    if(e.which  === 37 && snake.dX === 0){
        snake.dX = -grid, snake.dY = 0
    } else if(e.which  === 38 && snake.dY === 0){
        snake.dY = -grid, snake.dX = 0
    } else if(e.which  === 39 && snake.dX === 0){
        snake.dX = grid, snake.dY = 0
    } else if(e.which  === 40 && snake.dX === 0){
        snake.dX = 0, snake.dY = grid
    };
})
requestAnimationFrame(loop);
