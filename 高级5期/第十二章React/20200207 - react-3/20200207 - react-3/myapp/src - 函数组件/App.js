import React from "react";

// 函数组件
/*
  组件的第0个参数是 props - 接收父级传递进来的信息
  组件的 return 定义该组件要渲染的内容

  没有生命周期，没有this，也没有 state

  在 16.7 之前函数组件 一直当做纯渲染组件使用
*/
function Child(props){
  return <h1>{props.info}</h1>
}
function App(){
  return <Child info="呵呵" />
}

export default App;