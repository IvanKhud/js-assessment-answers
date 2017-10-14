exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
    return parseInt(parseInt(str, 2).toString(10));
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
    return Math.round(a * b * 100000)/100000;
  }
};
