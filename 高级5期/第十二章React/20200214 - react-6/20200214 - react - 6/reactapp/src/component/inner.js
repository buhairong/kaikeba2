import React,{useEffect, Fragment} from "react";
import {useParams} from "react-router-dom";
import List from "./list";
import FooterNav from "./footerNav";
import {useLoad} from "../store/action";
import {useSelector} from "react-redux";
function Inner(){
    let {type,page} = useParams();
    let toLoad = useLoad();
    let load = useSelector(state=>state.load);
    useEffect(()=>{
        // dispatch((dispatch)=>{
        //     toLoad(dispatch,type,page);
        // });
        toLoad(page,type);
    },[type,page]);
    return <div>
        {load?
            <p>请求数据中</p>
            :(
                <Fragment>
                <List />
                <FooterNav />
            </Fragment>
        )}
        
    </div>
}

export default Inner;