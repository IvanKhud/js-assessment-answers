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
    for (var i=0; i < arr.length; i++) {
      if (arr[i] !== item) {
        arr1.push(arr[i]);  
      } 
    }
    return arr1;
  },

  removeWithoutCopy: function(arr, item) {
    var arr1 = [];
    for (var i=0; i < arr.length; i++) {
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
    arr[arr.length - 1]  = undefined; 
    arr.length--;
    return arr;
  },

  prepend: function(arr, item) {
    for (var i = arr.length; i>0; i--) {
      arr[i] = arr[i-1];
    }
    arr[0] = item;
    return arr;
  },

  curtail: function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i+1];
    }
    arr[arr.length-1] = undefined;
    arr.length--;
    return arr;
  },

  concat: function(arr1, arr2) {
    var arrnew = [];
    for (var i=0; i < arr1.length; i++) {
      arrnew.push(arr1[i]);
    }
    for (var i=0; i < arr2.length; i++) {
      arrnew.push(arr2[i]);
    }
    return arrnew;
  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {
    var c = 0;
    for (var i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        c++;  
      } 
    }  
    return c;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {
    var arr1 = [];
    for (var i=0; i<arr.length; i++) {
      if (arr[i] === target) {
        arr1.push(i);  
      } 
    }    
    return arr1;
  }
};
