import React,{Component} from "react";
import data from "./data";
import Dl from "./dl";
class App extends Component {
    render(){
        return ( <div className="friend-list">
                {Object.keys(data).map((item,index)=>{
                    return (<Dl 
                        key = {index}
                        name={item}  
                        data = {data[item]}
                    />)
                })}
        </div>);
    }
}

export default App;