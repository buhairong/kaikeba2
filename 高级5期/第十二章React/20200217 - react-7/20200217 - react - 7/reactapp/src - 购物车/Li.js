import React from "react";
import {useDispatch} from "react-redux";
function Li(props){
    let {id,name,price,number} = props.data;
    let dispatch = useDispatch();
    return (<li>
            {name} - {price}元/件 - 共<button
                onClick={()=>{
                    dispatch({
                        type: "minus",
                        id
                    })
                }}
            >-</button>{number}<button
                onClick={()=>{
                    dispatch({
                        type: "plus",
                        id
                    })
                }}
            >+</button> - 共{price*number}元
    </li>)
}

export default Li;