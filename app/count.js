exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    t = (end - start + 1)*100;
    return setTimeout(this, t);
  }
};
