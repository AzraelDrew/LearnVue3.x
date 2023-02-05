# LearnVue3.x

Vue3.x 学习记录

- computed(对象) 对 data 中的数据进行一些简单的操作 computed 会缓存数据 只有当依赖的 data 属性变化时才会重新执行 在计算属性中调用其他方法也会缓存 可以像 data 一样在 html 中使用

- methods(对象) 对逻辑的处理 适合复杂的逻辑或提取公用的逻辑 与普通 js 函数类似 如点击事件 不会缓存数据 可以在 watch 或者 computed 中调用 响应 data 数据的变化 可以有返回值或者没有

- watch(对象) 当某一数据发生改变时需要进行的操作 直接修改 data 没有返回值需要设置一个变量 函数名为 data 中的变量名(若是 data 中的变量是数组 watch 则需要使用对象)
