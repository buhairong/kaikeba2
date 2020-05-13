import React, { useState,useRef, useEffect} from "react";
function Li(props){
    let {data,changeDone,remove,changeTxt} = props;
    let {done,txt,id} = data;
    let [isEdit,setEdit] = useState(false);
    let [inputVal,setInputVal] = useState(txt);
    let input = useRef();
    useEffect(()=>{
        if(isEdit){
            input.current.focus();
        }
    },[isEdit])
    return (<li className={isEdit?"editing":""}>
        <div className={`todo ${done?"done":""}`}>
            <div className="display">
                <input 
                    className="check" 
                    type="checkbox"
                    checked={done}
                    onChange={({target})=>{
                        changeDone(id,target.checked)
                    }}
                />
                <div 
                    className="todo-content"
                    onDoubleClick = {()=>{
                        setEdit(true);
                    }}
                >{txt}</div>
                <span 
                    className="todo-destroy"
                    onClick={()=>{
                        remove(id);
                    }}
                ></span>
            </div>
            <div className="edit">
                <input 
                    className="todo-input" 
                    type="text" 
                    value={inputVal}
                    ref= {input}
                    onChange={({target})=>{
                        setInputVal(target.value);
                    }}
                    onBlur={()=>{
                        if(inputVal.trim()){
                            changeTxt(id,inputVal);
                        } else {
                            setInputVal(txt);
                        }
                        setEdit(false)
                    }}
                />
            </div>
        </div>
    </li>)
}
export default Li;