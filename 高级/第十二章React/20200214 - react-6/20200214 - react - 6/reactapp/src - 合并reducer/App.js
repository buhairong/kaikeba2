import React from 'react';
import {createStore,combineReducers} from "redux";
/*
  index 的数据要管理
  message 的数据要管理
  list 的数据要管理

*/
function index(state={info:"首页的数据"},action){
  switch(action.type){
      case "index_edit_info":
          return {
            info: action.info
          }
  } 
  return state;
}
function list(state={info:"列表页的数据"},action){
  switch(action.type){
    case "list_edit_info":
        return {
          info: action.info
        }
} 
return state;
}
// function reducer(state={},action){
//   return {
//     index: index(state.index,action),
//     list: list(state.list,action)
//   }
// }
let reducer = combineReducers({
  index,
  list
})
let store = createStore(reducer);
store.dispatch({
  type:"index_edit_info",
  info: "新的首页信息"
});
console.log(store.getState());

function App() {
  return (
    <div className="App"></div>
  );
}

export default App;
