import React,{Component} from 'react';
import context from "./context";
// class Child extends Component {
//     render(){
//       return (
//             <Consumer>
//                 {(props)=>{
//                     console.log(props);
//                     return <div></div>
//                 }}
//             </Consumer>
//       );
//     }
//   }
class Child extends Component {
    render(){
        console.log(this.context);
      return <div></div>;
    }
  }
  Child.contextType = context;  
export default Child;