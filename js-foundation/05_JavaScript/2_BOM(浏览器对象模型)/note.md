# 笔记

## BOM

- BOM是browser object model的缩写,简称浏览器对象模型,主要处理浏览器窗口和框架,描述了与浏览器进行交互的方法和接口,可以对浏览器窗口进行访问和操作,譬如可以弹出新的窗口,回退历史记录,获取url...

## BOM 和 DOM 的关系

- javascript是通过访问BOM对象来访问,控制,修改浏览器
- BOM 的window包含了document,因此通过window对象的document属性就可以访问,检索,修改文档内容与结构
- document对象又是DOM模型的根节点
- 因此,BOM包含了DOM,浏览器提供出来给予访问的是BOM对象,从BOM对象再访问到DOM对象,从而js可以操作浏览器以及浏览器读取到的文档

## BOM对象包含以下内容

- Window Javascript层级中的顶层对象,表示浏览器窗口
- Navigator 包含客户端浏览器的信息
- History 包含了浏览器窗口访问过的url
- Location 包含了当前URL的信息
- Screen 包含了客户端显示屏的信息

## Windwow对象

- window对象表示一个浏览器窗口或一个框架,在客户端Javascript中,window对象是全局对象,所有的表达式都要在当前的环境中计算,也就是说,要引用当前窗口,根本不需要特殊的语法,就可以把那个窗口的属性作为全局变量来使用,例如,可以只写document,而不必写window.documet

## Navigator 对象

- 包含的属性描述了正在使用的浏览器,可以使用这些属性进行平台专用的配置,虽然这个对象的名称显而易见的是Netscape的Navigator浏览器,但是其他实现了Javascript的浏览器也支持这个对象

## History 对象

- 包含用户( 在浏览器窗口中 )访问过的url

## Location 对象

- 包含有关当前url的信息

## Screen对象

- 包含有关客户端显示屏幕的信息,每个Window对象的screen属性都引用一个Screen对象
- Screen对象中存放着有关显示浏览器屏幕的信息
- Javascript程序将利用这些信息来优化他们的输出,以达到用户的显示要求
- 例如: 一个程序可以根据显示器的尺寸选择用大图像还是用小图像,还可以根据显示器的颜色深度选择使用16位色还是使用8位色的图形,另外,Javascript程序还能根据有关屏幕尺寸的信息将新的浏览器窗口定位在屏幕中间

## 文档
- https://www.w3school.com.cn/js/js_window.asp