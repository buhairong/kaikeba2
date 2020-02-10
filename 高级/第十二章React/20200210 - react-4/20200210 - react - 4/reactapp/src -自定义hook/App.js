import React,{useState,useEffect} from "react";
import {useSize,useScrollY} from "./hooks";
function App(){
    let [scrollY,setScroll] = useScrollY();
    useEffect(()=>{
        window.onscroll = ()=>{
          setScroll(window.scrollY);
        }
        return ()=>{
          window.onscroll = null;
        }
    },[])
    return <div>
          <ul>
              {
                [...(".".repeat(100))].map((item,index)=>{
                  return <li key={index}>这是第{index}个li</li>
                })
              }
          </ul>
          <a onClick={()=>{
            setScroll(100);
          }}
            style={{
              position: "fixed",
              top: "100px"
            }}
          >{scrollY}</a>
    </div>;
}

export default App;