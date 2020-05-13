import React, {Component} from 'react'

class Input extends Component {
    state = {
        val: ''
    }
    render() {
        let {val} = this.state
        let {add} = this.props
        return (
            <div id="create-todo">
                <input
                    type="text"
                    id="new-todo"
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
                                    add(val.trim())
                                    this.setState({
                                        val: ''
                                    })
                                } else {
                                    alert('输入点什么吧')
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