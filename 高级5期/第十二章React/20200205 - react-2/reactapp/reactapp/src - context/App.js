import React,{Component} from 'react';
import {Provider} from "./context"
import Child from './Child';

class App extends Component {
  render(){
    return <div>
      <Provider value={{
        name:"hehe"
      }}>
          <Child />
      </Provider>
    </div>
  }
}
export default App;
