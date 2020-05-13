import React,{useState} from "react";
import Child from "./child";
/*
  let [状态的值, 修改状态的方法] = useState(状态的初始值);
*/
function App(){
  let [data,setData] = useState({
    name: "kkb",
    age: 8
  });
  return (<div>
      <Child 
          data = {data}
      />
      <button
        onClick={()=>{
          setData({
            name:"开课吧集团",
            age: data.age
          });
        }}
      >升级</button>
  </div>)
}

export default App;