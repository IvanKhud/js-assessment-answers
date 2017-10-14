exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    if (start <= end) {    	
      console.log(start);
      start++;
      var timerId = setTimeout(exports.countAnswers.count, 100, start, end);
    }
    return {cancel: function() {clearTimeout(timerId)}}
  }
};
