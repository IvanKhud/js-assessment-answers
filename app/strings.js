exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {

  reduceString: function(str, amount) {
    var k=1, str1 = str[0];
    for (i = 1; i < str.length; i++) {
      if (str[i] === str[i-1]) {
        if (k < amount) {
          str1 += str[i];
          k++;
        }
      }
      else {
        k=1;
        str1 += str[i];
      };
    }
    str = str1;
    return str; 
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    var s1 = "";
    for (var i = str.length - 1; i >= 0; i--) {
      s1 += str[i];
    }
    str = s1; 
    return str;
  }

};
