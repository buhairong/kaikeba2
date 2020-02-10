import React,{useState,useEffect} from "react";
import "./index.css";
import Title from "./title";
import Input from "./input";
import List from "./list";
let prevData = window.localStorage.getItem("todo");
prevData = prevData?JSON.parse(prevData):[];
// setData 如果是对象类型的数据，在设置时一定返回一个新对象，否则 React 会认为我们没有修改，就不会重新渲染视图
function App(){
  let [data,setData] = useState(prevData);
  let add=(txt)=>{
    data.push({
      id: Date.now(),
      done: false,
      txt
    });
    setData([...data]);
  }
  let changeDone=(id,done)=>{
      data.forEach(item=>{
        if(item.id == id){
          item.done = done;
        }
      })
      setData([...data]);
  }
  let changeTxt=(id,txt)=>{
      data.forEach(item=>{
        if(item.id == id){
          item.txt = txt;
        }
      })
      setData([...data]);
  }
  let remove=(id)=>{
      setData(data.filter(item=>item.id!==id));
  }
  useEffect(()=>{
    window.localStorage.setItem("todo",JSON.stringify(data));
  },[data]);
  return (<div id="todoapp">
          <Title />
          <div className="content">
              <Input add={add} />
              <List
                data = {data}
                changeDone = {changeDone}
                remove = {remove}
                changeTxt = {changeTxt}
              />
          </div>
  </div>)
}
export default App;