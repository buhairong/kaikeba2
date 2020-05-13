import React from "react";
export default function List(props){
    let {data} = props;
    console.log(data);
    return (
        <ul>
            {
                data.map((item)=>{
                    return (<li 
                        key={item.id}
                    >{item.title}</li>)
                })
            }
        </ul>
    );
}