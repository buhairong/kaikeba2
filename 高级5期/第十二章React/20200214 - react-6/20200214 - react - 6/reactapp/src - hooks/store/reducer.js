function data(state={
    name:"kkb",
    age: 8
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
    }
    return state;
}

export default data;