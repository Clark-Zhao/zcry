/*!
 * zCry
 * Copyright 2016 Clark Zhao (zhaoyuxiang.cn)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
"use strict";
// 共享onload事件
function addLoadEvent(fn){
  var oldonload = window.onload;
  if (typeof window.onload !== 'function') {
    window.onload = fn;
  }else {
    window.onload = function(){
      oldonload();
      fn();
    }
  }
}

// insertAfter 兼容浏览器
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode,
    parentLast = parent.lastElementChild || parent.lastChild,
    objNext = targetElement.nextElementSibling || targetElement.nextSibling;
  if (targetElement === parentLast) {
    parent.appendChild(newElement);
  }else {
    parent.insertBefore(newElement,objNext);
  }
}

// 动态加载JavaScript文件
function loadScript(url, callback){

  var script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) { //IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  }else { //其他浏览器
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// 事件监听兼容性处理
var EventUtil = {
  addHandler: function(element,type,handler){
    if (element.addEventListener) {
      element.addEventListener(type,handler,false);
    }else if (element.attachEvent) {
      element.attachEvent("on"+type,handler);
    }else {
      element["on"+type] = handler;
    }
  },
  removeHandler: function(element,type,handler){
    if (element.removeEventListener) {
      element.removeEventListener(type,handler,false);
    }else if (element.detachEvent) {
      element.detachEvent("on"+type,handler);
    }else {
      element["on"+type] = null;
    }
  },
  getEvent: function(event){
    return event ? event : window.event;
  },
  getTarget: function(event){
    return event.target || event.srcElement;
  },
  preventDefault: function(event){
    if (event.preventDefault()) {
      event.preventDefault();
    }else{
      event.returnValue = false;
    }
  },
  stopPropagation: function(event){
    if (event.stopPropagation()) {
      event.stopPropagation();
    }else{
      event.cancleBubble = true;
    }
  }
}

// 用户输入验证
var vaild = {
  name: function(id){

  }
}
