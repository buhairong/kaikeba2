import Http from './http'

function getWork(id) {
    return function(dispatch) {
        return Http.post(`/lecturer/info`, {
            article_id: id
        })
            .then(res => {
                dispatch({
                    type: 'work_loadover',
                    data: res.data
                })

                return true
            })
    }
}

export default getWork