import React,{useState,useEffect, Fragment} from "react";
import getData from "../http/index";
import {useParams} from "react-router-dom";
import List from "./list";
import FooterNav from "./footerNav";
import {useDispatch,useSelector} from "react-redux";
function Inner(){
    let {type,page} = useParams();
    let dispatch = useDispatch();
    let load = useSelector(state=>state.load);
    useEffect(()=>{
        dispatch({
            type:"load_start"
        })
        getData(type,page)
            .then((res)=>{
                console.log(res);
                dispatch({
                    type:"load_end",
                    data: res.data.data
                });
            });
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