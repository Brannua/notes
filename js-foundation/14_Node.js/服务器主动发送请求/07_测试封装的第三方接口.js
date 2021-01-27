const weather = require("./06_调用第三方接口的封装");

weather.queryCityCode('北京', (obj1) => {
    console.log(obj1);
    weather.queryWeather(obj1.retData.citycode, (obj2) => {
        console.log(obj2);
    });
});