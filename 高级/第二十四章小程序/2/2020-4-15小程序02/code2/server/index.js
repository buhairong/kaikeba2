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
        console.log(res);
        let userInfo = JSON.parse(res);
        let openid = userInfo.openid;
        // 保存 唯一的socket连接；
        socketObj[openid] = ws;
        let result = usersArr.filter(user => user.openid === openid);
        if (result.length === 0) {
            //    没有连接过；
            usersArr.push(userInfo);
        } else {
            // 有连接  更新分数；

        }
        console.log(usersArr);

        ws.on("close", () => {
                // 关闭请求socket  和数据；
            })
            //对所有socket连接广播；
        for (let key in socketObj) {
            socketObj[key].send(JSON.stringify(usersArr));
        }
        // ws.send(JSON.stringify({ name: "张三" }));
    })

})