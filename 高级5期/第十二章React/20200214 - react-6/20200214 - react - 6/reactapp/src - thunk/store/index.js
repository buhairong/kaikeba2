import {createStore,combineReducers,applyMiddleware} from "redux";
import data from "./reducer";
import thunk from "redux-thunk";
let reducer = combineReducers({data});
export default createStore(reducer,applyMiddleware(thunk));