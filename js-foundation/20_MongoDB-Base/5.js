
function getTel() {
    var prefixArr = ['156', '132', '179', '132', '133'];
    var tel = prefixArr[Math.floor(Math.random() * 5)];
    for (var i = 0; i < 8; i++) {
        tel += Math.floor(Math.random() * 10);
    }
    return tel;
}

var startTime = new Date().getTime();
var db = connect('myDB');
var tempInfo = [];
var i = 1000000;
while(i--){
    tempInfo.push({
        logintime: new Date().getTime(),
        tel: getTel()
    });
}
db.tel.insert(tempInfo);
var runTime = new Date().getTime() - startTime;
print("run time is " + runTime + "ms");