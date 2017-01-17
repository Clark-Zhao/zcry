// 共享onload事件
const addLoadEvent = function(fn) {
  const oldonload = window.onload;

  if (typeof oldonload !== 'function') {
    window.onload = fn;
  }
  else {
    window.onload = function() {
      oldonload();
      fn();
    };
  }
};

export { addLoadEvent };
