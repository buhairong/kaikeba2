import React,{useState} from "react";
import Child from "./child";
import Child2 from "./child2";
/*
  let [状态的值, 修改状态的方法] = useState(状态的初始值);
*/
function App(){
  let [name,setName] = useState("kkb");
  let [isShow,setShow] = useState(true)
  return (<div>
      {isShow?<Child 
          name = {name}
      />:""}
      <button
        onClick={()=>{
          setName("开课吧集团");
        }}
      >升级</button>
      <button
        onClick={()=>{
          setShow(false)
        }}
      >卸载</button>
      <Child2 />
  </div>)
}

export default App;