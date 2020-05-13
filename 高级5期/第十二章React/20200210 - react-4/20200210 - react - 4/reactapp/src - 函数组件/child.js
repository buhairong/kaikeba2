import React,{useEffect,useState} from "react";
function Child(props){
    let {name,setName} = props;
    let [age,setAge] = useState(9);
    useEffect(()=>{
        console.log("组件挂载完成和更新完成");
    },[name]);
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