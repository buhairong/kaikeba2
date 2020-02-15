import getData from "../http/index";
import {useDispatch} from "react-redux";
/*function toLoad(dispatch,type,page){
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
}*/
function useLoad(){
    let dispatch = useDispatch();
    return function(page,type){
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
    }
}

export {useLoad}