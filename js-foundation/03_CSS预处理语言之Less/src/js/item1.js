require('../less/item1.less');
var item1 = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        document.getElementsByClassName('item1')[0].onclick = this.changeColor;
    },
    changeColor: function () {
        this.style.background = 'black';
    }
}
module.exports = item1;