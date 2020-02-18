export default function reducer(state=[
    {
        id: 0,
        name: "苹果",
        price: 7,
        number: 1
    },{
        id: 1,
        name: "栗子",
        price: 16,
        number: 2
    }
],action){
    switch(action.type){
        case "add":
            state.push(action.data);
            return [...state];
        case "plus":
            for(let i = 0; i<state.length; i++){
                    if(state[i].id === action.id){
                        ++state[i].number;
                        return [...state];
                    }
            }
        case "minus":
            for(let i = 0; i<state.length; i++){
                if(state[i].id === action.id){
                    (state[i].number>0)&&(--state[i].number);
                    return [...state];
                }
        }    
    }
    return state;
}