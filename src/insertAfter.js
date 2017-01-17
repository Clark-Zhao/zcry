// insertAfter 兼容浏览器
const insertAfter = function(newElement, targetElement) {
  const parent = targetElement.parentNode,
    parentLast = parent.lastElementChild || parent.lastChild,
    objNext = targetElement.nextElementSibling || targetElement.nextSibling;

  if (targetElement === parentLast) {
    parent.appendChild(newElement);
  }
  else {
    parent.insertBefore(newElement, objNext);
  }
};

export { insertAfter };
