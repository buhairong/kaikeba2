import React,{Component} from "react";
import Child from "./child";
import context,{Provider} from "./context";
class App extends Component {
    render(){
        return (
          <Provider value={{
            info:"最近要猥琐发育"
          }}>
            <div>
              <Child />
            </div>
        </Provider>  );
    }
}

export default App;