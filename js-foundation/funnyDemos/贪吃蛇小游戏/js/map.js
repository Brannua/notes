// 定义地图这个类
var Map = function (width, height) {
    this.width = width;
    this.height = height;
    this.id = 'map';
}

// 添加地图并设置样式
Map.prototype.showMap = function (containerId) {//传参数是因为要知道把创建好的地图插入到哪个元素中
   var mapDiv = document.createElement("div"); 
   mapDiv.style.width = this.width+'px';
   mapDiv.style.height = this.height+'px';
   mapDiv.className = this.id;
   mapDiv.id = this.id;
   //将创建的地图添加到页面中
   document.getElementById(containerId).appendChild(mapDiv);
}