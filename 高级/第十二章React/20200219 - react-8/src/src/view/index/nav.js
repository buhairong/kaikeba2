import React from "react";
import {indexNav} from "../../router/index";
import { Menu } from "antd";
import { Link,useLocation } from "react-router-dom";
let parse = require("url").parse;
export default function Nav(){
    let {search} = useLocation();
    search = parse(search,true).query;
    let activeIndex = search.tab?indexNav.findIndex(item=>{
        return item.url.split("=")[1] === search.tab;
    }):0;
    return <Menu 
        mode="horizontal"
        defaultSelectedKeys={[activeIndex+""]}
    >
        {
            indexNav.map((item,index)=>{
                return <Menu.Item key={index}><Link to={item.url}>{item.name}</Link></Menu.Item>
            })
        }
    </Menu>
}