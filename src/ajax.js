var ajax = function(opt) {
  var url = opt.url || '';
  var type = opt.type || 'GET';
  var data = opt.data || null;
  var success = opt.success || function() {};
  var fail = opt.fail || function() {};

  var xhr;
  var res;

  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xhr = new XMLHttpRequest();
  }
  else {
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

module.exports = ajax;
