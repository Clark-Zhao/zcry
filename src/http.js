// es6的ajax方法
const http = {
  xhr: null,

  get: function(url, data) {
    let params = [];
    let res = '';

    if (window.XMLHttpRequest) {
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      this.xhr = new XMLHttpRequest();
    }
    else {
      // IE6, IE5 浏览器执行代码
      this.xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    let that = this;

    return new Promise((resolve, reject) => {
      if (data) {
        for (let key in data) {
          params.push(key + '=' + data[key]);
        }
        params = params.join('&');
      }

      that.xhr.onreadystatechange = function() {
        if (that.xhr.readyState == 4) {
          that.res = JSON.parse(that.xhr.responseText);
          if (that.xhr.status == 200) {
            resolve(that.res);
          }
          else {
            reject(that.res);
          }
        }
      };

      that.xhr.open('GET', url + '?' + params, true);
      that.xhr.send();
    });
  },

  post: function(url, data) {
    let params = [];
    let res = '';

    if (window.XMLHttpRequest) {
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      this.xhr = new XMLHttpRequest();
    }
    else {
      // IE6, IE5 浏览器执行代码
      this.xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    let that = this;

    return new Promise((resolve, reject) => {
      if (data) {
        for (let key in data) {
          params.push(key + '=' + data[key]);
        }
        params = params.join('&');
      }

      that.xhr.onreadystatechange = function() {
        if (that.xhr.readyState == 4) {
          that.res = JSON.parse(that.xhr.responseText);
          if (that.xhr.status == 200) {
            resolve(that.res);
          }
          else {
            reject(that.res);
          }
        }
      };

      that.xhr.open('POST', url, true);
      that.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
      that.xhr.send(params);
    });
  }
};

export { http };
