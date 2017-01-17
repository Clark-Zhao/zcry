// 取cookie
const getCookie = (name) => {
  let arr = [];
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  }
  else {
    return null;
  }
};

const cookie = (key, val, days) => {
  const name = key;
  const value = val || '';
  const time = days || 0;
  const secInOneDay = 60 * 60 * 24 * 1000;  // 一天有多少毫秒

  let exp = new Date();

  // 存cookie
  if (val) {
    if (time) {
      exp.setTime(exp.getTime() + time * secInOneDay);
      document.cookie = name + '=' + escape(value) + ';expires=' + exp.toUTCString();
    }
    else {
      document.cookie = name + '=' + escape(value) + ';';
    }
  }
  // 删cookie
  else if (val === null) {
    exp.setTime(exp.getTime() - 1);
    const cval = getCookie(name);

    if (cval != null)
      document.cookie = name + '=' + cval + ';expires=' + exp.toUTCString();
  }
  // 取cookie
  else {
    return getCookie(name);
  }
};

export { cookie };
