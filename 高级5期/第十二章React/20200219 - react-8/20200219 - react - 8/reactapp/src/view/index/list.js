import React, { useEffect } from "react";
import { List } from "antd";
import {useTopicsList} from "../../store/action/index";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
let parse = require("url").parse;
export default function IndexList(){
    let getData = useTopicsList();
    let {loading,data} = useSelector(state=>state.list);
    let {search} = useLocation();
    let {tab,page} = parse(search,true).query;
    useEffect(()=>{
        getData(tab,page);
    },[tab,page]);
    return <List 
        dataSource={data}
        loading={loading}
        style={{
            padding: "5px 15px"
        }}
        renderItem={(itemData)=>{
            return <List.Item style={{
                paddingLeft:10
            }}><Link to={`/topics/${itemData.id}`}>{itemData.title}</Link></List.Item>
        }}
    />
}