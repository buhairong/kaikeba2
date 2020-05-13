import {useDispatch} from "react-redux";

function useTopicsList(){
    let dispatch = useDispatch();
    return function(tab="all",page=1,limit=20,mdrender=true){
        
    }
}

export {useTopicsList}