import React,{useState} from "react";
import Child from "./child";
function App(){
    let [name,setName] = useState("kkb");
    let [isShow,setShow] = useState(true);
    return <div>
      {isShow?<Child
            name={name}
            setName = {setName}
        />:""}
        <button onClick={()=>{
          setShow(false);
        }}>卸载</button>
    </div>;
}

export default App;