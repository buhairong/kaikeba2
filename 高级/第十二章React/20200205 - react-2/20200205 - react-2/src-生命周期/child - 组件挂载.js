import React,{Component} from "react";
class Child extends Component {
     constructor(props){
        super(props);
        this.state = {
            age:9,
            name: "kkb"
        }
        console.log(0);
     }
    //  componentWillMount(){
    //      console.log(1,"组件即将挂载在DOM中");
    //  }
     static getDerivedStateFromProps(props, state){
         console.log(props, state);
         return state;
     }
     componentDidMount(){
         console.log(3,"组件挂载完成");
     }
     changeName=()=>{
        this.setState({
          name: "开课吧集团"
        });
      }
      changeAge=()=>{
        let {age} = this.state;
        age++;
        //this.state.age = age;
        this.setState(function(){
            return {
              age
            }
        });
      }
      render(){
        let {name,age} = this.state;
        console.log(2,"组件开始向DOM中挂载");
        return (
          <div>
              <p>名字:{name}</p>
              <p>岁数:{age}</p>
              <button onClick={this.changeName}>升级</button>
              <button onClick={()=>{
                  this.changeAge();
              }}>长一岁</button>
              <button onClick={()=>{
                  this.changeAge();
                  this.changeName();
              }}>同时修改</button>
          </div>
        );
      }
}

export default Child;