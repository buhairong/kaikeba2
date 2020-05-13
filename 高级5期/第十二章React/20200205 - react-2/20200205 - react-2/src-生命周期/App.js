import React,{Component} from "react";
import Child from "./child";
class App extends Component {
  state = {
    name: "kkb",
    isShow: true
  }
  changeName=()=>{
    this.setState({
      name: "开课吧集团"
    });
  }
  render(){
    let {isShow} = this.state;
    return <div>
      {
        isShow? <Child
          name = {this.state.name}
          changeName = {this.changeName}
        />:""
      }
       <button onClick={()=>{
         this.setState({
          isShow:false
         });
       }}>卸载</button> 
    </div>
  }
}

export default App;