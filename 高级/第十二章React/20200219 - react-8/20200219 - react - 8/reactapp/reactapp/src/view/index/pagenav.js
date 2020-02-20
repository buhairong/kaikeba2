import React from "react";
import {Pagination} from "antd";
import { useLocation, useHistory, Link } from "react-router-dom";
let parse = require("url").parse;
export default function PageNav(){
    let {search} = useLocation();
    search = parse(search,true).query;
    let {tab,page} = search;
    tab = tab||"all";
    page = page||1;
    return (<div style={{
        borderTop: "1px solid #e8e8e8",
        padding: "5px 30px"
    }}>
        <Pagination 
            current={page-0} 
            total={50000} 
            itemRender={(page,type)=>{
                switch(type){
                    case "page":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                    case "prev":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
                    case "next":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
                        default:
                            return <Link to={`/?tab=${tab}&page=${page}`}>…</Link>
                }
            }}
        /> 
    </div>)
}
// export default function PageNav(){
//     let {push} = useHistory(); 
//     let {search} = useLocation();
//     search = parse(search,true).query;
//     let {tab,page} = search;
//     tab = tab||"all";
//     return (<div style={{
//         borderTop: "1px solid #e8e8e8",
//         padding: "5px 30px"
//     }}>
//         <Pagination 
//             defaultCurrent={page-0} 
//             total={50000} 
//             onChange={(page)=>{
//                 push(`/?tab=${tab}&page=${page}`);
//             }}
//         /> 
//     </div>)
// }