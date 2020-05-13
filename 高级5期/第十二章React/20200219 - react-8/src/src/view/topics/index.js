import React, { useEffect, Fragment } from "react";
import {useParams} from "react-router-dom";
import {useTopic} from "../../store/action/index";
import { useSelector } from "react-redux";
import Topic from "./topic";
import Replies from "./replies";
export default function TopicsPage(){
    let {id} = useParams();
    let getTopic = useTopic();
    let {load,data} = useSelector(state=>state.topics);
    let {title,content,replies} = data;
    useEffect(()=>{
        getTopic(id);
    },[id]);
    return <div 
    className={"topic_card"}>
        <Topic 
           load = {load}
           title = {title}
           content = {content} 
        />
        <Replies 
            load={load}
            data={replies}
        />
    </div>
}