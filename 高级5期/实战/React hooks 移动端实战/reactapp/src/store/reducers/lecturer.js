function lecturers(state = [], action) {
    switch(action.type) {
        case 'load_lecturers':
            return action.data
    }
    return state
}

export default lecturers