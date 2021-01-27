require('../less/item2.less');
var item2 = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function() {
        document.getElementsByClassName('item2')[0].onclick = this.changeSize;
    },
    changeSize: function() {
        this.style.width = '500px';
        this.style.height = '500px';
    }
}
module.exports = item2;