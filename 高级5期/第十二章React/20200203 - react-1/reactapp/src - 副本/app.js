import React,{Component} from "react";
// state 修改之后，会同步我们的视图
class App extends Component {
    // state = {
    //    nub: 0   
    // }
    constructor(props){
        super(props);
        this.state = {
            nub: 0
        }
    }
    render(){
        let {nub} = this.state;
        return (<div>
            <p>{nub}</p>
            <button onClick={()=>{
                // setState 修改 state
                this.setState({
                    nub: nub+1
                });
            }}>自增</button>
        </div>);
    }
}

export default App;