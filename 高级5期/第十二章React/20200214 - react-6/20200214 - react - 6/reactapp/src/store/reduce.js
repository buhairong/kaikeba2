export default function reducer(state={
    data:[],
    load:true
},action){
    switch(action.type){
        case "load_start":
            return {
                data:[],
                load:true
            }
        case "load_end":
            return {
                data: action.data,
                load: false
            }
    }
    return state;
}