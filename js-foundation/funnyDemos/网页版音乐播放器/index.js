// $(() => {
var lrcObjArr = []; //存放解析后的歌词对象数组
var isPlaying = false; //定位到156行
// ajax请求
var get = function (url, data, callback) { //url和data实现了方法的可定制性,因为url在变，data也在变，callback是对结果的处理方式
    var xhr = new XMLHttpRequest();
    var param = '?';
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            param += key + '=' + data[key];
        }
    }

    xhr.open('GET', url + param, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            if (callback) {
                callback(JSON.parse(xhr.response));
            }
        }
    }
}

// 封装获取音乐id的方法
var search = function (keywords, callback) {
    get('http://localhost:3000/search', {
        keywords: keywords
    }, function (res) {
        if (callback) {
            callback(res.result.songs);
        }
    })
}

//将歌曲列表填充到界面上
var resultList = document.getElementById('result-list');
var fillSongsList = function (objArr) {
    var tpl = '<li class="songs" data-id="{id}"><h2>{name}</h2>' +
        '<h5><span>{artist}</span>' +
        ' - 专辑:<span>{zhuanji}</span></h5><hr></li>';
    var html = '';
    for (var i = 0; i < objArr.length; i++) {
        html += tpl.replace('{name}', objArr[i].name)
            .replace('{artist}', objArr[i].artists[0].name)
            .replace('{zhuanji}', objArr[i].album.name).replace('{id}', objArr[i].id);
    }
    resultList.innerHTML = html;
    openSearchList();
}

// 歌曲列表下拉
var searchList = document.getElementsByClassName('search-list')[0];
var openSearchList = function () {
    searchList.className = 'search-list active';
}




// 点击放歌(初始化，合上列表，获取歌词解析歌词并渲染，放歌的同时歌词滚动)
var reset = function () { //初始化
    clearInterval(0);
    isPlaying = false;
    lrcObjArr = [];
    index = 0;
    marginTop = 210;
}
var closeSearchList = function () {
    searchList.className = 'search-list';
}

// 封装通过音乐id获取音乐url的方法
var getSongsUrl = function (id, callback) {
    get('http://localhost:3000/song/url', {
        id: id
    }, function (res) {
        if (callback) {
            callback(res.data[0].url);
        }
    });
}

// 封装获取歌词的方法
var getLrc = function (id, callback) {
    get('http://localhost:3000/lyric', {
        id: id
    }, function (res) {
        var lyric = res.lrc.lyric;
        if (callback) {
            callback(lyric);
        }
    });
}

// 时间转换函数
var parseTime = function (timeString) {
    var timeStringArr = timeString.split(':');
    var min = parseInt(timeStringArr[0]);
    var s = parseFloat(timeStringArr[1]);
    var totalTime = (min * 60 + s) * 1000;
    return totalTime;
}

// 解析歌词
var parseLrc = function (lyric) {
    var lrcArr = []; //存放歌词每一行的数组
    lrcArr = lyric.split('\n');
    for (var i = 0; i < lrcArr.length; i++) {
        var lines = lrcArr[i].split(']');
        var time = lines[0].slice(1, lines[0].length);
        var content = lines[1];
        time = parseTime(time);
        // 错误的处理，如果歌词为空则跳过这一行
        if (isNaN(time) || content == undefined) continue;
        lrcObjArr.push({
            time: time,
            content: content
        });
    }
    lrcItems = document.getElementsByClassName('lrc-item');
    return lrcObjArr;
}

// 歌词填充到页面上
var tpl = '<li class="lrc-item">{lrc}</li>';
var lrcWrap = document.getElementById('lrc-wrap');
var html = '';
var fillLrc = function (lrcObjArr) {
    html = "";
    for (var i = 0; i < lrcObjArr.length; i++) {
        html += tpl.replace('{lrc}', lrcObjArr[i].content);
    }
    lrcWrap.innerHTML = html;
    audio.play();
    // changeImage();
}

// 歌词滚动
var marginTop = 240;
var index = 0; //正在播放哪一条歌词
var lrcItems = null;
var compareLrc = function (lrcObjArr) {
    // 在html中获取全部歌词
    // 对比时间，确定哪一条歌词正在播放
    if (Math.abs(lrcObjArr[index].time - audio.currentTime * 1000) <= 300) {
        lrcItems[index].style.color = 'red';
        lrcItems[index].style.fontSize = 2 + 'em';
        if (index > 0) {
            lrcItems[index - 1].style.color = '#000000cc';
            lrcItems[index - 1].style.fontSize = 24 + 'px';
            marginTop -= 40;
            lrcWrap.style.marginTop = marginTop + 'px';
        }
        index++;
    }
}
audio.addEventListener('timeupdate', function () {
    if (isPlaying == true) {
        compareLrc(lrcObjArr); //播放器时间更新的时候才进行对比歌词，以实现歌词滚动效果
    }
})




// 触发搜索的两种方式，回车和点击搜索
var searchButton = document.getElementById('search-button');
var keywordInput = document.getElementById('keyword');
searchButton.addEventListener('click', function () {
    var value = keywordInput.value;
    search(value, function (res) {
        // 渲染出搜索结果列表后给歌曲增加点击事件
        fillSongsList(res);
        addEventListener();
    });
})
document.onkeydown = function (e) {
    var value = keywordInput.value;
    if (e.keyCode == "13") {
        search(value, function (res) {
            // 渲染出搜索结果列表后给歌曲增加点击事件
            fillSongsList(res);
            addEventListener();
        });
    }
}
document.addEventListener('click', function () {
    closeSearchList();
});

// 给歌曲增加点击事件
var addEventListener = function () {
    var songs = document.getElementsByClassName('songs'); //拿到歌曲列表li数组进行循环遍历绑定点击事件
    for (var i = 0; i < songs.length; i++) {
        songs[i].addEventListener('click', function () {
            $(this).attr('style','color:green').siblings().attr('style','color:black');
            reset();
            var id = this.getAttribute('data-id');
            getSongsUrl(id, function (url) {
                alert(url);
                audio.src = url;
                closeSearchList();
                // 获取歌词
                getLrc(id, function (lrc) {
                    var lrc3 = parseLrc(lrc);
                    fillLrc(lrc3); //解析歌词，解析完毕后渲染到页面上
                    // changeImage();
                    isPlaying = true;
                });
            });
            getPicUrl(id,(url)=>{
                // console.log(url);
                $imgs.attr("style", "background-image:url("+ url +");");
            })
        });
    }
}

// 实现背景图片轮播(不采纳此功能，以当前所播放歌曲封面图作为当前背景图)
let $imgs = $('body');
function changeImage() {
    let dex = 1;
    window.setInterval(() => {
        $imgs.attr("style", "background-image:url(imgs/" + dex + ".jpg)");
        dex++;
        if (dex == 4) dex = 1;
    }, 2000)
}

// 实现按钮的点击暂停事件
let $btn = $('.btn')
$btn.on('click', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        $btn[0].innerHTML = "播放";
    } else {
        audio.play();
        isPlaying = true;
        $btn[0].innerHTML = "暂停";
    }
})

// 获取歌曲封面图url
var getPicUrl = function (id, callback) {
    get('http://localhost:3000/song/detail', {
        ids: id
    }, function (res) {
        if (callback) {
            callback(res.songs[0].al.picUrl);
        }
    });
}

//键入关键词获取音乐url
var getMusicUrl = function (keywords,callback) {
    search(keywords,function(res){
        var id = res[0].id;
        getSongsUrl(id,function(res){
            if(callback){
                callback(res);
            }
        })
    })
}
// });