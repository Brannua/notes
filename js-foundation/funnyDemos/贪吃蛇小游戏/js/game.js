// 定义游戏这个类
var Game = function () {};
// 游戏初始化
// 使用原型链是因为可以继承属性
Game.prototype.start = function () {
    var map = new Map(270, 400); //长宽必须是2的整数倍
    map.showMap('container');

    var food = new Food(map);
    food.showFood();

    var snake = new Snake(food);
    snake.showSnake();

    timer = setInterval(function () {
        snake.move();
    }, 100);

    // 键盘控制
    document.onkeydown = function (e) {
        // 每次都判断一下🐍当前的移动方向，如果是180度折返则不起作用
        switch (e.keyCode) {
            case 37:
                if (snake.direction == 'right') {
                    break;
                }
                snake.direction = 'left';
                break;
            case 38:
                if (snake.direction == 'down') {
                    break;
                }
                snake.direction = 'up';
                break;
            case 39:
                if (snake.direction == 'left') {
                    break;
                }
                snake.direction = 'right';
                break;
            case 40:
                if (snake.direction == 'up') {
                    break;
                }
                snake.direction = 'down';
                break;
        }
        snake.showSnake(); //这里为什么要show一下???
    }
    $('#up').on('click', function () {
        if (snake.direction == 'down') {
            return;
        }
        snake.direction = 'up';
    });
    $('#down').on('click', function () {
        if (snake.direction == 'up') {
            return;
        }
        snake.direction = 'down';
    });
    $('#left').on('click', function () {
        if (snake.direction == 'right') {
            return;
        }
        snake.direction = 'left';
    });
    $('#right').on('click', function () {
        if (snake.direction == 'left') {
            return;
        }
        snake.direction = 'right';
    });
}