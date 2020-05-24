let Ws = require("ws").Server

let wss = new Ws({
    port: 8282
})

// socket 存起来
let socketObj = {}
let usersArr = []

wss.on("connection", function(ws) {
    console.log("有连接进来了...")
    ws.on("message", res => {
        console.log(res)
        let userInfo = JSON.parse(res)
        let openid = userInfo.openid
        // 保存唯一的socket连接
        socketObj[openid] = ws

        let result = usersArr.filter(item => item.openid === openid)

        if(result.length === 0) {
            // 没有连接过
            usersArr.push(userInfo)
        }else {
            // 有连接 更新分数
            usersArr.forEach(item => {
                if(item.openid === openid) {
                    item.tapTime = userInfo.tapTime
                }
            })
        }
        console.log(usersArr)

        ws.on("close", () => {
            // 关闭请求 socket 和数据
            console.log('有用户退出')
            // 当前退出的 socket 用户删除
            delete socketObj[openid]
            // 把用户信息删除
            usersArr.filter(user => {
                return user.openid !== openid
            })

            // 对所有socket连接广播
            for(let key in socketObj) {
                socketObj[key].send(JSON.stringify(usersArr))
            }
        })

        // 对所有socket连接广播
        for(let key in socketObj) {
            socketObj[key].send(JSON.stringify(usersArr))
        }
    })
})