import React from 'react';
import {createStore} from "redux";

/*
纯函数:
  function reducer(state=state的默认值,action){

  }
*/
function reducer(state={},action){
    //console.log(state,action);
    switch(action.type){
        case "edit_name":
          return {
              ...state,
              name: action.name
          } 
        case "edit_age":
            return {
                ...state,
                age: action.age
            }    
    }
    return state;
}
/*
  createStore(reducer) 用来创建一个仓库(store),在仓库中对我们的状态进行管理
    reducer 纯函数用来对 state 进行管理
        

*/
let store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({
  type:"edit_name",
  name:"kkb"
});
//console.log(store.getState());
store.dispatch({
  type:"edit_age",
  age: 9
});
//console.log(store.getState());
/*
  dispatch: ƒ dispatch(action) -- 发起一个修改动作
    dispatch(action)
        action: {
            type: "做了什么修改"
        }
  getState: ƒ getState() -- 获取 state
  replaceReducer: ƒ replaceReducer(nextReducer) -- 替换掉 reducer
  subscribe: ƒ subscribe(listener) -- 监听状态修改
*/




function App() {
  return (
    <div className="App"></div>
  );
}

export default App;
