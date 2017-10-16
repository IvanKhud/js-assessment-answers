exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
    var result = [],
        arr1 = [];
    return (function myFunc() {
       for (var i = 0; i < arr.length; i++) {
            var x = arr.splice(i, 1);
            arr1.push(x);
            if (arr.length == 0) {
                result.push(arr1.slice());
            }
            myFunc();
            arr.splice(i, 0, x);
            arr1.pop();
        }
        return result;
    })();
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
    for (var i = 0; i < n; i++) {
        var lefts = exports.recursionAnswers.validParentheses(i);
        var rights = exports.recursionAnswers.validParentheses(n - i - 1);

        for (var l = 0; l < lefts.length; l++)
            for (var r = 0; r < rights.length; r++)
                result.push("(" + lefts[l] + ")" + rights[r]);
    }

    return result;
  }
};
