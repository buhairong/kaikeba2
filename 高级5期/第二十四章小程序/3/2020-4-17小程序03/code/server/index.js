let Ws = require("ws").Server;
let wss = new Ws({
    port: 8282
});
//socket存起来；
let socketObj = {};
let usersArr = [];
wss.on("connection", function(ws) {
    console.log("有连接过来");
    ws.on("message", res => {
        let userInfo = JSON.parse(res);
        console.log("??", userInfo);
        let openid = userInfo.openid;
        // 保存 唯一的socket连接；
        socketObj[openid] = ws;
        let result = usersArr.filter(user => user.openid === openid);
        if (result.length === 0) {
            //    没有连接过；
            usersArr.push(userInfo);
        } else {
            // 有连接  更新分数；
            for (let i = 0; i < usersArr.length; i++) {
                if (usersArr[i].openid == openid) {
                    usersArr[i] = userInfo;
                }
            }
        }
        // console.log(usersArr);

        ws.on("close", () => {
                // 关闭请求socket  和数据；
                console.log("有用户退出")
                    // 当前退出的socket用户删除；
                delete socketObj[openid];
                // 要把用户信息删除；
                usersArr = usersArr.filter(user => user.openid !== openid);
                // 广播
                for (let key in socketObj) {
                    socketObj[key].send(JSON.stringify(usersArr));
                }
            })
            //对所有socket连接广播；
        for (let key in socketObj) {
            socketObj[key].send(JSON.stringify(usersArr));
        }
        // ws.send(JSON.stringify({ name: "张三" }));
    })

})