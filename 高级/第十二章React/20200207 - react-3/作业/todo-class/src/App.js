import React, {Component} from 'react'
import Title from './title'
import Input from './input'
import List from './list'
import Foot from './foot'
import './index.css'

class App extends Component {
  state = {
    data: []
  }

  add = (txt) => {
      let {data} = this.state
      data.push({
          id: Date.now(),
          done: false,
          txt
      })
      this.setState({
          data
      })
  }

  changeDone = (id, done) => {
      let {data} = this.state
      data.forEach(item => {
          if(item.id === id) {
              item.done = done
          }
      })
      this.setState({
          data
      })
  }

    changeTxt = (id, txt) => {
        let {data} = this.state
        data.forEach(item => {
            if(item.id === id) {
                item.txt = txt
            }
        })
        this.setState({
            data
        })
    }

  remove = (id) => {
      let {data} = this.state
      data = data.filter(item => item.id !== id)
      this.setState({
          data
      })
  }

  clearDone = () => {
      let {data} = this.state
      this.setState({
          data: data.filter(item => !item.done)
      })
  }

  render() {
    let {data} = this.state
    return (
        <div id="todoapp">
            <Title/>
            <div className="content">
            <Input
              add={this.add}
            />
            <List
                data={data}
                changeDone={this.changeDone}
                remove={this.remove}
                changeTxt={this.changeTxt}
            />
            <Foot
                data={data}
                clearDone={this.clearDone}
            />
          </div>
        </div>
    )
  }
}

export default App;
