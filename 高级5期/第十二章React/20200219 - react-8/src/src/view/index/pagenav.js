import React from "react";
import {Pagination} from "antd";
import { Link,useLocation } from "react-router-dom";
let parse = require("url").parse;
export default function PageNav(){
    let {search} = useLocation();
    search = parse(search,true).query;
    let tab = search.tab||"all";
    let page = search.page||1;
    return <Pagination
         defaultCurrent={page-0} 
         total={5000} 
         size="small"
         style={{
            background:"#fff"
        }}
         itemRender={(page,pageType)=>{
             if(pageType == "page"){
                return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>;
             } else if(pageType == "prev"){
                return <Link to={`/?tab=${tab}&page=${page}`}>prev</Link>;
             }else if(pageType == "next"){
                return <Link to={`/?tab=${tab}&page=${page}`}>next</Link>;
             } else {
                return <Link to={`/?tab=${tab}&page=${page}`}>…</Link>; 
             }
         }}
         showLessItems = {false}
         style={{
             borderTop: "1px solid #e8e8e8",
             padding: "10px 20px"
         }}
    ></Pagination>
}