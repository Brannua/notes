var db = connect('myDB');
var userList = db.user.find();
userList.forEach(user=>{
    printjson(user);
});