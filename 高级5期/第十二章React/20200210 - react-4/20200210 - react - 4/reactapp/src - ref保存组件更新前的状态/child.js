import React,{useEffect,useRef,useState} from "react";
function Child(props){
    let {name,setName} = props;
    let [age,setAge] = useState(9);
    let ageP = useRef(name);//只要不做修改 ref 这会就存储 name 初始时的值
    useEffect(()=>{
        console.log(ageP.current,name);//更新前的值
        ageP.current = name;// 和当前值 同步
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