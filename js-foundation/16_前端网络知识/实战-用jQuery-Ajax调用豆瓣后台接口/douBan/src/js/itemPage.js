$(() => {
    $.ajax({
        type: 'GET',
        url: "https://api.douban.com/v2/music/1396380/",
        dataType: 'jsonp',
        success: cb
    })

    function cb(data) {
        console.log(data);
    }
})