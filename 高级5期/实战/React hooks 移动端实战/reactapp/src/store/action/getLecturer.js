import Http from './http'

function getLecturer() {
    return function(dispatch) {
        Http.post('/lecturer/lists?page=1&rows=100', {
            order: 'desc',
            sort: 'sort',
            category_id: 2,
            recommend: 0
        }).then(res => {
            dispatch({
                type: 'load_lecturers',
                data: res.data
            })
        })
    }
}

export default getLecturer