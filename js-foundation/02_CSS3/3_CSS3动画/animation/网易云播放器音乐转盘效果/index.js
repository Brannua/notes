var flag = true;
btn.onclick = ()=>{
    if (flag) {
        zhen.className = "zhen active";
        pan.style.animationPlayState = "running";
        flag = false;
    } else {
        zhen.className = "zhen";
        pan.style.animationPlayState = "paused";
        flag = true;
    }
}