var Tree = function () {
    // 根节点(私有)
    var root = null;
    // 结点的构造的实现(私有)
    var Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /* 根结点不为空时做的插入结点操作 */
    var insertNode = function (root, newNode) {
        if (newNode.value < root.value) {
            if(root.left === null){
                root.left = newNode;
            } else {
                insertNode(root.left, newNode);
            }
        } else if (newNode.value > root.value) {
            if(root.right === null){
                root.right = newNode;
            } else {
                insertNode(root.right, newNode);
            }
        }
    }
    this.insert = function (value) {
        // 排除value为空的情况
        if (value) {
            var newNode = Node(value);
            // 如果二叉树为空树直接放置根结点
            if (root === null) {
                root = newNode;
            } else {
                insertNode(root, newNode);
            }
        } else {
            console.log("你没有传入新结点的值,插入结点失败");
        }
    }
    /* 搜索结点 */
    this.search = function (value) {}
    /* 遍历结点 */
    this.traverse = function (value) {}
    /* 删除结点 */
    this.remove = function (value) {}

}