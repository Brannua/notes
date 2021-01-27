var oImg = document.createElement('img'),
    oCanvas = document.getElementById("canvas"),
    ctx = oCanvas.getContext("2d"),
    w = oCanvas.width,
    h = oCanvas.height,
    imageData,
    imageDataGauss;
oImg.src = "./img/person.jpg";
oImg.onload = function () {
    ctx.drawImage(oImg, 0, 0, w, h);
    imageData = ctx.getImageData(0, 0, w, h);
    imageDataGauss = gaussBlur(imageData);
    ctx.putImageData(imageDataGauss, 0, 0);
}