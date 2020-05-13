import React from "react";
import {useSelector} from "react-redux";
function Footer(){
    let data = useSelector(state=>(state.filter(item=>item.number>0)));
    let number = data.reduce((n1,n2)=>{
        return n1 + n2.number
    },0);
    let allPrice = data.reduce((n1,n2)=>{
        return n1 + n2.number*n2.price;
    },0);
    let maxPrice = data.reduce((n1,n2)=>{
        return Math.max(n1,n2.price);
    },0);
    return (<footer>总计:{number}件商品,共计花费{allPrice}元,最贵单价为{maxPrice}元</footer>)
}

export default Footer;