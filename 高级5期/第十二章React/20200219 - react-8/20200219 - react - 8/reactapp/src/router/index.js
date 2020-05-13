import React from "react";
import IndexPage from "../view/index/index";
import GetStartPage from "../view/getstart/index";
import AboutPage from "../view/about/index";
import TopicsPage from "../view/topics/index";
import UserPage from "../view/user/index";
import Page404 from "../view/page404/index";

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
        url :"/"
    },{
        name:"新手入门",
        url :"/getstart"
    },{
        name:"关于",
        url :"/about"
    }
];

const indexNav = [
    {
        name:"全部",
        url :"/?tab=all"
    },{
        name:"精华",
        url :"/?tab=good"
    },{
        name:"分享",
        url :"/?tab=share"
    },{
        name:"问答",
        url :"/?tab=ask"
    },{
        name:"招聘",
        url :"/?tab=job"
    },{
        name:"客户端测试",
        url :"/?tab=dev"
    }
];

export {nav,route,indexNav};