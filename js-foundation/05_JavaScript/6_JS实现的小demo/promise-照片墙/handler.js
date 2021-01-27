// 消失
let disappear = (oImg) => {
    oImg.style.transform = "scale(0)";
    oImg.style.transition = "1s";
}

// 出现
let show = (oImg) => {
    oImg.style.transform = "scale(1)";
    oImg.style.transition = "1s";
    oImg.style.opacity = "0";
}

// 旋转
let rotate = (oImg) => {
    oImg.style.transform = "rotateY(-360deg) translateZ(0)";
    oImg.style.opacity = "1";
    oImg.style.transition = "2s";
}