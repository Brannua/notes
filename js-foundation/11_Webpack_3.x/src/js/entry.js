// css模块
require('../css/entry.css');
// js模块
var tool = require('./tool');
tool.hello('module tool');
// image模块
var oImg = new Image();
oImg.src = require('../img/bg.png');
document.body.appendChild(oImg);



require('jquery');
console.log ($('#img'));