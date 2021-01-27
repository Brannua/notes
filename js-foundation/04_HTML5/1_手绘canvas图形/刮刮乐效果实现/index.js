var oCanvas = document.getElementById("canvas"),
    ctx = oCanvas.getContext("2d"),
    w = oCanvas.width,
    h = oCanvas.height,
    x,
    y;
/**
 * 绘制涂层
*/
ctx.beginPath();
ctx.fillStyle = "#aaa";
ctx.fillRect(0, 0, w, h);

oCanvas.onmousedown = function () {
    oCanvas.onmousemove = function (e) {
        x = e.offsetX;
        y = e.offsetY;

        ctx.globalCompositeOperation = "destination-out";// 消除涂层的关键句

        /**
         * 绘制线条
        */
        ctx.beginPath();
        ctx.lineWidth = 40;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();

    }
    oCanvas.onmouseup = function () {
        oCanvas.onmousemove = null;
    }
}