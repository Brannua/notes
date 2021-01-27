var s = require('./sum.js');
var abs = require('./abstract.js');
var mul = require('./multiply.js');
var di = require('./divide.js');

module.exports = {
    sum: s.sum,
    abstract: abs.abstract,
    multiply: mul.multiply,
    divide: di.divide
}