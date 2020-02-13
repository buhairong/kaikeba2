import React from "react";
import {Redirect} from "react-router-dom";
import Inner from "../component/inner";
import Page404 from "../component/page404";
const types = ["all","good","share","dev","ask","job"]
const nav = [
    {
        url: "/all/1",
        exact: true,
        txt: "全部"
    },{
        url: "/good/1",
        exact: true,
        txt: "精华"
    },{
        url: "/share/1",
        exact: true,
        txt: "分享"
    },{
        url: "/ask/1",
        exact: true,
        txt: "问答"
    },{
        url: "/job/1",
        exact: true,
        txt: "招聘"
    },{
        url: "/dev/1",
        exact: true,
        txt: "客户端测试"
    }
];
const router = [
    {
        path:"/",
        exact: true,
        render:(props)=>{
            return <Redirect to="/all/1" />;
        }
    },{
        path: "/:type/:page",
        exact: true,
        render:(props)=>{
            console.log(props);
            let {type,page} = props.match.params;
            if(types.includes(type)&&page>0){
                return <Inner {...props} />;
            }
            return <Page404 />;
        }
    },{
        path: "/:type",
        exact: true,
        render:(props)=>{
            let {type} = props.match.params;
            if(types.includes(type)){
                return <Redirect to={`/${type}/1`} />;
            }
            return <Page404 />;
        }
    },{
        path: "",
        exact: false,
        render:()=>{
            return <Page404 />;
        }
    }
];
export {router,nav};