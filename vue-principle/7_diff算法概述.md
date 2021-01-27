# diff 算法概述

- 两个 js 对象可以做 diff，如 -> [jiff-github](https://github.com/cujojs/jiff)

- 两个 树 也可以做 diff，如 vnode 做 diff

![](https://s1.ax1x.com/2020/05/07/YZDg2T.png)

- 树的diff算法的时间复杂度为 O(n^3)，如何将时间复杂度优化为 O(n)

  - 只比较同一层级，不跨级比较

  - selector不相同，则直接删掉重建

  - selector 和 key，两者都相同，则认为是相同节点 ( snabbdom 中递归 patchVnode )
