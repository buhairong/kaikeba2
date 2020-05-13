import React from "react";
import { Redirect } from "react-router-dom";
import Inner from "../component/inner";
import Page404 from "../component/page404";
const types = ["all","good","share","dev","ask","job"];
const router = [
    {
        path: "/",
        exact: true,
        render:()=>{
            return <Redirect to="/all/1" />
        }
    },{
        path: "/:type/:page",
        exact: true,
        render:(props)=>{
            let {pathname} = props.location;
            pathname = pathname.split("/");
            if(types.includes(pathname[1])
            && pathname[2]>0){
                return <Inner />
            }
            return <Page404 />;
        }
    },{
        path: "/:type",
        exact: true,
        render:(props)=>{
            let {pathname} = props.location;
            pathname = pathname.split("/");
            if(types.includes(pathname[1])){
                return <Redirect to={`/${pathname[1]}/1`} />
            }
            return <Page404 />;
        }
    },{
        path: "",
        exact: false,
        render:()=>{
            return <Page404 />
        }
    }
];

export default router;