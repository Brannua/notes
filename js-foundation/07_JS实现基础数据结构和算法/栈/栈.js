let Stack = function () {
    // 为了不让外部破坏栈的结构
    // 使用私有化变量items
    // this.items = [];为公有化变量
    let items = [];

    // 检查items
    this.getItems = function () {
        return items;
    }
    // 入栈
    this.push = function (elem) {
        items.push(elem);
    }
    // 出栈
    this.pop = function () {
        return items.pop();
    }
    // 查看栈顶元素
    this.peek = function () {
        return items[items.length - 1];
    }
    // 查看栈是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }
    // 清空栈
    this.clear = function () {
        items = [];
    }
    // 查看栈元素个数
    this.size = function () {
        return items.length;
    }
}

/* 
    栈之进制转换算法---余数法
    后进先出的数据结构
*/

function jinZhiZhuanHuan(number, jinzhi) {
    // 要转为的进制数
    var jinZhi = jinzhi;
    // 初始化栈结构
    var stack = new Stack();
    // 接收结果
    var result = "";
    // 后进
    while (number > 0) {
        // 余数
        var item = number % jinZhi;
        stack.push(item);
        // 商
        var number = Math.floor(number / jinZhi);
    }
    // 先出
    while (!stack.isEmpty()) {
        result = result + stack.pop() + " ";
    }
    // 返回结果
    return result;
}

console.log(jinZhiZhuanHuan(10, 2));



// --------------------------------------------------


// 利用arr.push()和arr.shift()模拟实现先进先出的队列结构
// 模拟排队抢购手机
var iphone = 5;//一共5台手机
//排队
var people = [];
for (var i = 0; i < 5; i ++) {
    people.push("买家" + (i+1));
    console.log(String(people));
}
people.push("你");
console.log(String(people));
console.log("----------------------------------");
// 排队抢购的过程
while(iphone>0) {
    var successPerson = people.shift();
    console.log(successPerson +"抢购成功");
    iphone--;
    console.log(String(people));
}
console.log(String(people)+"抢购失败");