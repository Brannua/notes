var user1 = {
    name: "xiaoliu",
    age: 20,
    hobby: ['敲代码', '听歌', '锻炼'],
    pc: {
        brand: 'ASUS',
        price: 4000
    }
};
var user2 = {
    name: "xiaowang",
    age: 25,
    hobby: ['敲代码', '聊天', '篮球'],
    pc: {
        brand: 'IBM',
        price: 8000
    }
};
var user3 = {
    name: "xiaozhao",
    age: 30,
    hobby: ['敲代码', '喝茶', '吃鸡'],
    pc: {
        brand: 'Apple',
        price: 10000
    }
};

var db = connect('myDB');
db.user.insert([user1, user2, user3]);
print('insert 3 data success');

// db.user.update({name:"xiaoliu"}, {
//     name: "xiaoliu",
//     age: 18,
//     hobby: ['敲代码', '听歌', '锻炼'],
//     pc: {
//         brand: 'ASUS',
//         price: 4000
//     }
// })