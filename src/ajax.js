const ajax = function(opt) {
  const url = opt.url || '';
  const type = opt.type || 'GET';
  const data = opt.data || null;
  const success = opt.success || function() {};
  const fail = opt.fail || function() {};

  let xhr;
  let res;
  let params = [];

  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xhr = new XMLHttpRequest();
  }
  else {
    // IE6, IE5 浏览器执行代码
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  if (data) {
    for (let key in data) {
      params.push(key + '=' + data[key]);
    }
    params = params.join('&');
  }

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      res = JSON.parse(xhr.responseText);
      if (xhr.status == 200) {
        success(res);
      }
      else {
        fail(res);
      }
    }
  };

  if (type.toUpperCase() === 'POST') {
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
    xhr.send(params);
  }
  else {
    xhr.open('GET', url + '?' + params, true);
    xhr.send();
  }
};

export { ajax };
