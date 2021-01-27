var main = $('#main'),
    go = $('#go'),
    mask = $('#mask'),
    wrapper = $('.wrapper'),
    color = 'black',
    timer,
    speed = 3,
    num = 0,
    flag = true,
    colors = ['#f00', '#0f0', '#00f', '#ff0'];

function cDiv() {
    var oDiv = $('<div></div>');
    var index = Math.floor(Math.random() * 4);
    oDiv.attr('class', 'row');
    for (var i = 0; i < 4; i++) {
        var iDiv = $('<div></div>');
        oDiv.append(iDiv);
    }
    if (main.children().length == 0) {
        main.append(oDiv);
    } else {
        oDiv.insertBefore(main.children()[0]);
    }
    var clickDiv = oDiv.children()[index];
    $(clickDiv).css('backgroundColor', colors[index]).attr('class', 'i');
}

function move() {
    clearInterval(timer);
    timer = setInterval(function () {
        var step = parseInt(main.css('top')) + speed;
        main.css('top', step + 'px');
        if (parseInt(main.css('top')) >= 0) {
            cDiv();
            main.css({
                'top': '-150px'
            });
        }
        var len = main.children().length;
        if (len == 6) {
            for (var i = 0; i < len; i++) {
                if ($(main.children()[len - 1].children[i]).hasClass('i')) {
                    mask.html(num + '分' + '-again');
                    mask.css('display', 'block');
                    clearInterval(timer);
                    flag = false;
                    mask.on('click', function () {
                        mask.css('display', 'none');
                        window.location.reload();
                    });
                }
            }
            $(main.children()[len - 1]).remove();
        }
    }, 20);
    bindEvent();
}

function bindEvent() {
    main.on('click', function (e) {
        if (flag) {
            var tar = e.target;
            if (tar.className == 'i') {
                var index = Math.floor(Math.random() * 4);
                $(tar).css('backgroundColor', 'black').css('opacity', 0.6).removeClass();
                num++;
            } else {
                mask.html(num + '分' + '-again');
                mask.css('display', 'block');
                clearInterval(timer);
                flag = false;
                mask.on('click', function () {
                    mask.css('display', 'none');
                    window.location.reload();
                });
            }
            if (num % 10 == 0) {
                speed++;
                // 切换图片
                // var number = Math.floor(Math.random()*12);
                // wrapper.css('background', 'url(./img/timg'+number+'.jpg)');
                // wrapper.css('background-size', 'cover');
                // wrapper.css('background-repeat', 'no-repeat');
            }
        }
    })
}

function clickStart() {
    var start = $('a');
    start.on('click', function () {
        start.css('display', 'none');
        move();
    })
}
clickStart();