import React,{Component} from "react";
import FriendList from "./FriendList";
/*
    类组件:
        1. 必须继承自 React.Component
        2. 必须有一个 render 方法
        3. render 方法的 return 中 定义组件要输出的内容
*/
class App extends Component {
    render(){
        return (<div className="box">
            <FriendList />
        </div>);
    }
}

export default App;