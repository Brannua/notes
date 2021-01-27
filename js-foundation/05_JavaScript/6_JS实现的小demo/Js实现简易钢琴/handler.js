let lis, //所有的钢琴键
    length, //钢琴键的个数
    ctx, //音频上下文
    osc, //音频振荡器
    gain, //音量控制对象
    //按照第一国际音高,从低音1,到高音7的频率(未包含小数)
    sounds = [130, 147, 165, 175, 196, 220, 246, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988, 1047],
    loud, //音量
    pretty, //音色
    sound; //音高


// 初始化获取元素
function getNodes() {
    lis = document.querySelectorAll('li');
    length = lis.length;
}

// 创建音频上下文
function init() {
    //若音频上下文已经创建则直接返回
    if (ctx) {
        return;
    }
    ctx = new AudioContext(); //创建音频上下文
}

// 发出声音
function makeSound() {
    osc = ctx.createOscillator(); //创建震荡器,默认正弦波,中音区440
    gainNode = ctx.createGain(); //创建音量控制器
    osc.connect(gainNode); //将振荡器连接到音量控制器
    gainNode.connect(ctx.destination); //将音量控制器连接到上下文的默认扬声器
    gainNode.value = loud; //设置音量
    osc.type = pretty; //设置音色(默认正弦波)
    osc.frequency.value = sound; //设置音高(默认440)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1)
    osc.start(); //播放声音
    osc.stop(ctx.currentTime + 1);
}

// 设置钢琴按键对应的声音
function editSound(e) {
    //获取要发声音的钢琴键自定义下标
    var index = e.dataset.index;
    // 获取要发的音高,单位(hz)
    sound = sounds[index];
    // 设置要发的音量
    loud = 0.2;
    // 设置要发的音色
    pretty = 'sine';
}

// 给每个li绑定事件
function eachLiAddEvent() {
    for (let i = 0; i < length; i++) {
        lis[i].onmousedown = function () {
            // 敲击按键变色
            this.style.backgroundColor = "#eee";
            // 创建音频上下文
            init();
            // 设置钢琴按键对应的声音
            editSound(this);
            // 发出声音
            makeSound();
        }
        lis[i].onmouseup = function () {
            // 敲击按键变色
            this.style.backgroundColor = "#fff";
        }
    }
}
