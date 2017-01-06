/*!
 * zCry
 * Copyright 2016 Clark Zhao (zhaoyuxiang.cn)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

"use strict";

var zCry = {

  // 共享onload事件
  addLoadEvent: function(fn) {
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
      window.onload = fn;
    }else {
      window.onload = function(){
        oldonload();
        fn();
      }
    }
  },

  ajax: function(type, url, info) {
    var xmlhttp;
    var type = type || 'GET';
    var info = info || '';

    if (window.XMLHttpRequest) {
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp=new XMLHttpRequest();
    } else {
      // IE6, IE5 浏览器执行代码
      xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
    }

    if (info) {
      var params = [];
      for (var key in info) {
        params.push(key + '=' + info[key])
      }
      params = params.join('&');
    }

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp.responseText[0]);
      }
    }

    if (type.toUpperCase() === 'POST') {
      xmlhttp.open('POST', url, true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(params);
    } else {
      xmlhttp.open('GET', url + '?' + params, true);
      xmlhttp.send();
    }

  },

  // insertAfter 兼容浏览器
  insertAfter: function(newElement,targetElement) {
    var parent = targetElement.parentNode,
      parentLast = parent.lastElementChild || parent.lastChild,
      objNext = targetElement.nextElementSibling || targetElement.nextSibling;
    if (targetElement === parentLast) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement,objNext);
    }
  },

  // 动态加载JavaScript文件
  loadScript: function(url, callback){

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) { //IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else { //其他浏览器
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  },

  // 事件监听兼容性处理
  EventUtil: {

    // 增加事件监听
    addHandler: function(element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      }else if (element.attachEvent) {
        element.attachEvent("on"+type, handler);
      }else {
        element["on"+type] = handler;
      }
    },

    // 移除事件监听
    removeHandler: function(element, type, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
      }else if (element.detachEvent) {
        element.detachEvent("on"+type, handler);
      }else {
        element["on"+type] = null;
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
      } else {
        event.returnValue = false;
      }
    },

    // 停止冒泡
    stopPropagation: function(event) {
      if (event.stopPropagation()) {
        event.stopPropagation();
      } else {
        event.cancleBubble = true;
      }
    }
  }
}
