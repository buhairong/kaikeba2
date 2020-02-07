import React,{Component} from "react";
import data from "./data";
import Dl from "./dl";

class App extends Component {
    state = {
      isOpen: ""// 哪一项是展开的
    }
    changeOpen=(name)=>{
      this.setState({
        isOpen:name
      });
    }
    render(){
        let {isOpen} = this.state;
        return ( <div className="friend-list">
         {Object.keys(data).map((item,index)=>{
            return (<Dl 
                key={index} 
                data = {data[item]}
                name = {item}
                isOpen = {isOpen}
                changeOpen = {this.changeOpen}
            />)
         })}
        </div>);
    }
}

export default App;