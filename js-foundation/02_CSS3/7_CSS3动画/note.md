# 相关属性介绍

- transform-style: flat|preserve-3d
    - flat( 默认 ),子元素将不保留其3D位置
    - preserve-3d,子元素将保留其3D位置
    > 注意,transform-style属性需要设置在父元素上
    
    > 设置了transform-style: preserve-3d的元素,就不能使用overflow: hidden;

- perspective( 景深 ), 默认值是none

- perspective-origin( 视觉中心点 ): 默认值是50% 50%

- 在3D变形中,除了perspective属性可以激活一个3D空间之外,在3D变形的函数中的perspective()也可以激活3D空间,他们不同的地方是
    - perspective用在舞台元素上( 变形元素们的共同父元素 )
    - perspective()就是用在当前变形元素上,并且可以与其他的transform函数一起使用
    > 注意, 当有多个变形元素时,第一种只有一个透视点,第二种每一个变形元素都有一个透视点

    > 3d变化是二人转: 元素在转, 坐标轴也在转

- backface-visibility: visible|hidden( 在元素运动过程中,能否展示元素的背面 )

# CSS3动画性能优化

- 1. 尽可能多的利用硬件能力,如使用3D变形来开启GPU加速
    > 3d变形会消耗更多的内存和功耗,确实有性能问题才使用它,重在权衡
    - 三个参数分别代表xyz三个方向
        ```
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        ```
    - rotate3d(1, 2, 3, 90deg);
        - 前三个参数为矢量,分别代表xyz三个方向分轴的长度,计算合轴,绕合轴旋转第四个参数的角度

> 注意,如果动画过程有闪烁( 通常发生在动画开始的时候 ),可以尝试下面的hack
```
-webkit-backface-visibility: hidden;
-moz-backface-visibility: hidden;
-ms-backface-visibility: hidden;
backface-visibility: hidden;
-webkit-perspective: 1000;
-moz-perspective: 1000;
-ms-perspective: 1000;
perspective: 1000;
```

- 2. 尽可能少使用shadow( 阴影 )与gradients( 渐变 ),这俩都是页面性能杀手

- 3. 尽可能让动画元素不在文档流中,以减少重排

- 4. 优化DOM reflow