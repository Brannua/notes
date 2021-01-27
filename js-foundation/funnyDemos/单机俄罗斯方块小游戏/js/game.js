    var Game = function () {
        // dom元素
        var gameDiv;
        var nextDiv;
        var timeDiv;
        var scoreDiv;
        var resultDiv;
        // 分数
        var score = 0;
        // 时间计数器
        var timeCount = 0;
        // 时间
        var time = 0;
        // 游戏矩阵
        var gameData = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        // 当前方块
        var cur;
        // 下一个方块
        var next;
        // divs
        var nextDivs = [];
        var gameDivs = [];
        // 定时器
        var timer = null;
        // 初始化div
        var initDiv = function (container, data, divs) {
            for (var i = 0; i < data.length; i++) {
                var div = [];
                for (var j = 0; j < data[0].length; j++) {
                    var newNode = document.createElement('div');
                    newNode.className = 'none';
                    newNode.style.top = (i * 20) + 'px';
                    newNode.style.left = (j * 20) + 'px';
                    container.appendChild(newNode);
                    div.push(newNode);
                }
                divs.push(div);
            }
        }
        // 刷新div
        var refreshDiv = function (data, divs) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[0].length; j++) {
                    if (data[i][j] == 0) {
                        divs[i][j].className = 'none';
                    } else if (data[i][j] == 1) {
                        divs[i][j].className = 'done';
                    } else if (data[i][j] == 2) {
                        divs[i][j].className = 'current';
                    }
                }
            }
        }
        // 监测点是否合法,加深理解！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
        var check = function (pos, x, y) {
            if (pos.x + x < 0) {
                return false;
            } else if (pos.x + x >= gameData.length) {
                return false;
            } else if (pos.y + y < 0) {
                return false;
            } else if (pos.y + y >= gameData[0].length) {
                return false;
            } else if (gameData[pos.x + x][pos.y + y] == 1) {
                return false;
            } else {
                return true;
            }
        }
        // 检测数据是否合法
        var isValid = function (pos, data) {
            for (var i = 0; i < data.length; i++) {
                for (j = 0; j < data[0].length; j++) {
                    if (data[i][j] != 0) {
                        if (!check(pos, i, j)) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        // 清除数据
        var clearData = function () {
            for (var i = 0; i < cur.data.length; i++) {
                for (var j = 0; j < cur.data[0].length; j++) {
                    if (check(cur.origin, i, j)) {
                        gameData[cur.origin.x + i][cur.origin.y + j] = 0;
                    }
                }
            }
        }
        // 设置数据
        var setData = function () {
            for (var i = 0; i < cur.data.length; i++) {
                for (var j = 0; j < cur.data[0].length; j++) {
                    if (check(cur.origin, i, j)) {
                        gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
                    }
                }
            }
        }
        // 下移
        var down = function () {
            if (cur.canDown(isValid)) {
                clearData();
                cur.down();
                setData();
                refreshDiv(gameData, gameDivs);
                return true;
            } else {
                return false;
            }
        }
        // 左移
        var left = function () {
            if (cur.canLeft(isValid)) {
                clearData();
                cur.left();
                setData();
                refreshDiv(gameData, gameDivs);
            }
        }
        // 右移
        var right = function () {
            if (cur.canRight(isValid)) {
                clearData();
                cur.right();
                setData();
                refreshDiv(gameData, gameDivs);
            }
        }
        // 旋转
        var rotate = function () {
            if (cur.canRotate(isValid)) {
                clearData();
                cur.rotate();
                setData();
                refreshDiv(gameData, gameDivs);
            }
        }
        // 方块移动到底部,给他初始化
        var fixed = function () {
            for (var i = 0; i < cur.data.length; i++) {
                for (j = 0; j < cur.data[0].length; j++) {
                    if (check(cur.origin, i, j)) {
                        if (gameData[cur.origin.x + i][cur.origin.y + j] == 2) {
                            gameData[cur.origin.x + i][cur.origin.y + j] = 1;
                        }
                    }
                }
            }
            refreshDiv(gameData, gameDivs);
        }
        // 消行
        var checkClear = function () {
            var line = 0;
            for (var i = gameData.length - 1; i >= 0; i--) {
                var clear = true;
                for (var j = 0; j < gameData[0].length; j++) {
                    if (gameData[i][j] != 1) {
                        clear = false;
                        break;
                    }
                }
                if (clear) {
                    line++;
                    for (var m = i; m > 0; m--) {
                        for (var n = 0; n < gameData[0].length; n++) {
                            gameData[m][n] = gameData[m - 1][n];
                        }
                    }
                    // 第一行变成0
                    for (var n = 0; n < gameData[0].length; n++) {
                        gameData[0][n] = 0;
                    }
                    i++;
                }
            }
            return line;
        }
        // 检查游戏是否结束
        var checkGameOver = function () {
            var gameOver = false;
            for (var i = 0; i < gameData[0].length; i++) {
                if (gameData[1][i] == 1) {
                    gameOver = true;
                }
            }
            return gameOver;
        }
        // 使用下一个方块
        var performNext = function (type, dir) {
            cur = next;
            setData();
            next = SquareFactory.prototype.make(type, dir);
            refreshDiv(gameData, gameDivs);
            refreshDiv(next.data, nextDivs);
        }
        // 设置时间
        var setTime = function (time) {
            timeDiv.innerHTML = time;
        }
        // 加分
        var addScore = function (line) {
            var s = 0;
            switch (line) {
                case 1:
                    s = 10;
                    break;
                case 2:
                    s = 30;
                    break;
                case 3:
                    s = 50;
                    break;
                case 4:
                    s = 100;
                    break;
                default:
                    break;
            }
            score += s;
            scoreDiv.innerHTML = score;
        }
        // 游戏结束
        var gameover = function (win) {
            if (win) {
                resultDiv.innerHTML = '你赢了'; //不可能赢的哈哈哈
            } else {
                resultDiv.innerHTML = '加油,刷新游戏再来一局！';
            }
        }
        // 底部增加行
        var addTailLines = function (lines) { // lines是一个二维数组
            for (var i = 0; i < gameData.length - lines.length; i++) {
                gameData[i] = gameData[i + lines.length];
            }
            for (var i = 0; i < lines.length; i++) {
                gameData[gameData.length - lines.length + i] = lines[i];
            }
            cur.origin.x = cur.origin.x - lines.length;
            if (cur.origin.x < 0) {
                cur.origin.x = 0;
            }
            refreshDiv(gameData, gameDivs);
        }
        // 初始化
        var init = function (doms, type, dir) {
            gameDiv = doms.gameDiv;
            nextDiv = doms.nextDiv;
            timeDiv = doms.timeDiv;
            scoreDiv = doms.scoreDiv;
            resultDiv = doms.resultDiv;
            initDiv(gameDiv, gameData, gameDivs);
            next = SquareFactory.prototype.make(type, dir);
            initDiv(nextDiv, next.data, nextDivs);
            refreshDiv(next.data, nextDivs);
        }
        // 计时函数
        var timeFunc = function () {
            timeCount = timeCount + 1;
            if (timeCount == 2) { // 500ms<==>timeCount+1
                timeCount = 0;
                time = time + 1;
                setTime(time);
            }
        }
        // 结束
        var stop = function () {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            document.onkeydown = null;
        }
        // 随机生成干扰行
        var generataBottomLine = function (lineNum) {
            var lines = [];
            for (var i = 0; i < lineNum; i++) {
                var line = [];
                for (var j = 0; j < 10; j++) {
                    line.push(Math.ceil(Math.random() * 2) - 1);
                }
                lines.push(line);
            }
            return lines;
        }
        // 移动
        var move = function () {
            if (checkGameOver()) {
                stop(); //如果游戏结束则终止游戏
            } else {
                timeFunc(); //如果游戏没有结束才调用计时函数
            }
            if (!down()) {
                fixed();
                var line = checkClear();
                if (line) {
                    addScore(line);
                    if (line > 1) { //如果消行大于1，则底部随机增加随机生成的1行
                        var bottomLines = generataBottomLine(1);
                        addTailLines(bottomLines);
                    }
                }
                var gameOver = checkGameOver();
                if (gameOver) {
                    gameover(false);
                    stop();
                } else {
                    var t = generateType(); //方块种类
                    var d = generateDir(); //旋转次数
                    performNext(t, d);
                }
            }
        }
        // 随机生成一个方块种类
        var generateType = function () {
            return Math.floor(Math.random() * 7)
        }
        // 随机生成一个旋转次数
        var generateDir = function () {
            return Math.floor(Math.random() * 4)
        }
        // 导出API
        this.stop = stop;
        this.generateDir = generateDir;
        this.generateType = generateType;
        this.move = move;
        // this.timeFunc = timeFunc;
        this.init = init;
        this.down = down;
        this.left = left;
        this.right = right;
        this.rotate = rotate;
        this.fall = function () {
            while (down()) {
                down();
            }
        }
        // this.fixed = fixed;
        this.performNext = performNext;
        // this.checkClear = checkClear;
        // this.checkGameOver = checkGameOver;
        // this.setTime = setTime;
        // this.addScore = addScore;
        // this.gameover = gameover;
        this.addTailLines = addTailLines;
        this.generataBottomLine = generataBottomLine;
    }