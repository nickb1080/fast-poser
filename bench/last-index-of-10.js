var fast = require('../lib');

var input = [1,2,3,4,5,6,7,8,9,10];


exports['Array::lastIndexOf()'] = function () {
  return input.lastIndexOf(9) + input.lastIndexOf(1);
};

exports['fast.lastIndexOf()'] = function () {
  return fast.lastIndexOf(input, 9) + fast.lastIndexOf(input, 1);
};

