export default function list(list={
    load: true,
    data: []
},action){
    switch(action.type){
        case "list_loading":
            return {
                load: true,
                data: []
            }
        case "list_loadOver":
            return {
                load: false,
                data: action.data
            }
    }
    return list;
}