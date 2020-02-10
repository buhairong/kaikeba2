import React,{useState} from "react";
import Child from "./child";
function App(){
    let [name,setName] = useState("kkb");
    return <div>
        <Child
            name={name}
            setName = {setName}
        />
    </div>;
}

export default App;