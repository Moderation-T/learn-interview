- JSX 基本使用

  > 变量、表达式
  > class style
  > 子元素和组件

- 渲染列表

  > map、key

- 事件

  > bind this：不 bind this 的话 this 的值为 undefined ，如果不适用 bind this 可以使用箭头函数
  > 关于 event 参数：event.preventDefault()组织默认事件；event.stopPropagation()组织冒泡；
  > react 的 event 是 SyntheticEvent，模拟出 DOM 所有的能力，event.nativeEvent 是原生事件对象，触发的是当前元素 所有的事件都被挂在到 document 上 ，和 DOM 事件与 Vue 事件都不一样；Vue event 是原生的 绑定与触发都是当前元素
  > 事件传递自定义参数：在最后可以追加 event 参数

- 表单

  > 受控组件、非受控组件: 受控 - value onChange 、
  > input textarea radio checkbox ...

- 组件使用

  > props 传递数据
  > props 传递函数
  > props 类型检查
  > 状态（数据）提升

- setState

  > 不可变值：this.state.count 这种用法是错误的，不可以直接操作 state 值
  > 可能是异步更新：直接使用是异步的 this.setState 异步情况拿到最新值可以使用第二个参数进行 callback 操作。在 setTimeout 中 this.setState 是同步的，自定义的 DOM 事件中 setState 是同步的。
  > 可能会被合并：传入对象，会被合并，几次 setState 操作执行结果只执行一次。传入函数不会被合并。

- 组件生命周期
  > 单组件生命周期：
  > 挂载时：construct render ComponentDidMount
  > 更新时：render ComponentDidUpdate
  > 卸载时：ComponentWillunMount
  > 父子组件的生命周期：

![生命周期](./resource/001/生命周期.jpg)
