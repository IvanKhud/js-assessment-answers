exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(fn, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str1) {return str + ", " + str1}
  },

  makeClosures: function(arr, fn) {
    var funcs = [], closure;         

      arr.forEach(function(x) {
        closure = function() {
          return fn.call(this, x);
        };
        funcs.push(closure);
      });

      return funcs;
    },  


  partial: function(fn, str1, str2) {
    return fn.bind(null, str1, str2, '!!!');
  },

  useArguments: function() {
    var a = 0;
    for (var i in arguments) {
      a += arguments[i];
    };
    return a;
  },

  callIt: function(fn) {
    var arr = [];
    for (var i in arguments) {
      arr[i] = arguments[i];
    }
    arr.shift();
    return fn.apply(fn, arr);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
