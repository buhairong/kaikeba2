import React from "react";
function List(props){
    let {data} = props;
    return (<div>
        {data.map((item)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </div>)
}

export default List;