// 事件监听兼容性处理
var EventUtil = {

  // 增加事件监听
  addHandler: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    }
    else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    }
    else {
      element['on' + type] = handler;
    }
  },

  // 移除事件监听
  removeHandler: function(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    }
    else if (element.detachEvent) {
      element.detachEvent('on' + type, handler);
    }
    else {
      element['on' + type] = null;
    }
  },

  getEvent: function(event) {
    return event ? event : window.event;
  },

  getTarget: function(event) {
    return event.target || event.srcElement;
  },

  // 阻止默认事件
  preventDefault: function(event) {
    if (event.preventDefault()) {
      event.preventDefault();
    }
    else {
      event.returnValue = false;
    }
  },

  // 停止冒泡
  stopPropagation: function(event) {
    if (event.stopPropagation()) {
      event.stopPropagation();
    }
    else {
      event.cancleBubble = true;
    }
  }
};

module.exports = EventUtil;
