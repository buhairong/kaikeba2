import React, { Fragment } from 'react';
import {useSelector,useStore,useDispatch} from "react-redux";
function Inner() {
  let {name,age} = useSelector(state=>{
        return state.data;
  });
  let dispatch = useDispatch();
  //console.log(useStore());
  //console.log();
  return (
    <Fragment>
         <p>name:{name}</p> 
         <p>age:{age}</p>
         <button
            onClick={()=>{
                dispatch({
                    type:"edit_name",
                    name:"开课吧"
                });
            }}
         >修改名字</button>  
    </Fragment>
  );
}


export default Inner;
