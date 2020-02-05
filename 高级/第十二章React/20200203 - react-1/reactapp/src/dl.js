import React,{Component} from "react";
class Dl extends Component {
    state = {
        isOpen: false
    }
    render(){
        let {data} = this.props;
        let {title,list} = data;
        let {isOpen} = this.state;
        return ( <dl className={"friend-group " + (isOpen?"expanded":"")}>
                <dt
                    onClick = {()=>{
                        this.setState({isOpen:!isOpen})
                    }}
                >{title}</dt>
                {list.map((item,index)=>{
                    return <dd key={index}>{item.name}</dd>
                })}
        </dl>);
    }
}

export default Dl;