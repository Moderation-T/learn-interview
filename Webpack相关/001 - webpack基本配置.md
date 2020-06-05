- 拆分配置和 merge
  > webpack.common 公共配置

```js
// 在 dev prod 中引入 公共配置
const webpackCommonConf = require('./webpack.common.js');
const { smart } = require('webpack-merge');

module.exports = smart(webpackCommonConf, {});
```

> webpack.dev 开发
> webpack.prod 生产

- 启动本地服务

  > dev 环境下启用 devServer，安装 webpack-dev-server 依赖

  ```javascript
  devServer: {
        port: 8080,
        progress: true,  // 显示打包的进度条
        contentBase: distPath,  // 根目录
        open: true,  // 自动打开浏览器
        compress: true,  // 启动 gzip 压缩

        // 设置代理
        proxy: {
            // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
            '/api': 'http://localhost:3000',

            // 将本地 /api2/xxx 代理到 localhost:3000/xxx
            '/api2': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api2': ''
                }
            }
        }
    }
  ```

- 处理 ES6

  > common 下，配置 babel-loader .babelrc 配置 presets

  ```js
    {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
    },
  ```

- 处理样式

  > common 下，

```js
{
    test: /\.css$/,
    // loader 的执行顺序是：从后往前
    loader: ['style-loader', 'css-loader', 'postcss-loader'] // 加了 postcss 做浏览器兼容性的
},
{
    test: /\.less$/,
    // 增加 'less-loader' ，注意顺序
    loader: ['style-loader', 'css-loader', 'less-loader']
}
```

```js
// postcss.config.js 这个文件里进行 postcss 配置
module.exports = {
  plugins: [require('autoprefixer')],
};
```

- 处理图片

> product 下

```js
// 图片 - 考虑 base64 编码的情况
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: {
        loader: 'url-loader',
        options: {
            // 小于 5kb 的图片用 base64 格式产出
            // 否则，依然延用 file-loader 的形式，产出 url 格式
            limit: 5 * 1024,

            // 打包到 img 目录下
            outputPath: '/img1/',

            // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
            // publicPath: 'http://cdn.abc.com'
        }
    }
  },
```

> dev 下

```js
 // 直接引入图片 url
{
    test: /\.(png|jpg|jpeg|gif)$/,
    use: 'file-loader'
}
```

- 模块化
