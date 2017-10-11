exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {

  },

  alterObjects: function(constructor, greeting) {
    
  },

  iterate: function(obj) {
    var a = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        a.push(i + ': ' + obj[i]);
      }
    } 
    return a;
  }
};
