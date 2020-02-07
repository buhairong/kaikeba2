import React, { Component } from "react";
class Child extends Component {
    state = {
        age: 9
    }
    // // 父组件更新引起的子组件更新
    // componentWillReceiveProps(nextProps){
    //     console.log(0,nextProps,this.props);
    // }
    // 组件的state或者props 改变
    shouldComponentUpdate(nextProps, nextState){
        console.log(1);
        return true; // 注意这个返回值决定是否重新渲染DOM，true 重新渲染DOM 生命周期会继续向下走，false不渲染DOM，更新结束
    }
    // 即将更新组件
    // componentWillUpdate(nextProps, nextState){
    //     console.log(2);
    // }
    // 组件更新完成
    componentDidUpdate() {
        console.log(4,arguments);
    }
    // 完成渲染即将被挂载在DOM中, 这会已经生成了新的DOM节点了，不过还有修改文档，你可以在这里去获取更新之前的文档
    getSnapshotBeforeUpdate(prevProps, prevState){ 
        console.log(3.5);
        return 11;
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