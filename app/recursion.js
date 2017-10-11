exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    if (n <= 2) {
      return 1;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);
  },

  validParentheses: function(n) {

  }
};
