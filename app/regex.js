exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-zA-Z]).*?\1/.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiou]/.test(str[str.length-1].toLowerCase());
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
    return /\d{3}-\d{3}-\d{4}/.test(str) && str.length === 12;
  },

  isUSD: function(str) {

  }
};
