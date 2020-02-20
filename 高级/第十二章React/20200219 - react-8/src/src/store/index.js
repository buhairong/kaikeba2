import {createStore,combineReducers} from "redux";
import list from "./reducer/list";
import topics from "./reducer/topics";
export default createStore(combineReducers({list,topics}));