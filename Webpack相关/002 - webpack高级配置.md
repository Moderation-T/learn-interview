- 多入口

```js
/* 针对js文件 */
// entry
 entry: {
        index: path.join(srcPath, 'index.js'),
        other: path.join(srcPath, 'other.js')
    },
// output
output: {
        // filename: 'bundle.[contentHash:8].js',  // 打包代码时，加上 hash 戳
        filename: '[name].[contentHash:8].js', // name 即多入口时 entry 的 key
        path: distPath,
        // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
    },

/* 针对HTML文件 */
plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.join(srcPath, 'index.html'),
        //     filename: 'index.html'
        // })

        // 多入口 - 生成 index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
            chunks: ['index']  // 只引用 index.js
        }),
        // 多入口 - 生成 other.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: 'other.html',
            chunks: ['other']  // 只引用 other.js
        })
    ]

```

- 抽离 CSS 文件
  > dev 下

```js
 {
      test: /\.css$/,
      // loader 的执行顺序是：从后往前
      loader: ['style-loader', 'css-loader', 'postcss-loader'] // 加了 postcss
  },
  {
      test: /\.less$/,
      // 增加 'less-loader' ，注意顺序
      loader: ['style-loader', 'css-loader', 'less-loader']
  }
```

> prod 下

```js
// 拆分
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩
const TerserJSPlugin = require('terser-webpack-plugin');
// 压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/* rules中 */
// 抽离 css
{
  test: /\.css$/,
  loader: [
      MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
      'css-loader',
      'postcss-loader'
  ]
},
// 抽离 less --> css
{
  test: /\.less$/,
  loader: [
      MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
      'css-loader',
      'less-loader',
      'postcss-loader'
  ]
}

/* 压缩css */
optimization: {
    // 压缩 css
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
}
```

- 抽离公共代码
  > common 下使用 chunk

```js
plugins: [
  new HtmlWebpackPlugin({
    template: path.join(srcPath, 'index.html'),
    filename: 'index.html',
    // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
    chunks: ['index', 'vendor', 'common'], // 要考虑代码分割
  }),
  // 多入口 - 生成 other.html
  new HtmlWebpackPlugin({
    template: path.join(srcPath, 'other.html'),
    filename: 'other.html',
    chunks: ['other', 'common'], // 考虑代码分割
  }),
];
```

> prod 下

```javascript
optimization: {

// 分割代码块
splitChunks: {
    chunks: 'all',
    /**
     * initial 入口 chunk，对于异步导入的文件不处理
        async 异步 chunk，只对异步导入的文件处理
        all 全部 chunk
      */

    // 缓存分组
    cacheGroups: {
        // 第三方模块
        vendor: {
            name: 'vendor', // chunk 名称
            priority: 1, // 权限更高，优先抽离，重要！！！
            test: /node_modules/,
            minSize: 0,  // 大小限制
            minChunks: 1  // 最少复用过几次
        },

        // 公共的模块
        common: {
            name: 'common', // chunk 名称
            priority: 0, // 优先级
            minSize: 0,  // 公共模块的大小限制
            minChunks: 2  // 公共模块最少复用过几次
        }
    }
  }
}
```

- 懒加载
  > 用法：

```js
setTimeout(() => {
  import('component').then((res) => {});
}, 1500);
```

- 处理 JSX
  > babel

```js
// babelrc.js
{
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```

- 处理 Vue

  > vue-loader

```js
{
    test: /\.vue$/,
    loader: ['vue-loader'],
    include: srcPath
},
```
