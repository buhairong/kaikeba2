import React, { useEffect } from "react";
import { List } from "antd";
import {useSelector} from "react-redux";
import {useTopicsList} from "../../store/action";
import { useLocation, Link } from "react-router-dom";
let parse = require("url").parse;
export default function IndexList(){
    let listData = useSelector(state=>state.list);
    let getListData = useTopicsList();
    let {search} = useLocation();
    search = parse(search,true).query;
    useEffect(()=>{
        getListData(search.tab,search.page);
    },[useLocation().search]);
    return <List
        loading={listData.load}
        dataSource={listData.data}
        style={{
            background:"#fff"
        }}
        renderItem={(itemData)=>{
            return <List.Item style={{padding:"10px 30px"}}><Link to={`/topics/${itemData.id}`}>{itemData.title}</Link></List.Item>
        }}
    />;
}