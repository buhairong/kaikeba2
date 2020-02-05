import React,{Component} from "react";
import data from "./data";
import Dl from "./dl";
class App extends Component {
    state={
      isOpen: "family"
    }
    changeOpen=(openName)=>{
      this.setState({
        isOpen: openName
      });
    }
    render(){
        let {isOpen} = this.state;
        return ( <div className="friend-list">
                {Object.keys(data).map((item,index)=>{
                    return (<Dl 
                        key = {index}
                        name={item}  
                        data = {data[item]}
                        isOpen = {isOpen}
                        changeOpen= {this.changeOpen}
                    />)
                })}
        </div>);
    }
}

export default App;