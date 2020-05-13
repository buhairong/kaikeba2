import React,{useState} from "react";
import {useDispatch} from "react-redux";
function Add(){
    let [name,setName] = useState("");
    let [price,setPrice] = useState("");
    let dispatch = useDispatch();
    return <div>
        添加商品:
            <input 
                type="text" 
                placeholder="请输入商品名称"
                value={name}
                onChange={({target})=>{
                    setName(target.value);
                }}
            />
            <input 
                type="text" 
                placeholder="请输入商品价格"
                value = {price}
                onChange={({target})=>{
                    setPrice(parseFloat(target.value));
                }}
            />
            <button onClick={()=>{
                dispatch({
                    type: "add",
                    data: {
                        id: Date.now(),
                        name,
                        price,
                        number: 1 
                    }
                });
                setName("");
                setPrice("");
            }}>添加商品</button>
    </div>;
}

export default Add;