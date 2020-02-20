import {useDispatch} from "react-redux";
import http from "../http";
function useTopicsList(){
    let dispatch = useDispatch();
    return function(tab="all",page=1,limit=20,mdrender=true){
        dispatch({
            type:"list_loading"
        });
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res)=>{
            dispatch({
                type:"list_loadOver",
                data: res.data.data
            });
        })
    }
}
function useTopic(){
    let dispatch = useDispatch();
    return function(id){
        dispatch({
            type:"topic_loading"
        });
        http.get(`/topic/${id}`).then((res)=>{
            dispatch({
                type:"topics_loadOver",
                data: res.data.data
            });
        })
    }
}

export {useTopicsList,useTopic}