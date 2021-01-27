var Person = function() {
    this.name = "zhansan",
    this.age = 20,
    this.sex = 'male',
    this.say = function() {
        console.log('nihao');
    }
}

module.exports = new Person();