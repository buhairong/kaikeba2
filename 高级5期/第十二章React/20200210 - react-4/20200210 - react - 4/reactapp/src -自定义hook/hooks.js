import React,{useState} from "react";

function useSize(){
    //去写通用的逻辑 -- 类似之前在项目的一些工具函数 
    return {
        w: window.innerWidth,
        h: window.innerHeight
    }
}

// 获取滚动条 和 设置滚动条
function useScrollY(){
    let [scrollY,setY] = useState(window.scrollY);
    return [
        scrollY,
        (newScrollY)=>{
            window.scrollTo(0,newScrollY);
            setY(newScrollY);
        }
    ]
    
}

export {useSize,useScrollY}