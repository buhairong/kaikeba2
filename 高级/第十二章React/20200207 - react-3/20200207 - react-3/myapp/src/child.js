import React,{useState,useEffect,useRef} from "react";
// let ageP = useRef(初始值);
function Child(props){
    let {name} = props;
    let [age,setAge] = useState(8);
    let ageP = useRef();
    useEffect(()=>{
       console.log(ageP);
    });
    return (<div>
        <p>name:{name}</p>
        <p ref={ageP}>age:{age}</p>
        <button
            onClick={()=>{
                setAge(++age); 
            }}
        >长一岁</button>
    </div>)
}

export default Child;