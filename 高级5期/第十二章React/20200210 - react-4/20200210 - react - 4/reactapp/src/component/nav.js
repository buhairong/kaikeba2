import React from "react";
import {NavLink} from "react-router-dom"
export default function Nav(){
    return (<nav>
        <NavLink 
            to="/"
            exact
            activeStyle={{
                color: "red"
            }}
        >首页</NavLink>
        <span> | </span>
        <NavLink 
            to="/about"
            exact
            activeStyle={{
                color: "red"
            }}
        >关于我们</NavLink>
        <span> | </span>
        <NavLink 
            to="/join"
            exact
            activeStyle={{
                color: "red"
            }}
        >加入我们</NavLink>
        <span> | </span>
        <NavLink 
            to="/server"
            exact
            activeStyle={{
                color: "red"
            }}
        >服务</NavLink>
    </nav>)
};