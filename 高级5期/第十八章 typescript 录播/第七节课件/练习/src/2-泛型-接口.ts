interface IResponseData<T> {
    code: number
    message ?: string
    data: T
}

function getData(url: string) {
    return fetch(url).then(response => {
        return response.json()
    }).then(data => {
        return data
    })
}

// 用户接口
interface IResponseUserData {
    id: number
    username: string
    email: string
}

// 文章接口
interface IResponseArticleData {
    id: number
    title: string
    author: IResponseUserData
}

async function getData1<U>(url: string) {
    let response = await fetch(url)
    let data: Promise<IResponseData<U>> = await response.json()
    return data
}

(async function(){
    let userData = await getData1<IResponseUserData>('/user')
    userData.data.id

    let articleData = await getData1<IResponseArticleData>('/article')
    articleData.data.author
})()