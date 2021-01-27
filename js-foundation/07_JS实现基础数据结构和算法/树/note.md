# 树

    - 根节点 root
    - 内部的 Node 类

> HTML结构,电脑的文件系统结构... 就是典型的 **树** 结构

- 经典实例: 
    - 二叉搜索树 / 二叉排序树 ( Binary Search Tree )
        > 可以是空树 

        > 若左子树不空，则左子树上所有结点的值均小于它的根结点的值

        > 若右子树不空，则右子树上所有结点的值均大于它的根结点的值；

        > 左、右子树也分别为二叉排序树。

    - 树的操作

        - 添加结点 --- insert()

        - 删除结点 --- remove()

        - 查找结点 --- search()

        - 遍历二叉树 --- traverse()

    - 实现分析

        - 树结构的核心是一个个结点

        - 每个结点都包含了

            > 左侧子节点

            > 右侧子节点

            > 自己的值
        - 定义辅助类
        ```
        node = {
            value: 8,
            left: Node{},
            right: Node{}
        }
        ```
        - 算法实现的基本框架
        ```
        var Tree = function () {

            <!-- 根结点设置为内部私有变量 -->
            var root = null;

            <!-- 构造Node结点的内部实现内部私有 -->
            var Node = function (value) {
                this.value = value;
                this.left = null;
                this.right = null;
            }

            <!-- 对外部暴露接口函数 -->
            this.insert = function (value) {}
            this.search = function (value) {}
            this.remove = function (value) {}
            this.traverse = function (value) {}

        }
        ```
