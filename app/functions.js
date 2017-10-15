exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
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
    return fn.bind(fn, str1, str2, '!!!');
  },

  useArguments: function() {
    var a = 0;
    for (var i in arguments) {
      a += arguments[i];
    };
    return a;
  },

  callIt: function(fn) {
    return fn.apply(null, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments: function(fn) {
    var arr1 = Array.prototype.slice.call(arguments, 1);
    return function () {
      var arr2 = Array.prototype.slice.call(arguments, 0);
      arr1 = arr1.concat(arr2);
      return fn.apply(this, arr1);
    }
  },

  curryIt: function(fn) {
    var arr = [];
    return function fn_curried(x) {
      for (var i in arguments) { 
        arr.push(arguments[i]);
      }
      return arr.length >= fn.length ? fn.apply(fn, arr) : fn_curried;
    };
  }
};
