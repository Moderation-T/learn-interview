- 手写一个简易的 ajax
- 跨域的常用实现方式

---

- XMLHttpRequest

```js
/* GET */
const xhr = newXMLHttpRequest();

xhr.open('GET', '/api', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      alter(xhr.responseText);
    }
  }
};

xhr.send(null);

/* POST */

const xhr = newXMLHttpRequest();

xhr.open('POST', '/api', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      alter(xhr.responseText);
    }
  }
};

/* readyState:
0 - 未初始化 还没调用 send 方法
1 - 载入 已经调用 send 方法，正在发送请求
2 - 载入完成 send 方法执行完成，已经接收到全部相应内容
3 - 交互 正在解析影响内容
4 - 完成 相应内容解析完成 可在客户端调用
 */

/* status：
 2** - 成功
 3** - 需要重定向，浏览器直接跳转 301 302 304
 4** - 客户端请求错误
 5** - 服务器端错误
  */

postData = {};
xhr.send(JSON.stringify(postData));

// Promise
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404 || xhr.status === 500) {
          reject(new Error('404 not found'));
        }
      }
    };
    xhr.send(null);
  });
  return p;
}

const url = '/data/test.json';
ajax(url)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

- 状态码
- 跨域：同源策略，跨域解决
