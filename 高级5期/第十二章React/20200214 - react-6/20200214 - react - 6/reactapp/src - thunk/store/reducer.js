function data(state={
    name:"kkb",
    age: 8,
    edit_state: "无操作"
},action){
    switch(action.type){
        case "edit_name":
          return {
              ...state,
              name: action.name
          } 
        case "edit_age":
            return {
                ...state,
                age: action.age
            }  
        case "edit_state":
            return {
                ...state,
                edit_state:action.state
            }      
    }
    return state;
}

export default data;