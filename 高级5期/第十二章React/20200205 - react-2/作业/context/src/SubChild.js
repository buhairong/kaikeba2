import React, {Component} from 'react'
import context, {Consumer} from './Context'

/*class SubChild extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {
                        (value) => {
                            return value.info
                        }
                    }
                </Consumer>
            </div>
        )
    }
}*/

class SubChild extends Component {
    static contextType = context
    render() {

        return (
            <div>
                {
                    this.context.info
                }
            </div>
        )
    }
}

export default SubChild