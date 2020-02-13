import React,{useState, useEffect, Fragment} from "react";
import {useParams} from "react-router-dom";
import PageNav from "./pageNav";
import List from "./list";
import getData from "../http"
export default function Inner(){
    let [data,setData] = useState([]);
    let {type,page} = useParams();
    let [isLoad,setLoad] = useState(false);
    useEffect(()=>{
        if(!isLoad){
            getData(type,page)
            .then((res)=>{
                setData(res.data.data);
                setLoad(true);
            })
        }
    },[isLoad]); 
    useEffect(()=>{
        setLoad(false);
    },[type,page]);
    return <div>{
        (!isLoad)?(<div>
            数据请求中
        </div>):(
            <Fragment>
                <List data = {data} />
                <PageNav />
            </Fragment>   
        )  
    }
    </div>
}