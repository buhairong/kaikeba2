import React,{Component} from "react";
import Li from "./li";
function List(props){
   let {data} = props;  
    return (<ul id="todo-list">
            {
                data.map((item,index)=>{
                    return <Li 
                        key = {item.id} 
                        {...props}
                        data ={item}
                    />
                })
            }
    </ul>)
}

export default List;