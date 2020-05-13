import React, {Component} from 'react'
import Li from './li'

class List extends Component {
    render() {
        let {data, changeDone, remove, changeTxt} = this.props
        return (
            <ul id="todo-list">
                {
                    data.map(item => {
                        return (
                            <Li
                                key = {item.id}
                                data = {item}
                                changeDone = {changeDone}
                                remove = {remove}
                                changeTxt = {changeTxt}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

export default List