import React, { Fragment } from 'react';
import {connect} from "react-redux";
function Inner(props) {
    console.log(props);
  let {name,age,dispatch} = props;  
  return (
    <Fragment>
         <p>name:{name}</p> 
         <p>age:{age}</p>
         <button
            onClick={()=>{
                dispatch({
                    type:"edit_name",
                    name: "开课吧"
                });
            }}
         >修改名字</button>  
    </Fragment>
  );
}

/*
    在哪个组件中需要使用 redux 中的数据，就调用 connect 对这个组件进行包装
    
        connect(state的处理函数)(组件)
            state的处理函数(state[,props])=>{
                return 要传给组件的数据
            }

*/


export default connect((state,props)=>{
    //console.log(props);
    return state.data;//connect 参数是一个函数，这个函数必须返回一个对象，connect 会把这个对象传递给我们组件的props
})(Inner);
