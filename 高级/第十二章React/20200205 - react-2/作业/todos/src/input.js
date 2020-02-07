import React, {Component} from 'react'

class Input extends Component {
    state = {
        val: ''
    }
    render() {
        let {add} = this.props
        let {val} = this.state
        return (
            <div id="create-todo">
                <input id="new-todo"
                       type="text"
                       placeholder="What needs to be done?"
                       autoComplete="off"
                       value={val}
                       onChange={
                           ({target}) => {
                               this.setState({
                                   val: target.value
                               })
                           }
                       }
                       onKeyDown={
                           ({keyCode}) => {
                               if(keyCode === 13) {
                                   if(val.trim()) {
                                       add(val)
                                       this.setState({
                                           val: ''
                                       })
                                   }else{
                                       alert('输入点内容吧')
                                   }
                               }
                           }
                       }
                />
            </div>
        )
    }
}

export default Input