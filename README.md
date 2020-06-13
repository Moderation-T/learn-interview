# 问题整理

## [JS](./JS相关)

1. 什么是跨域，跨域有哪些方法 ✅
2. JSONP 跨域的原理 ✅
3. typeof 能判断哪些类型 ✅
4. 何时使用 ‘===’ 何时使用 ‘==’ ✅
5. 值类型和引用类型的区别 ✅
6. 如何判断一个变量是不是数组 ✅
7. 手写一个简易的 JQuery ，考虑插件和扩展性 ❌
8. class 原型本质，怎么理解 ✅
9. this 的不同应用场景，如何取值 ✅
10. 手写 bind 函数 ✅
11. 实际开发中闭包的应用场景，举例说明 ✅
12. 创建十个 a 标签，点击的时候弹出来对应的序号 ✅
13. 同步和异步的区别是什么 ✅
14. 手写 Promise 加载一张图片 ✅
15. 前端使用异步的场景有哪些 ✅
16. DOM 是那种数据结构 ✅
17. DOM 操作常用的 API 查找 添加 删除 移动 DOM 节点的方法 ✅
18. attr 和 property 的区别 ✅
19. 如何减少 DOM 操作?一次性插入多个 DOM 节点，考虑性能如何操作? ✅
20. 如何识别浏览器类型 ✅
21. 分析拆解 URL 各部分 获取当前页面 URL 参数 ✅
22. 编写一个通用的事件监听函数 ❌
23. 描述事件捕获与冒泡的流程 ✅
24. 事件代理（委托）是什么？无限下拉的图片列表，如何监听每个图片的点击 ✅
25. 手写一个简易的 ajax ✅
26. 描述 cookie localStorage sessionStorage 以及三者的区别 ✅
27. 从 输入 URL 到渲染出页面的整个过程 ✅
28. window.onload 和 DOMContentLoaded / document load 和 ready 的区别 ✅
29. new 操作具体做了哪些事情 ✅
30. ajax 请求 get 和 post 的区别 ✅
31. var let const 的区别 ✅
32. 手写深度比较，模拟 lodash isEqual ✅
33. split 和 join 区别 ✅
34. 数组 pop push unshift shift 分别做什么的 ✅
35. 数组的那些 API 是纯函数「纯函数-不改变原数组，且返回一个新数组」 ✅
36. 数组 slice 和 splice 的区别 ✅
37. [10,20,30].map(parseInt) 返回结果是什么 ✅
38. 手写数组 flatern,考虑多层级 ✅
39. 函数 call 和 apply 的区别 ✅
40. new Object() 和 Object.create() 的区别 ✅
41. 闭包是什么，有什么特性，有什么负面影响 ✅
42. 如何阻止事件冒泡和默认行为 ✅
43. 函数声明和函数表达式的区别 ✅
44. 什么是 JSON ✅
45. 如何用 jS 实现继承 ✅
46. 如何捕获 js 程序中的异常 ✅
47. 关于 this 的场景题 ❌
48. 关于作用域和自由变量的场景题 ❌
49. 判断字符串以字母开头，后面字母数字下划线，长度 6-30 ❌
50. 手写字符串 trim 方法，保证浏览器兼容性 ❌
51. 如何获取多个数字中最大值 ✅
52. 数组去重 ✅
53. 手写深拷贝 ✅
54. 将 URL 参数解析为 js 对象 ❌
55. 事件循环[宏任务、微任务、setTimeout] ✅
56. 介绍一下 RAF requestAnimationFrame ✅
57. 前端性能如何优化，一般从哪几个方面考虑 ✅
58. 常见的 web 前端攻击方式有哪些，怎么去预防 ✅

## CSS

1. BFC 的含义、特点和用途
2. 清楚浮动
3. margin 外边距折叠问题
4. flex 布局
5. 盒模型
6. 圣杯布局、双飞翼...
7. 对不定宽高块的水平垂直居中

## [React](./React相关)

