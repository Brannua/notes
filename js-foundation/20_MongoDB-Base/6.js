var startTime = new Date().getTime();
var db = connect('myDB');

var result = db.tel.find({tel: '15681785791'});
result.forEach(item=>{
    printjson(item);
});

var runTime = new Date().getTime() - startTime;
print('run time is ' + runTime + 'ms');