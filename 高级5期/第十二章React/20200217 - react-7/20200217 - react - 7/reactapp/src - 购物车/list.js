import React from "react";
import {useSelector} from "react-redux";
import Li from "./Li";
function List(){
    let data = useSelector(state=>state);
    return (<ul>
        {data.map(item=>(<Li key={item.id} data={item} />))}
    </ul>)
}

export default List;