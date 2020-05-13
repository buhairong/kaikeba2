import React,{useEffect,useRef,useState} from "react";
function Child(props){
    let {name,setName} = props;
    let [age,setAge] = useState(9);
    let prevName = useRef(name);
    let prevAge = useRef(age);
    useEffect(()=>{
        console.log("组件挂载完之后执行");
        return ()=>{
            console.log("组件即将卸载");
        }
    },[]);
    useEffect(()=>{
        if(prevName.current!==name
        ||prevAge.current!==age){
            console.log("组件更新完成之后");
            prevName.current=name;
            prevAge.current=age;
        }
    },[name,age]);
    return <div>
        <p>{name}</p>
        <input 
            type="text" 
            value = {name}
            onChange={({target})=>{
                setName(target.value);
            }}
        />
        <p>{age}</p>
        <input 
            type="text" 
            value = {age}
            onChange={({target})=>{
                setAge(target.value);
            }}
        />
    </div>
}

export default Child;