import React,{Component} from "react";
import SubChild from "./subChild";
class Child extends Component {
    render(){
        return (<div>
            <SubChild />
        </div>);
    }
}

export default Child;