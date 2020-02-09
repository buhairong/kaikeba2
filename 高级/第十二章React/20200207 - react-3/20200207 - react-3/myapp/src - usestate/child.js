import React from "react";
function Child(props){
  let {data} = props;
  return (<div>
        <p>name:{data.name}</p>
        <p>age:{data.age}</p>
  </div>)
}

export default Child;