import React from 'react';
import {withRouter} from "react-router-dom";
function Inner(props) {
  console.log(props);
  return (
    <div>
        <p>当前的路由信息是:</p>
        <button>返回上一页</button>
    </div>
  );
}
export default withRouter(Inner);
