exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    str = num.toString(2);
    return parseInt(str[str.length - bit]);
  },

  base10: function(str) {
    return parseInt(parseInt(str, 2).toString(10));
  },

  convertToBinary: function(num) {
    return (num.toString(2).length < 8) ? '0' + num.toString(2) : num.toString(2);
  },

  multiply: function(a, b) {
    return Math.round(a * b * 100000)/100000;
  }
};
