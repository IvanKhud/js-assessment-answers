exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    s1 = "";
    for (var i = str.length - 1; i >= 0; i--) {
      s1 += str[i];
    }
    str = s1; 
    return str;
  }
};
