// 小方块宽高参数设置
var blockSize = 50;
// 将初始化创建的小方块对象缓存进一个数组,一次性渲染页面
var blockContainer = [];
// 游戏舞台
var wrapper = document.getElementsByClassName("wrapper")[0];
// 存放当前同色小方块
var linkedBlocks = [];

// 定制小方块的样式
function divStyle(div, i, j) {
    // 给当前小方块随机生成背景颜色的色号
    var randomBg = Math.floor(Math.random() * 5);
    // 记录小方块的初始化信息
    div.row = i;
    div.col = j;
    div.bg = randomBg;
    // 内联样式
    div.style.width = blockSize + 'px';
    div.style.height = blockSize + 'px';
    div.style.backgroundImage = "url(./img/" + randomBg + ".png)";
    div.style.boxSizing = "border-box";
    div.style.position = "absolute";
    div.style.display = "inline-block";
    div.style.left = div.col * 50 + 'px';
    div.style.bottom = div.row * 50 + 'px';
    div.style.transform = "scale(0.9)";
    div.style.backgroundSize = "cover";
    div.style.borderRadius = "14px";
}

// 将所创建的小方块渲染进页面
function allBlocksFill(blocks) {
    // 因为小方块相对于自己的父元素定位到页面上
    // 所以小方块和页面都必须得是可定位的
    // 由于小方块是div块级元素,需改成inline-block
    var len = blocks.length;
    for (var i = 0; i < len; i ++) {
        for (var j = 0; j < blocks[i].length; j ++){
            wrapper.appendChild(blocks[i][j]);
        }
    }
}

// 深度优先搜索检查临近同色小方块
function checkLinked(block) {
    // 因为后续有消除小方块的操作,当前小方块的坑位如果没有小方块了,就返回

    if(block == null) {
        return;
    }
    linkedBlocks.push(block);

    // 因为找出的同色小方块是为了后续的“ 闪烁,消除,加分 ”操作,
    // 因而全局中开辟一个数组存放当前的同色小方块
    // 存入同色小方块数组的判断条件
        // 在游戏桌面边界得做特殊判断
        // 临近小方块不能是null
        // 颜色相同(用色号判断)
        // 不能被其他的小方块选中过

    if (
            block.col != 0 
            && blockContainer[block.row][block.col - 1] != null 
            && block.bg == blockContainer[block.row][block.col - 1].bg 
            && linkedBlocks.indexOf(blockContainer[block.row][block.col - 1]) == -1
        ) {
            //向左深度优先遍历
            checkLinked(blockContainer[block.row][block.col - 1]);
        }
    if (
            block.col != 9 
            && blockContainer[block.row][block.col + 1] != null 
            && block.bg == blockContainer[block.row][block.col + 1].bg 
            && linkedBlocks.indexOf(blockContainer[block.row][block.col + 1]) == -1
        ) {
            //向右深度优先遍历
            checkLinked(blockContainer[block.row][block.col + 1]);
        }
    if (
            block.row != 9 
            && blockContainer[block.row + 1][block.col] != null 
            && block.bg == blockContainer[block.row + 1][block.col].bg 
            && linkedBlocks.indexOf(blockContainer[block.row + 1][block.col]) == -1
        ) {
            //向上深度优先遍历
            checkLinked(blockContainer[block.row + 1][block.col]);
        }
    if (
            block.row != 0 
            && blockContainer[block.row - 1][block.col] != null 
            && block.bg == blockContainer[block.row - 1][block.col].bg 
            && linkedBlocks.indexOf(blockContainer[block.row - 1][block.col]) == -1
        ) {
            //向左深度优先遍历
            checkLinked(blockContainer[block.row - 1][block.col]);
        }
}

// 获取闪烁scale变化值
var i = 1;
function gainTransfer() {
    var num = Math.pow(-1, i++);
    var transfer = 0.05 * num;
    return transfer;
}

// 闪烁
function bling(linkedBlockArr) {
    // console.log(linkedBlockArr);
    setInterval(function() {
        // 获取闪烁scale变化值
        var transFer = gainTransfer();
        console.log(transFer);

    }, 300);
}

// 初始化创建小方块方法
function init() {
    // 想要10*10=100个小方块
    for (var i = 0; i < 10; i++) { //控制小方块的行
        var blockLine = new Array();//每一行都是一个数组
        for (var j = 0; j < 10; j++) { //控制小方块的列
            var div = document.createElement('div');
            // 定制小方块的样式
            divStyle(div, i, j);
            blockLine.push(div);
            // 给每一个创建出来的小方块都绑定上鼠标移入事件
            div.onmouseover = function(){
                // 深度优先搜索临近同色小方块
                checkLinked(this);
                // console.log(linkedBlocks);
                bling(linkedBlocks);
            }
        }
        // 一行一行的push进小方块缓存区
        blockContainer.push(blockLine);
    }
    // 将所创建的小方块渲染进页面
    allBlocksFill(blockContainer);
}

// 游戏入口--页面一旦加载完成立即初始化
window.onload = function () {
    init();
}
