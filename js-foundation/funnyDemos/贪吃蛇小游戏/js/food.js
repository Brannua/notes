// 定义食物这个类
var Food = function (map) {
    this.map = map; //食物在哪个地图投放
    this.size = 10; //食物大小
    // 食物的坐标
    this.xFood = 0;
    this.yFood = 0;
    // 食物的坐标
    this.foodDiv = null; //地图中的食物
}

Food.prototype.showFood = function () {
    // 此处判断确保地图中只有一个食物
    if (this.foodDiv === null) {
        // 创建食物并设置样式
        this.foodDiv = document.createElement("div");
        this.foodDiv.style.width = this.foodDiv.style.height = this.size + 'px';
        this.foodDiv.style.backgroundColor = 'red';
        this.foodDiv.style.position = 'absolute'; //尝试一下为什么用相对定位不行！！！！！！！！！
        // 将食物添加到地图上
        document.getElementById(this.map.id).appendChild(this.foodDiv);
    }
    // 计算出食物坐标
    this.xFood = Math.floor((this.map.width / this.size) * Math.random());
    this.yFood = Math.floor((this.map.height / this.size) * Math.random());
    // 将食物设置在地图上
    this.foodDiv.style.left = this.xFood * this.size + 'px';
    this.foodDiv.style.top = this.yFood * this.size + 'px';
}