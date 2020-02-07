import React, { Component } from "react";
class Child extends Component {
    state = {
        age: 9
    }
    toScroll(){
        console.log(111);
    }
    componentWillMount(){
        window.addEventListener("resize",this.toScroll)
    }
    componentWillUnmount(){
        console.log("组件即将卸载");
        window.removeEventListener("resize",this.toScroll)
    }
    changeAge = () => {
        let { age } = this.state;
        age++;
        this.setState({ age });
    }
    // render --> 虚拟DOM --> 真实DOM --> 挂载到文档
    render() {
        let { age } = this.state;
        let { name, changeName } = this.props;
        console.log(3,"渲染");
        return (
            <div>
                <p>名字:{name}</p>
                <p>岁数:{age}</p>
                <button onClick={changeName}>升级</button>
                <button onClick={()=>{
                    this.changeAge();
                    //console.log(this.state,this.props);
                }}>长一岁</button>
            </div>
        );
    }
}

export default Child;