1. React 组件如何通讯 ✅
2. JSX 本质是什么 ✅
3. context 是什么，有何用途 ✅
4. 性能优化 - shouldComponentUpdate 的用途 ✅
5. 描述 redux 单项数据流 ✅
6. setState 是同步还是异步 setState 的原理 [batchUpdate] ✅
7. 描述组件的生命周期，包括父子组件 ✅
8. Portals 的使用 ✅
9. 函数组件和 class 组件区别 ✅
10. 受控组件与非受控组件 ✅
11. 异步组件，何时使用 ✅
12. React 的性能优化 ✅
13. 组件公共逻辑抽离 - HOC、Render Props ✅
14. React 发起 ajax 应该在哪个生命周期 ✅
15. 描述 vdom 和 diff
16. 合成事件 ❌
17. PureComponent 有何区别 ✅
18. 组件的渲染过程
19. React 事件 和 DOM 事件的区别 ✅
20. 渲染列表，为何使用 key
21. react-router 如何配置懒加载 ✅
22. redux 如何进行异步请求 ✅
23. React 和 Vue 区别 ✅

## [Vue](./Vue相关问题)

1. computed 与 watch 的区别 computed 有何特点 ✅
2. watch 如何进行深度监听 ✅
3. watch 是否能够拿到 oldValue ✅
4. class 和 style 的使用方法 ✅
5. v-if 与 v-show 的使用方法以及区别以使用场景 ✅
6. 事件用法、常用的事件修饰符、Vue 中事件是被绑定到哪里和 react 中的区别 ❌
7. 自定义 v-model 的使用 如何自己实现 v-model v-model 的原理 ✅
8. 表单双向绑定、常用表单、修饰符 ❌
9. ajax 请求应该放在哪个生命周期 ✅
10. 组件间的通讯 props 与 \$emit 用法 ✅
11. 组件的生命周期 ✅
12. created 与 mounted 的区别 ✅
13. beforeDestroy 中经常采取一些什么操作 何时需要使用 beforeDestroy ✅
14. 为何组件 data 必须是一个函数 ✅
15. Vue 为何是异步渲染，\$nextTick 何用？ ✅
16. ref 的使用 ✅
17. slot 的使用 什么是作用域插槽 ✅
18. 动态组件与异步组件的使用 何时使用异步组件 ✅
19. 何时需要使用 keep-alive ✅
20. 多个组件有相同的逻辑，如何抽离？ mixin 的使用 ✅
21. 如何理解 MVVM ✅
22. 请描述响应式原理（监听 data 变化的核心 API 是什么，以及深度监听、监听数组，有何缺点 Vue 如何监听数组变化 + 描述组件渲染和更新过程） ✅
23. vdom 与 diff 简述 / diff 算法过程 / diff 算法的时间的复杂度
24. 关于循环列表渲染 为何在 v-for 中要使用 key
25. 用 vnode 描述一个 DOM 结构 ✅
26. 通用前端路由 ✅
27. 如何配置 Vue-router 异步加载 ✅
28. Vue-router 常用的路由模式 ✅
29. Vuex 中 action 和 mutation 有何区别 ✅
30. Vue 常见性能优化 ✅

## [Webpack](./Webpack相关)

1. 前端代码为何要进行构建和打包 ✅
2. module chunk bundle 分别什么意思，有何区别 ✅
3. loader 和 plugin 的区别 ✅
4. webpack 如何实现懒加载 ✅
5. webpack 常见性能优化 ✅
6. babel-runtime 和 babel-polyfill 的区别 ✅
7. webpack 的基本配置 ✅
8. 为何 Proxy 不能被 polyfill ✅
9. babel 和 webpack 的区别 ✅
10. loader 和 plugin 的区别 ✅
11. webpack 进行性能优化 ✅

## [HTTP](./HTTP相关)

1. 浏览器输入 url 到呈现出内容发生了什么/浏览器输入 URL 过程 \ 浏览器渲染过程 [JS 中有这个题] ✅
2. HTTP2.0 相比于 HTTP1.0 做了哪些优化 ✅
3. HTTP 与 HTTPS 有何区别，为什么现在 HTTPS 没有 HTTP1.1 普及 ✅
4. 常见 HTTP 状态码 ✅
5. HTTP 缓存 [强缓存、协商缓存] ✅
6. TCP 三次握手 四次挥手 ✅

## 安全

1. XSS 跨站脚本 ✅
2. CSRF 跨站请求伪造 ✅

## [设计模式](./设计模式)

1. 前端常用的设计模式有哪些 ✅

## [数据结构与算法](./算法)

1. 排序算法
2. 二叉树遍历
3. 二叉树反转
4. 二叉树高度
5. 用数组实现栈
6. 用数组实现队列
