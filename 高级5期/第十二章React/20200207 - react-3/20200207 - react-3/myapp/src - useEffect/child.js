import React,{useState,useEffect} from "react";
function Child(props){
  let {name} = props;
  let [age,setAge] = useState(8);
//   useEffect(()=>{
//       // 副作用函数
//       console.log("监听到组件更新之后或挂载之后");
//       return ()=>{
//           console.log("即将卸载时要做的事情");
//       }
//   },[name]);
  
    useEffect(()=>{
        console.log("挂载完成之后要做的事情");
        return ()=>{
            console.log("即将卸载")
        } 
    },[]);
    useEffect(()=>{
        console.log("监听到组件更新之后或挂载之后");
    });
  return (<div>
        <p>name:{name}</p>
        <p>age:{age}</p>
        <button
            onClick={()=>{
                setAge(++age); 
            }}
        >长一岁</button>
  </div>)
}

export default Child;