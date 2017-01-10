(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["zCry"] = factory();
	else
		root["zCry"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _addLoadEvent = __webpack_require__(1);

	var _addLoadEvent2 = _interopRequireDefault(_addLoadEvent);

	var _ajax = __webpack_require__(2);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _EventUtil = __webpack_require__(3);

	var _EventUtil2 = _interopRequireDefault(_EventUtil);

	var _insertAfter = __webpack_require__(4);

	var _insertAfter2 = _interopRequireDefault(_insertAfter);

	var _loadScript = __webpack_require__(5);

	var _loadScript2 = _interopRequireDefault(_loadScript);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  addLoadEvent: _addLoadEvent2.default,
	  ajax: _ajax2.default,
	  EventUtil: _EventUtil2.default,
	  insertAfter: _insertAfter2.default,
	  loadScript: _loadScript2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	// 共享onload事件
	var addLoadEvent = function addLoadEvent(fn) {
	  var oldonload = window.onload;

	  if (typeof window.onload !== 'function') {
	    window.onload = fn;
	  } else {
	    window.onload = function () {
	      oldonload();
	      fn();
	    };
	  }
	};

	module.exports = addLoadEvent;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var ajax = function ajax(opt) {
	  var url = opt.url || '';
	  var type = opt.type || 'GET';
	  var data = opt.data || null;
	  var success = opt.success || function () {};
	  var fail = opt.fail || function () {};

	  var xhr;
	  var res;

	  if (window.XMLHttpRequest) {
	    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	    xhr = new XMLHttpRequest();
	  } else {
	    // IE6, IE5 浏览器执行代码
	    xhr = new ActiveXObject('Microsoft.XMLHTTP');
	  }

	  if (data) {
	    var params = [];

	    for (var key in data) {
	      params.push(key + '=' + data[key]);
	    }
	    params = params.join('&');
	  }

	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4) {
	      res = JSON.parse(xhr.responseText);
	      if (xhr.status == 200) {
	        success(res);
	      } else {
	        fail(res);
	      }
	    }
	  };

	  if (type.toUpperCase() === 'POST') {
	    xhr.open('POST', url, true);
	    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
	    xhr.send(params);
	  } else {
	    xhr.open('GET', url + '?' + params, true);
	    xhr.send();
	  }
	};

	module.exports = ajax;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	// 事件监听兼容性处理
	var EventUtil = {

	  // 增加事件监听
	  addHandler: function addHandler(element, type, handler) {
	    if (element.addEventListener) {
	      element.addEventListener(type, handler, false);
	    } else if (element.attachEvent) {
	      element.attachEvent('on' + type, handler);
	    } else {
	      element['on' + type] = handler;
	    }
	  },

	  // 移除事件监听
	  removeHandler: function removeHandler(element, type, handler) {
	    if (element.removeEventListener) {
	      element.removeEventListener(type, handler, false);
	    } else if (element.detachEvent) {
	      element.detachEvent('on' + type, handler);
	    } else {
	      element['on' + type] = null;
	    }
	  },

	  getEvent: function getEvent(event) {
	    return event ? event : window.event;
	  },

	  getTarget: function getTarget(event) {
	    return event.target || event.srcElement;
	  },

	  // 阻止默认事件
	  preventDefault: function preventDefault(event) {
	    if (event.preventDefault()) {
	      event.preventDefault();
	    } else {
	      event.returnValue = false;
	    }
	  },

	  // 停止冒泡
	  stopPropagation: function stopPropagation(event) {
	    if (event.stopPropagation()) {
	      event.stopPropagation();
	    } else {
	      event.cancleBubble = true;
	    }
	  }
	};

	module.exports = EventUtil;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	// insertAfter 兼容浏览器
	var insertAfter = function insertAfter(newElement, targetElement) {
	  var parent = targetElement.parentNode,
	      parentLast = parent.lastElementChild || parent.lastChild,
	      objNext = targetElement.nextElementSibling || targetElement.nextSibling;

	  if (targetElement === parentLast) {
	    parent.appendChild(newElement);
	  } else {
	    parent.insertBefore(newElement, objNext);
	  }
	};

	module.exports = insertAfter;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	// 动态加载JavaScript文件
	var loadScript = function loadScript(url, callback) {
	  var script = document.createElement('script');

	  script.type = 'text/javascript';

	  if (script.readyState) {
	    //IE
	    script.onreadystatechange = function () {
	      if (script.readyState == 'loaded' || script.readyState == 'complete') {
	        script.onreadystatechange = null;
	        callback();
	      }
	    };
	  } else {
	    //其他浏览器
	    script.onload = function () {
	      callback();
	    };
	  }

	  script.src = url;
	  document.getElementsByTagName('head')[0].appendChild(script);
	};

	module.exports = loadScript;

/***/ }
/******/ ])
});
;