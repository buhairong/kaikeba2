import React, {Component} from 'react'

class Dl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        let {data} = this.props
        let {title, list} = data
        let {isOpen} = this.state
        return (
            <dl className={"friend-group " + (isOpen ? "expanded" : "")}>
                <dt onClick={this.handle}>{title}</dt>
                {
                    list.map((item, index) => {
                        return <dd key = {index}>
                            {item.name}
                        </dd>
                    })
                }
            </dl>
        )
    }
}

export default  Dl