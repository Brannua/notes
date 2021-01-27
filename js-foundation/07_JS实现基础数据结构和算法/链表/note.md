# 链表

- 链表就像一列火车
    - 每一节车厢(node)不仅携带自己的乘客(item),还要与下一节车厢(next)相连
    - 火车头(链表头)
    - 火车尾(链表尾)

- 链表操作
    - 插入元素 --- insert(position, element)
    - 尾部添加元素 --- append(element)
    - 获取元素索引 --- indexOf(element)
    - 从链表中移除一项 --- remove(element)
    - 从链表的特定位置移除一项 --- removeAt(position)
        > indexOf(element)

        > remove(element)

        > removeAt(position)

            - 代码复用
                - 思考上述三个API之间的关系
                - indexOf(element) + removeAt(position) = remove(element)
                - remove()方法不用写了!!!

- 双向链表
    - 和链表的区别是: 双向链表带有上一个元素的连接(previous)

- 双向循环链表
    - 不仅双向,而且链表尾部指向链表头