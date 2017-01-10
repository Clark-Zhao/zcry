// insertAfter 兼容浏览器
var insertAfter = function(newElement,targetElement) {
  var parent = targetElement.parentNode,
    parentLast = parent.lastElementChild || parent.lastChild,
    objNext = targetElement.nextElementSibling || targetElement.nextSibling;

  if (targetElement === parentLast) {
    parent.appendChild(newElement);
  }
  else {
    parent.insertBefore(newElement,objNext);
  }
};

module.exports = insertAfter;
