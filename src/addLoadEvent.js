// 共享onload事件
var addLoadEvent = function(fn) {
  var oldonload = window.onload;

  if (typeof window.onload !== 'function') {
    window.onload = fn;
  }
  else {
    window.onload = function() {
      oldonload();
      fn();
    };
  }
};

module.exports = addLoadEvent;
