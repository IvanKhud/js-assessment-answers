exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-zA-Z]).*?\1/.test(str);
  },

  endsWithVowel: function(str) {
    return 'aeiou'.indexOf( str[str.length-1].toLowerCase() ) !== -1;
  },

  captureThreeNumbers: function(str) {
    a = (/\d{3}/).exec(str);
    if (a === null) {
      return false
    }
    else {
      return a[0];
    }
  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
