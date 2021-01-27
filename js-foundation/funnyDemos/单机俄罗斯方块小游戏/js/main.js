$(function () {
    // 游戏对象
    var game;
    // 时间间隔
    var INTERVAL = 500;

    // 游戏开始
    var start = function () {
        var doms = {
            gameDiv: document.getElementById('local_game'), //游戏区
            nextDiv: document.getElementById('local_next'), //下一个方块
            timeDiv: document.getElementById('local_time'), //用时区域
            scoreDiv: document.getElementById('local_score'), //游戏得分
            resultDiv: document.getElementById('gameover') //游戏结束语
        }
        // 绑定键盘事件(pc端也能玩))
        document.onkeydown = function (e) {
            if (e.keyCode == 38) { // up-rotate
                game.rotate();
            } else if (e.keyCode == 39) { // right
                game.right();
            } else if (e.keyCode == 40) { // down
                game.down();
            } else if (e.keyCode == 37) { // left
                game.left();
            } else if (e.keyCode == 32) { // space
                game.fall();
            }
        }

        // 初始化
        game = new Game();
        // 现进行缓存
        var type = game.generateType();
        var dir = game.generateDir();
        var t = game.generateType();
        var d = game.generateDir();
        game.init(doms, type, dir);
        game.performNext(t, d);
        timer = setInterval(game.move, INTERVAL);
        // 初始化

        // 绑定触摸事件
        $('#btn_1').on('click', function () {
            game.rotate();
        });
        $('#btn_2').on('click', function () {
            game.down();
        });
        $('#btn_3').on('click', function () {
            game.left();
        });
        $('#btn_4').on('click', function () {
            game.right();
        });
        $('#btn_5').on('click', function () {
            game.fall();
        });
    }
    start();
});