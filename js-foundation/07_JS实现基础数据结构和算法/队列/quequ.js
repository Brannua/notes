/* 
    使用数组实现队列结构

   队列头          对列尾
    [0,   1, 2, 3,   4];

*/

// 构造函数(类)封装队列操作
let Queue = function () {
    let items = [];

    // 入列操作
    this.enQueue = function (elem) {
        items.push(elem);
    }

    // 出列操作
    this.deQueue = function () {
        return items.shift();
    }

    // 查看队列头
    this.front = function () {
        return items[0];
    }

    // 检查队列是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }

    // 检查队列的长度
    this.size = function () {
        return items.length;
    }

}

/*  
    应用实例---《循环队列之击鼓传花》

    场景描述
        几个人围成一圈,
        从其中一个人开始传递花花
        每传递三次，将拿花人踢出圈圈
        最后剩下人的为赢家
    (循环队列思想)
        拿花者始终为数组第一位数
*/
// 玩家列表
let names = ['a', 'b', 'c', 'd', 'e', 'f'];
// 游戏规则
let number = 3;

let chuanhua = function (names, number) {
    // 初始化队列
    let queue = new Queue();
    for (let i = 0; i < names.length; i++) {
        queue.enQueue(names[i]);
    }
    // 当队列多于一个元素时
    while (queue.size() > 1) {
        // 先循环number-1遍
        for (let i = 0; i < number - 1; i++) {
            queue.enQueue(queue.deQueue());
        }
        // 再出列一个
        queue.deQueue();
    }
    // 最后说出赢家
    console.log("赢家是", queue.deQueue());
}

/* 
    优先队列和辅助构造函数
        排队登机 => VIP优先登机 => 高级VIP更优先
        优先队列(priorityQueue)
            --> 考虑队列中每一个元素的优先级
            --> 利用arr.splice(index,num,newElem);
*/

// 构造函数
let PriorityQueue = function () {
    let queue = [];

    // 辅助构造函数
    let QueueItem = function (elem, priority) {
        this.name = elem;
        this.priority = priority;
    }
    // 按优先级入队列操作
    this.enQueue = function (elem, priority) {
        let queueItem = new QueueItem(elem, priority);
        let added = false;
        for (let i = 0; i < queue.length; i++) {
            if(queueItem.priority > queue[i].priority){
                queue.splice(i, 0, queueItem);
                added = true;
                break;
            }
        }
        if(!added){
            queue.push(queueItem);
        }
    }
    // 获取构造好的优先队列
    this.getQueue = function () {
        return queue;
    }
}
// 测试优先队列
let priorityQueue = new PriorityQueue();
priorityQueue.enQueue('xiaohei', 1);
priorityQueue.enQueue('xiaobai', 2);
priorityQueue.enQueue('xiaohong', 5);
priorityQueue.enQueue('xiaolan', 4);
priorityQueue.enQueue('xiaofen', 3);
console.log(priorityQueue.getQueue());