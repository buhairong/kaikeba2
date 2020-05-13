import React,{Component} from "react";
/*
React 事件：
 1. onClick -- 注意大小写
 2. 注意 react 的事件处理函数，默认 this 是 undefined 

*/
// class Dl extends Component {
//     render(){
//         return (<a onClick={function(){
//             console.log(this); // undefined
//         }}>点击事件</a>);
//     }
// }
// 使用箭头函数
// class Dl extends Component {
//     render(){
//         return (<a onClick={()=>{
//             console.log(this);// Dl
//         }}>点击事件</a>);
//     }
// }
// 通过 bind 绑定 this
// class Dl extends Component {
//     constructor(props){
//         super(props);
//         this.handle = this.handle.bind(this);
//     }
//     handle(){
//         console.log(this);
//     }
//     render(){
//         return (<a onClick={this.handle}>点击事件</a>);
//     }
// }
class Dl extends Component {
    handle=(e)=>{
        console.log(this,e.target);
    }
    render(){
        return (<a onClick={this.handle}>点击事件</a>);
    }
}

export default Dl;