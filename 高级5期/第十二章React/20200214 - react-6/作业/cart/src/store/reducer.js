let shop = [
    /*{
        id: 1,
        shopName: '苹果',
        price: 7,
        num: 1
    }*/
]

function data(state = shop, action) {
    switch(action.type) {
        case 'add_good':
            return [
                ...state,
                action.good
            ]
        case 'edit_good':
            state.forEach(item => {
                if(item.id === action.good.id) {
                    item.num = action.good.num
                }
            })
            return [
                ...state
            ]
    }
    return state
}

export default data