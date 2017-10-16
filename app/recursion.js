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
    if (n == 0)
        return [""];

    var result = [];
    for (var i = 0; i < n; ++i) {

        var lefts = exports.recursionAnswers.validParentheses(i);
        var rights = exports.recursionAnswers.validParentheses(n - i - 1);

        for (var l = 0; l < lefts.length; l++)
            for (var r = 0; r < rights.length; r++)
                result.push("(" + lefts[l] + ")" + rights[r]);
    }

    return result;
  }
};
