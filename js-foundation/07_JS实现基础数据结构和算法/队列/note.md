# 队列 ( quequ )
- 一种先进先出 ( FIFO ) 的数据结构
- 队列的操作
    - 入列 ( enqueue )
    - 出列 ( dequeue )
    - 查看队列头 ( front )
    - 检查队列是否为空 ( isEmpty )
    - 获取队列长度 ( size )
- 构造函数(类)封装队列操作
    ```
    var Queue = function(){

       var items = []; 

       this.enqueue = function(){
           ...
       };
       this.dequeue = function(){
           ...
       };
       this.front = function(){
           ...
       };
       this.isEmpty = function(){
           ...
       };
       this.size = function(){
           ...
       };
       
    }
    ```
- 实例
    - 循环队列之击鼓传花
    - 优先队列和辅助构造函数