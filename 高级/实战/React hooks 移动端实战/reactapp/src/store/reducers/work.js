let initData = {
    data: {},
    loading: true
}

function work(state = initData, action) {
    switch(action.type) {
        case 'work_reset':
            return {
                data: {},
                loading: true
            }
        case 'work_loadover':
            return {
                loading: false,
                data: action.data
            }
    }
    return state
}

export default work