import React,{Component} from "react";
import context,{Consumer} from "./context"
// class SubChild extends Component {
//     render(){
//         return (<div>
//                 <Consumer>
//                     {(value)=>{
//                         console.log(value);
//                         return value.info
//                     }}
//                 </Consumer>
//         </div>);
//     }
// }
class SubChild extends Component {
    static contextType = context;
    render(){
        console.log(this.context);
        return (<div>
        </div>);
    }
}
//SubChild.contextType = context;

export default SubChild;