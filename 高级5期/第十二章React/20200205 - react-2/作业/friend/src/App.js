import React, {Component} from 'react';
import data from './data'
import Dl from './Dl'
import './index.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: 'family'
        }
    }

    changeOpen = (name) => {
        this.setState({
            isOpen: name
        })
    }

    render() {
        return (
            <div className="friend-list">
                {
                    Object.keys(data).map((item, index) => {
                        return (
                            <Dl
                                key = {index}
                                name = {item}
                                data = {data[item]}
                                isOpen = {this.state.isOpen}
                                changeOpen = {this.changeOpen}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default App;
