import React from "react";
import {useSelector} from "react-redux";
function List(){
    let data = useSelector(state=>state.data);
    return (<div>
        {data.map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </div>)
}

export default List;