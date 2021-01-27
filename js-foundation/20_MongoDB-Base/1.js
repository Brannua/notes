var user = "lpj";
var time = Date.parse(new Date());
var data = {
    "username":user,
    "registTime":time
}

var db = connect('myDB');
db.user.insert(data);
print('insert success');