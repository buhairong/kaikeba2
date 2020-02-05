import React,{createContext} from 'react';
let context = createContext();
let {Consumer, Provider } = context;
export default context;
export {
    Consumer,
    Provider
}