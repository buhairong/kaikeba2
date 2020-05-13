import React,{useEffect,useRef,useState} from "react";
function Child(props){
    let {name,setName} = props;
    let [age,setAge] = useState(9);
    let ageP = useRef();
    useEffect(()=>{
        console.log(ageP.current)
    });
    return <div>
        <p>{name}</p>
        <input 
            type="text" 
            value = {name}
            onChange={({target})=>{
                setName(target.value);
            }}
        />
        <p
            ref={ageP}
        >{age}</p>
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