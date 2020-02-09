import React, {Component} from 'react'

class Foot extends Component {
    render() {
        let {data, clearDone} = this.props
        let doneItem = data.filter(item => item.done)
        let willDoneItem = data.filter(item => !item.done)
        return (
            <div>
                <div style={{display: willDoneItem.length ? 'block' : 'none'}}> {willDoneItem.length} 项待完成</div>
                <div
                    style={{display: doneItem.length ? 'block' : 'none'}}
                    onClick={
                        () => {
                            clearDone()
                        }
                    }
                >Clear {doneItem.length} 已完成单项</div>
            </div>
        )
    }
}

export default Foot