import React,{Component} from 'react';

class App extends Component {
  state = {
    name: "kkb",
    age: 9
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
    return (
      <div>
      </div>
    );
  }
}

export default App;
