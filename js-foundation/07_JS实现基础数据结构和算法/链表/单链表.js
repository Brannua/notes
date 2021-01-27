var LinkList = function () {
    // 初始化头结点
    // 因为每一个结点类型都是object
    // null属于object
    // 所以将头结点初始化为null比较合适
    var head = null;
    // 初始化链表长度
    var length = 0;
    // 定义构造节点的辅助构造函数
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    /* 
        实现append方法 
    */
    this.append = function (element) {
        /* 排除element为空的情况 */
        if (element) {
            // 创建结点
            var node = new Node(element);
            // 当链表为空(头结点为空链表就为空)
            if (head === null) {
                // 直接将现在这个唯一的结点设置为头结点
                head = node;
            } else { //如果链表不为空
                // 查找链表尾
                var current = head;
                while (current.next) {
                    current = current.next;
                }
                // 将链表尾节点的下一结点设置为创建好的node结点
                current.next = node;
            }
            // 链表长度加一
            length++;
        }

    }

    /* 
        查看构造好的链表头结点
    */
    this.getHead = function () {
        return head;
    }

    /* 
        查看构造好的链表长度(结点个数)
    */
    this.listLength = function () {
        return length;
    }

    /* 
        实现insert方法 
    */
    this.insert = function (position, element) {
        /* 
            首先剔除position的越界问题
        */
        if (position > -1 && position < length) {
            // 初始化创建要插入的结点
            var node = new Node(element);
            // 记录在position位置上的新结点的前一个结点和后一个结点
            var prevNode = null;
            var nextNode = null;
            //如果需要修改头结点
            if (position === 0) {
                // 将原来的头结点设置为新插入元素的后一个结点
                nextNode = head;
                // 将头结点设置为新结点
                head = node;
                // 关联新旧头结点
                head.next = nextNode;
            } else { //如果不需要修改头结点
                // 从链表头结点开始遍历查找所要插入的位置
                prevNode = head;
                nextNode = prevNode.next;
                // 链表下标从零开始,如果是在下标为1的地方插入新结点
                // 就不会进入接下来的for循环
                for (var index = 1; index < position; index++) {
                    // 当前结点保存为所要插入新结点的上一个结点
                    prevNode = prevNode.next;
                    // 所要插入新结点的下一个结点保存为当前结点
                    nextNode = prevNode.next;
                }
                // 插入新结点
                prevNode.next = node;
                node.next = nextNode;
            }
            length++;
        }
    }

    /* 
        实现removeAt方法
    */
    this.removeAt = function (position) {
        /* 首先判断传入的position是否越界 */
        if (position > -1 && position < length) {
            // 如果需要修改头结点
            if (position === 0) {
                // 删除指定position的结点
                head = head.next;
            } else { // 如果不需要修改头结点
                var currNode = head;
                var prevNode = null;
                // console.log("接下来循环 "+ position + " 次");
                for (var index = 0; index < position; index++) {
                    prevNode = currNode;
                    currNode = prevNode.next;
                    // console.log(prevNode, currNode);
                }
                // 删除指定position的结点
                prevNode.next = currNode.next;
                currNode.next = null;
            }
            length--;
            /* remove的概念理解为 => 拿出来一个结点来使用 */
            /* 所以要 return 出来 */
            return currNode;
        } else {
            return null;
        }
    }

    /* 
        实现indexOf(elem)方法
    */
    this.indexOf = function (elem) {
        var currNode = head;
        for (
            var index = 0; index < length && currNode && currNode.element !== elem; index++
        ) {
            currNode = currNode.next;
        }
        if (!currNode) {
            return -1;
        } else {
            return index;
        }
    }

    /* 
        实现remove(elem)方法
    */
    this.remove = function (elem) {
        // 注意this.removeAt()方法已经length--;
        return this.removeAt(this.indexOf(elem));
    }

    this.isEmpty = function () {
        return length === 0;
    }

    this.size = function () {
        return length;
    }
}