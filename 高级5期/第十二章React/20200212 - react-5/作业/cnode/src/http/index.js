import Axios from 'axios'

const http = Axios.create({
    baseURL: 'https://cnodejs.org/api/v1'
})

function getData(type, page) {
    return http.get(`/topics?tab=${type}&page=${page}&limit=20`)
}

export default getData