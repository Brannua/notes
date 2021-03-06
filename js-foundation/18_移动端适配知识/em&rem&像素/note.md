# 物理像素和设备独立像素笔记

- 一个物理像素是显示器( 手机屏幕 )上最小的物理显示单元,在操作系统的调度下,每一个设备像素都有自己的颜色值和亮度值

- 设备独立像素( 也叫目睹无关像素 ),可以认为是计算机坐标系统中的一个点,这个点代表一个可以由程序使用的虚拟像素( CSS像素 ),然后由相关系统转换为物理像素

- 设备像素比( dpr---device pixel ratio )定义了物理像素和设备独立像素的对应关系,它的值可以按如下的公式得到
> 设备像素比 = 物理像素 / 设备独立像素( js中可以通过window.devicePixelRatio )

- 对于dpr=2的,1个位图像素对应4个物理像素,由于单个位图像素不可以再进一步分割,所以只能就近取色,从而导致图片模糊
    - 解决办法是使用分辨率大两倍的图片
        > 如200*300img标签,就需要提供400*600的图片,由此一来位图像素点的个数是原来的4倍,在retina屏幕下,位图像素点就可以和物理像素点的个数形成1:1的比例,图片自然就清晰了

- 对于dpr=1的普通屏幕,如果使用了分辨率大两倍的图片,一个物理像素点就对应了4个位图像素点,它的取色也只能通过一定的算法( 显示结果就是一张只有原图像素总数四分之一,我们称这个过程为downsampling ),肉眼看上去图片不会模糊,但图片会缺少一些锐利度,或者是有点色差( 可以接受 )

-------------------------------------------------------------------

《移动端适配笔记》

        * css像素（逻辑像素、虚拟像素）

        * 移动端的分辨率是物理像素  设备出厂的时候就确定好了

        * 设备像素比(dpr)  =  物理像素  /  css像素


    - em:

        1.font-size值 相对于父字体大小值(google最小字体大小12px)
                
        2.如果设置width height大小的值，则是相对于自身字体的大小

    - rem:

        相对于根标签(html)的font-size值

    - 设计师的设计稿是物理像素:

                            > 一列的宽度 = 屏幕实际宽度 / 列数
            物理像素的前提下
                            > 元素实际占的列数  = 元素在设计稿里的宽度 / 一列的宽度



    - 举个例子: iphone5 -> 物理像素640 * 1136              css像素320 * 568       脑海中假设手机屏幕分为16列一列css像素为20px(html的font-size:20px;)
                        dpr = 2                     ->                   -> 
                        设计稿中物理像素为200px的元素     css像素100px          则该元素占五列即为5rem (> 元素适配的宽度 == 元素所占列数rem)
                            
    - 手机相关信息统计
        * https://mtj.baidu.com/data/mobile/device	
        * https://www.sven.de/dpi/
        * https://www.w3.org/TR/CSS2/syndata.html#length-units
