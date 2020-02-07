import React, {Component} from 'react'
import Child from './Child'
import context, {Provider} from './Context'

class App extends Component {
  render() {
    return (
        <Provider value = {{
            info: '猥琐发育不要浪'
        }}>
          <div>
            <Child/>
          </div>
        </Provider>
    )
  }
}

export default App;
