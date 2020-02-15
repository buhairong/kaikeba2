import getData from "../http/index";
function toLoad(dispatch,type,page){
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

export {toLoad}