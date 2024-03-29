import Http from './http'

function getGood(id) {
    return function(dispatch) {
       return Http.post('/lecturer/getgood', {
           article_id: id
       }).then(res => {
           if(res.data.code === 0) {
               dispatch({
                   type: 'good',
                   goodId: res.data.gooid
               })
           } else {
               dispatch({
                   type: 'cancel_good'
               })
           }
       })
    }
}

function setGood(id) {
    return function(dispatch) {
        return Http.post('/lecturer/good', {
            article_id: id
        }).then(res => {
            if(res.data.code === 0) {
                dispatch(getGood(id))
            }
        })
    }
}

function cancelGood(id, goodId) {
    return function(dispatch) {
        return Http.post('/lecturer/cancelgood', {
            article_id: id,
            goodid: goodId
        }).then(res => {
            if(res.data.code === 0) {
                dispatch({
                    type: 'cancel_good'
                })
            }
        })
    }
}

export {
    getGood,
    setGood,
    cancelGood
}