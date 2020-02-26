import Http from './http'

function getWorks(page) {
    return function(dispatch) {
        dispatch({
            type: 'load'
        })
        return Http.post(`/lecturer/lists?page=${page}&rows=8`, {
            order: 'desc',
            sort: 'update_time',
            category_id: 1,
            recommend: 1
        })
            .then(res => {
                if(!res.data.length) {
                    dispatch({
                        type: 'loadend'
                    })
                    return false
                }

                dispatch({
                    type: 'loadover',
                    data: res.data
                })

                return true
            })
    }
}

export default getWorks