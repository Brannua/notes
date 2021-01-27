const btn = document.getElementById('btn');
const imgs = document.querySelectorAll("img");
const length = imgs.length;
let num = 0;

btn.onclick = function () {
    for (let i = 0; i < length; i++) {
        trans(imgs[i]);
    }
}

let trans = (oImg) => {
    return new Promise((resolve) => {
            const delayTime = Math.random() * 1000;
            setTimeout(() => {
                disappear(oImg); //消失
                resolve();
            }, delayTime);
        })
        .then(() => {
            return new Promise((resolve) => {
                let test = () => {
                    show(oImg);
                    oImg.removeEventListener('transitionend', test, false)
                    resolve();
                }
                oImg.addEventListener('transitionend', test, false);
            });
        })
        .then(() => {
            return new Promise((res) => {
                let test = () => {
                    num++;
                    oImg.removeEventListener('transitionend', test, false);
                    if (num == 50) {
                        num = 0;
                        res();
                    }
                }
                oImg.addEventListener('transitionend', test, false)
            });
        })
        .then(() => {
            return new Promise((res) => {
                let test = () => {
                    num++;
                    this.removeEventListener('transitionend', test, false);
                    if (num == 50) {
                        num = 0;
                        res();
                    }
                }
                for (let i = 0; i < length; i++) {
                    let randomDepth = Math.random() * 500;
                    imgs[i].style.transform = 'rotateY(0deg) translateZ(-' + randomDepth + 'px)';
                    imgs[i].style.opacity = "0";
                    imgs[i].style.transition = "1ms";
                    imgs[i].addEventListener('transitionend', test, false);
                }
            })
        })
        .then(() => {
            for (let i = 0; i < length; i ++) {
                rotate(imgs[i]);
            }
        })
}
