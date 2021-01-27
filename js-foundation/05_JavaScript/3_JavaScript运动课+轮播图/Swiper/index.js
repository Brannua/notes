/**
 * 注意自动轮播和点击按钮改变轮播装态这两部分的逻辑都需判断临界条件
 */
var timer = null,
    oSliderPage = document.getElementsByClassName('sliderPage')[0],
    moveWidth = oSliderPage.children[0].offsetWidth, //每次移动的距离
    num = oSliderPage.children.length - 1, //轮播的不同照片的数目

    leftBtn = document.getElementsByClassName('leftBtn')[0],
    rightBtn = document.getElementsByClassName('rightBtn')[0],
    lock = true, //程序初始化默认厕所是开门

    oSpanArr = document.getElementsByClassName('sliderIndex')[0].getElementsByTagName('span'), //精准获取span
    length = oSpanArr.length,
    index = 0, //默认展示第一张图

    nowDirection;

function autoMove(direction) {
    if (lock) { //厕所门是开着的
        lock = false; //进去并锁门
        if (!direction || direction == 'left->right') {
            /* 记录当前运动方向 */
            nowDirection = 'left->right';
            /* 判段是否为边界,是边界则定位(为了解决更改初始化时候的默认运动方向造成的bug) */
            if (oSliderPage.offsetLeft == -num * moveWidth) {
                oSliderPage.style.left = '0px';
            }
            chainMultiMove(oSliderPage, {
                left: oSliderPage.offsetLeft - moveWidth
            }, 30, function () {
                /* 判段是否为边界,是边界则定位 */
                if (oSliderPage.offsetLeft == -num * moveWidth) {
                    oSliderPage.style.left = '0px';
                }
                lock = true; //上完厕所再开门

                /* 同步小圆点active状态 */
                index++;
                if (index == num) {
                    index = 0;
                }
                changeSliderIndex(index);
            })
        } else if (direction == 'right->left') {
            /* 记录当前运动方向 */
            nowDirection = 'right->left';
            /* 判段是否为边界,是边界则定位(为了解决更改初始化时候的默认运动方向造成的bug) */
            if (oSliderPage.offsetLeft == 0) {
                oSliderPage.style.left = -num * moveWidth + 'px';
            }
            chainMultiMove(oSliderPage, {
                left: oSliderPage.offsetLeft + moveWidth
            }, 30, function () {
                /* 判段是否为边界,是边界则定位 */
                if (oSliderPage.offsetLeft == 0) {
                    oSliderPage.style.left = -num * moveWidth + 'px';
                }
                lock = true; //上完厕所再开门

                /* 同步小圆点active状态 */
                index--;
                if (index == -1) {
                    index = num - 1;
                }
                changeSliderIndex(index);
            })
        }
    }
}

timer = setInterval(() => {
    autoMove();
}, 2000)

leftBtn.onclick = function () {
    /* 解决定时器的争抢问题 */
    clearInterval(timer);
    /* 判段是否为边界,是边界则定位 */
    if (oSliderPage.offsetLeft == 0) {
        oSliderPage.style.left = -num * moveWidth + 'px';
    }
    /* 每点击一下触发一次移动 */
    autoMove('right->left');

    timer = setInterval(() => {
        autoMove('right->left');
    }, 2000);
}

rightBtn.onclick = function () {
    /* 解决定时器的争抢问题 */
    clearInterval(timer);
    /* 判段是否为边界,是边界则定位 */
    if (oSliderPage.offsetLeft == -num * moveWidth) {
        oSliderPage.style.left = '0px';
    }
    /* 每点击一下触发一次移动 */
    autoMove('left->right');

    timer = setInterval(() => {
        autoMove('left->right');
    }, 2000);
}

/**
 * @func {changeSliderIndex} 改变小圆点状态
 * @param {index} 当前小圆点索引
 */
function changeSliderIndex(index) {
    /* 先清除所有小圆点的状态 */
    for (var i = 0; i < length; i++) {
        oSpanArr[i].className = '';
    }
    /* 再更新小圆点状态 */
    oSpanArr[index].className = 'active';
}

/**
 * 给小圆点注册点击事件
 */
for (let i = 0; i < length; i++) {
    oSpanArr[i].onclick = function () {
        /* 更新当前index */
        index = i;
        /* 厕所上锁 */
        lock = false;
        clearInterval(timer);
        chainMultiMove(oSliderPage, {
            left: -i * moveWidth
        }, 30, function () {
            timer = setInterval(function () {
                /* 仍然按照之前的运动方向 */
                autoMove(nowDirection);
            }, 2000)
            /* 更新小圆点状态 */
            changeSliderIndex(i);
            /* 厕所开锁 */
            lock = true;
        })
    }
}

// -----------------------------------------------------------------
/**
 * 思考轮播图生成器
 */
/**
     HTMLDivElement.prototype.createTurnPage = function(oSpanArr){
         // 生成轮播图
    }
    oDiv.createTurnPage(['./1.jpg', './2.jpg', './3.jpg'])
 */