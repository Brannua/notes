function Calculate(a, b) {
    this.a = a;
    this.b = b;
}

Calculate.prototype.add = function () {
    return this.a + this.b;
}
Calculate.prototype.abstract = function () {
    return this.a - this.b;
}
Calculate.prototype.multiply = function () {
    return this.a * this.b;
}
Calculate.prototype.divide = function () {
    return this.a / this.b;
}


// 通过exports添加的方法可以通过module.exports得到
exports.say = function() {console.log("test");}
// console.log(module.exports);
// 但是如果对module.exports重新赋值就会重新开辟一块堆内存空间
// 这时候module.exports和exports指向的就不是同一块内存了
module.exports = Calculate;
// console.log(module.exports);