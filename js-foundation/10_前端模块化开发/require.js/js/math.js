define(['myLib'], function (myLib) {
    function add(a, b) {
        return a + b;
    }
    return {
        add: add,
        a: myLib.a
    }
})