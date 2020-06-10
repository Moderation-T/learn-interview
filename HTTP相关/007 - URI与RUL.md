- 我们输入在浏览器里的 Web 地址应该叫 URL 还是 RUI？

- URI

  > 一个紧凑的字符串用来标示抽象或者物理资源
  > URI 可以进一步被分为定位符、名字或者两者都是

- URL

  > Uniform Resource Locator URL 是 URI 的子集，除了确定一个资源，还提供一种定位该资源的主要访问机制，好像一个人的地址

- URN
  > 好像一个人的名字

> URI 可以分为 URL、URN 或同时具备 locators 和 names 特性的一个东西；URN 作用就好像一个人的名字，URL 就像一个人的地址；换句话说 URN 切丁了东西的身份，URL 提供了找到他的方式

> URL 是 URI 的一种，但不是所有的 URI 都是 URL
> URI 和 URL 最大的差别是访问机制
> URN 是唯一表示的一部分，是身份信息

- Range
  > 用于请求头中，指定第一个字节的位置和最后一个字节的位置`Range:(unit= first byte pos)-[last byte pos]`

```
Range:bytes=0-499
Range:bytes=500-999
Range:bytes=-500
Range:bytes=500-
Range:bytes=0-499,500-999
```

- Content-Range

  > 用于响应头中，在发出带 Range 的请求后，服务器会在 Content-Range 头部返回当前接受的范围和文件总大小。一般格式 `Range:bytes(unit first byte pos) - [last byte pos]/[entity length]`
  > 而在响应完成后，返回的响应头内容也不同：
  > HTTP/1.1 200 OK (不使用断点续传方式)
  > HTTP/1.1 206 Partial Content (使用断点续传方式)

- 断点续传过程
  > 客户端下载一个 1024K 的文件，已经下载了其中 512K
  > 网络中断，客户端请求续传，因此需要在 HTTP 头中申明本次需要续传的偏殿： Range:bytes=512000- 这个头通知服务端从文件的 512K 位置开始传输文件
  > 服务端收到断点续传请求，从文件的 512K 位置开始传输，并且在 HTTP 头中增加： Content-Range:bytes 512000-/1024000 并且此时服务端返回的 hTTP 状态码应该是 206 而不是 200
