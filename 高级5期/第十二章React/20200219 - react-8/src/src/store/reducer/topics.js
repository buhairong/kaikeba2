export default function topics(topics={
    load: true,
    data: {
        title:"",
        content:"",
        replies:[]
    }
},action){
    switch(action.type){
        case "topics_loading":
            return {
                load: true,
                data: {
                    title:"",
                    content:"",
                    replies:[]
                }
            }
        case "topics_loadOver":
            return {
                load: false,
                data: action.data
            }
    }
    return topics;
}