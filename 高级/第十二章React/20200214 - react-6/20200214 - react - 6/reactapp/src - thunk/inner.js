import React, { Fragment } from 'react';
import {useSelector,useStore,useDispatch} from "react-redux";
function Inner() {
  let {name,age,edit_state} = useSelector(state=>{
        return state.data;
  });
  let dispatch = useDispatch();
  return (
    <Fragment>
         <p>{edit_state}</p>
         <p>name:{name}</p> 
         <p>age:{age}</p>
         <button
            onClick={()=>{
                dispatch(function(dispatch,getState){
                    dispatch({
                        type:"edit_state",
                        state: "准备操作name"
                    });
                    setTimeout(()=>{
                      dispatch({
                          type:"edit_name",
                          name: "开课吧"
                      });
                      dispatch({
                          type:"edit_state",
                          state: "无操作"
                      });
                    },2000);
                    //console.log(dispatch,getState);
                });//使用 thunk 中间件之后，dispatch 就可以接收一个函数
            }}
         >修改名字</button>  
    </Fragment>
  );
}


export default Inner;
