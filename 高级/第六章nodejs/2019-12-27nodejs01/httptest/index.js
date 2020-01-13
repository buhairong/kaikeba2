const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const mime = require("./mime.json");
// console.log(mime);
const server = http.createServer((req, res) => {
    // res.writeHead(200,{"content-type":"text/html;charset=utf8"})
    console.log(req.url);
    
    // 1. http://localhost:8888/detail  2.http://localhost:8888/detail?name=zhangsan 是一个地址；
    let obj = url.parse(req.url,true);
    // console.log(obj.pathname);
    if (obj.pathname == "/") {
        res.setHeader("content-type", "text/html;charset=utf8");
        // spa 不会跳转 刷新；
        //加载主页
        let indexData = fs.readFileSync("./views/index.html");
        // 流方式加载页面；
    //    let rs =  fs.createReadStream("./views/index.html");
    //    rs.pipe(res);
        res.write(indexData);
       
    }else if (obj.pathname == "/detail"){
        res.setHeader("content-type", "text/html;charset=utf8");
        console.log("姓名是：",obj.query.name);
        let indexData = fs.readFileSync("./views/detail.html");
        res.write(indexData);
    }else if(obj.pathname=="/getData"){
        // api  接口
        let obj = {
            info:"some value...",
            status:1
        }
        console.log(res)
        res.write(JSON.stringify(obj));
    }else{
        // console.log("else内容",obj.pathname);
        if(obj.pathname!=="/favicon.ico"){
            // 1.设置对应的头部 2.读取资源文件写入到页面；
          let ext =   path.extname(obj.pathname);
        //   console.log(mime[ext]);
          res.setHeader("content-type", mime[ext]);
         let resData =  fs.readFileSync("views"+obj.pathname);
         res.write(resData);
        }
    }
    res.end();
})
// npm i nodemon -g;  -->nodemon 
server.listen(8888);

// 1.区分路由加载页面；2.加载外部资源；3.流方式加载页面；
