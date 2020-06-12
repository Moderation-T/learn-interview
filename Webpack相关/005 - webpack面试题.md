- 前端为何要进行打包和构建

  > 代码层面：
  > 体积更小（Tree-Shaking、压缩、合并）加载更快
  > 编译高级语言或语法（TS、ES6+、模块化、scss）
  > 兼容性错误提示（postcss、eslint、polyfill）
  > 工程化、研发流程：
  > 统一、高效的开发环境
  > 统一的构建流程和产出标准
  > 集成公司构建规范（提测，上线等）

- module chunk bundle 区别

  > module - 各个源码文件，webpack 中一切皆模块
  > chunk - 多模块合并成的，如，entry import() splitChunk
  > bundle - 最终的输出文件

- loader 和 plugin 的区别

  > loader 模块转换器 如，less -> css
  > plugin 扩展插件，就是转换之后再做什么扩展

- 常见的 loader 和 plugin 有哪些
  > css - loader less-loader style-loader babel-loader ...
  > HappyPlugin

[loaders](https://www.webpackjs.com/loaders/)
[plugins](https://www.webpackjs.com/plugins/)

- babel 和 webpack 的区别

  > babel - JS 新语法编译工具，不关心模块化
  > webpack - 打包构建工具，是多个 loader plugin 的合集

- 如何产出一个 lib

- babel-polyfill 和 babel-runtime 的却别

  > babel-polyfill 会污染全局 babel-runtime 不会污染全局

- webpack 如何实现懒加载

  > import()

- 为何 Proxy 不能被 polyfill

  > Proxy 不能用 Object.defineProperty 或其他东西进行模拟

- webpack 性能优化
