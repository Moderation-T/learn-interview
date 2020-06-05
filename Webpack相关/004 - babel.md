- 环境搭建 & 基本配置

  > 环境搭建

```js
// package.json
  "devDependencies": {
    "@babel/cli": "^7.7.5",
    "@babel/core": "^7.7.5",
    "@babel/plugin-transform-runtime": "^7.7.5",
    "@babel/preset-env": "^7.7.5"
  },
  "dependencies": {
    "@babel/polyfill": "^7.7.0",
    "@babel/runtime": "^7.7.5"
  }
```

```js
// .babelrc
  {
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```

> .babelrc 配置
> presets 和 plugins

- babel-polyfill

  > babel-polyfill 可以编译新语法 是下边两者的集合 满足新语法 babel7.4 之后弃用，推荐使用 core-js 和 regenerator

  > 什么是 polyfill：一个补丁兼容

  > core-js 和 regenerator

  ```js
  <!-- babel.js -->
   "presets": [
        [
            "@babel/preset-env",
            <!-- 设置按需加载 -->
            {
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ]
    ],
  ```

  > 问题：会污染全局环境
  > 做一个独立的 web 系统没有问题，但是做一个第三方的库，就有问题

* babel-runtime

```js
// babel.js
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": 3,
                "helpers": true,
                "regenerator": true,
                "useESModules": false
            }
        ]
    ]
}
```
