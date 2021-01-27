# flex

> 弹性盒子( 主轴 --> 默认为x轴方向; 交叉轴 --> 默认为y轴方向 )
        
> flex为符合属性,且必须配合父元素display: flex;使用
        
- 以下6个属性设置在子元素上:
    - flex-grow: 放大比例
    - flex-shrink: 缩小比例
    - flex-basis: 伸缩基准值
    - flex: 是flex-grow,flex-shrink,flex-basis的简写
    - order: 排列顺序
    - align-self: 单个项目对齐方式

```
flex: [flex-grow][flex-shrink][flex-basis]
flex: 1; <==> flex: 1 1 0%;
flex: 3; <==> flex: 3 1 0%;
```

>注意: flexbox布局和原来的布局是两个概念,部分css属性在flexbox盒子里面不起作用( eg: flot,clear,column,vertical-align等等 )

- 以下6个属性设置在容器上
    - flex-direction 决定主轴的方向
    - flex-wrap 是否换行
    - flex-flow 前两个的简写
    - justify-content 项目在主轴上的对齐方式
    - align-items 在侧轴上如何对齐
    - align-content 多根轴线上的对齐方式