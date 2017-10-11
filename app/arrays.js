exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var k = -1;
    for (var i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        k = i;  
      } 
    }    
    return k;
  },

  sum: function(arr) {
    var s = 0;
    for (var i=0; i<arr.length; i++) {
      s += parseInt(arr[i]);
    }
    return parseInt(s);
  },

  remove: function(arr, item) {
    var arr1 = [];
    for (var i=0; i<arr.length; i++) {
      if (arr[i] !== item) {
        arr1.push(arr[i]);  
      } 
    }
    return arr1;
  },

  removeWithoutCopy: function(arr, item) {
    var arr1 = [];
    for (var i=0; i<arr.length; i++) {
      if (arr[i] !== item) {
        arr1.push(arr[i]);  
      } 
    }
    arr = arr1;
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
