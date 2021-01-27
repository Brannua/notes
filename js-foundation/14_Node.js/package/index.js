var Ocalculate = require('./calculate.js');

exports.calculate = function () {
    var sum = Ocalculate.sum(1, 2);
    var abs = Ocalculate.abstract(1, 2);
    var mul = Ocalculate.multiply(1, 2);
    var div = Ocalculate.divide(1, 2);
    console.log(sum, abs, mul, div);
}