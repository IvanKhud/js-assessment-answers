exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var b = false, x;    
    for (var i=0; i < str.length; i++)
      {
        x = parseInt(str[i]);
        if (! isNaN(x)) {
          b = true;
        }
      }
    return b;
  },

  containsRepeatingLetter: function(str) {
    var b = false;
    for (var i = 1; i < str.length; i++) {
      if ( (str[i] === str[i-1]) && isNaN(str[i]) ) {
        b = true;
      }
    }
    return b;
  },

  endsWithVowel: function(str) {

  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
