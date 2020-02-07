import React, {Component} from 'react'

class Dl extends Component {
    render() {
        let {data, name, isOpen, changeOpen} = this.props
        let {title, list} = data
        return (
            <dl className={`friend-group ${isOpen === name ? 'expanded' : ''}`}>
                <dt onClick = {
                        () => {
                            if(name === isOpen) {
                                changeOpen('')
                            } else {
                                changeOpen(name)
                            }
                        }
                    }
                >{title}</dt>
                {
                    list.map((item, index) => {
                        return (
                            <dd
                                key = {index}
                            >
                                {item.name}
                            </dd>
                        )
                    })
                }
            </dl>
        )
    }
}

export default Dl