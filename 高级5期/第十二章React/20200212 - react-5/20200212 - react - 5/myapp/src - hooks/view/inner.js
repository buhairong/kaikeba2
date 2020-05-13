import React from 'react';
import {useHistory,useLocation,useParams, useRouteMatch} from "react-router-dom";
function Inner() {
  let {goBack} = useHistory();
  console.log(useLocation());
  console.log(useParams());
  console.log(useRouteMatch());
  return (
    <div>
        <p>当前的路由信息是:</p>
        <button
            onClick={()=>{
                goBack();
            }}
        >返回上一页</button>
    </div>
  );
}
export default Inner;
