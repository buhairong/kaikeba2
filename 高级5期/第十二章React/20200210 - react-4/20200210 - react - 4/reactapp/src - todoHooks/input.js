import React,{useState} from "react";
function Input(props){
    let [val,setVal] = useState("");
    let {add} = props; 
    return (<div id="create-todo">
                <input 
                    id="new-todo" 
                    placeholder="What needs to be done?" 
                    autoComplete="off" 
                    type="text"
                    value={val} 
                    onChange={({target})=>{
                        setVal(target.value)
                    }}
                    onKeyDown={({keyCode})=>{
                        if(keyCode==13){
                            if(!val.trim()){
                                alert("输入点内容吧")
                            } else {
                                add(val); 
                                setVal("");
                            }
                        }
                    }}
                />
        </div>)
  }
export default Input;