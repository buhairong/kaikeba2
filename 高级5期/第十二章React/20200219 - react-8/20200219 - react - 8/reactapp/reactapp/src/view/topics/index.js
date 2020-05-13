import React, { useEffect } from "react";
import Topic from "./topic";
import { useParams } from "react-router-dom";
import { useTopic } from "../../store/action";
import { useSelector } from "react-redux";
import Replies from "./replies";
export default function TopicsPage(){
    let {id} = useParams();
    let getData = useTopic();
    let {loading,data} = useSelector(state=>state.topic);
    let {title,content,replies} = data;
    useEffect(()=>{
        getData(id);
    },[id])
    return <div className="topic">
        <Topic 
            loading={loading}
            title = {title}
            content = {content}
        />
        <div style={{
            height: 10,
            background: "#f0f2f5"
        }}></div>
        <Replies
            loading={loading}
            data = {replies}
        />
    </div>
}