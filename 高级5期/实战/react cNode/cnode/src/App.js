import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {route} from './router'

function App() {
  return (
    <div className="App">
        <Switch>
            {
                route.map((item, index) => {
                    return (
                        <Route
                            key = {index}
                            path = {item.path}
                            exact = {item.exact}
                            render = {(props) => {
                                return item.render(props)
                            }}
                        />
                    )
                })
            }
        </Switch>
    </div>
  );
}

export default App;
