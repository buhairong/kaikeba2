import React, {Component} from 'react'
import SubChild from './SubChild'

class Child extends Component {
    render() {
        return (
            <div>
                <SubChild/>
            </div>
        )
    }
}

export default Child