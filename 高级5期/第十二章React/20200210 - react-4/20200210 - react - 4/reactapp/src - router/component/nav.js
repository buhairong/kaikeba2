import React from "react";
import {NavLink} from "react-router-dom"
export default function Nav(){
    return (<nav>
        <NavLink 
            to="/"
            exact
            activeClassName="active"
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
        >关于</NavLink>
        <span> | </span>
        <NavLink
             to="/about/more"
             activeStyle={{
                color: "red"
            }}
        >关于详情</NavLink>
    </nav>)
};