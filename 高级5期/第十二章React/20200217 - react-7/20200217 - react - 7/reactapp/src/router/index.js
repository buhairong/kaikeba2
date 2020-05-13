import React from "react";
import IndexPage from "../view";
import GetStartPage from "../view/getstart";
import AboutPage from "../view/about";
import TopicsPage from "../view/topics";
import UserPage from "../view/user";
import Page404 from "../view/page404";

const route = [
    {
        path: "/",
        exact: true,
        render(props){
            return <IndexPage {...props} />    
        }
    },{
        path: "/getstart",
        exact: true,
        render(props){
            return <GetStartPage {...props} />    
        }
    },{
        path: "/about",
        exact: true,
        render(props){
            return <AboutPage {...props} />    
        }
    },{
        path: "/topics/:id",
        exact: true,
        render(props){
            return <TopicsPage {...props} />    
        }
    },{
        path: "/user/:loginname",
        exact: true,
        render(props){
            return <UserPage {...props} />    
        }
    },{
        path: "",
        exact: true,
        render(props){
            return <Page404 {...props} />    
        }
    }
];

const nav = [
    {
        name:"首页",
        url :"/",
        exact: true
    },{
        name:"新手入门",
        url :"/getstart",
        exact: true
    },{
        name:"关于",
        url :"/about",
        exact: true
    }
];

export {nav,route};