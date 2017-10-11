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
    var x = str[str.length - 1];   
    s = 'aeiouAEIOU';
    b = false;
    for (var i = 0; i < s.length; i++) {
      if (x === s[i]) {
        b = true;
      }
    }
    return b;
  },

  captureThreeNumbers: function(str) {
    var i = 1, s1 = "";
    while (i < str.length - 1) {
      if ( (! isNaN(str[i])) && (! isNaN(str[i-1])) && (! isNaN(str[i+1])) ) {
        var s1 = str[i-1] + str[i] + str[i+1];
        return s1;
      }    
      i++;
    }
    return false;
  },

  matchesPattern: function(str) {
    if (str.length !== 12) {
      return false;
    }
    if (isNaN(str[0])) {
      return false;
    }
    if (isNaN(str[1])) {
      return false;
    }
    if (isNaN(str[2])) {
      return false;
    }
    if (isNaN(str[4])) {
      return false;
    }
    if (isNaN(str[5])) {
      return false;
    }
    if (isNaN(str[6])) {
      return false;
    }
    if (isNaN(str[8])) {
      return false;
    }
    if (isNaN(str[9])) {
      return false;
    }
    if (isNaN(str[10])) {
      return false;
    }
    if (isNaN(str[11])) {
      return false;
    }
    if (str[3] !== '-') {
      return false;
    }
    if (str[7] !== '-') {
      return false;
    }
    return true;
  },

  isUSD: function(str) {

  }
};
