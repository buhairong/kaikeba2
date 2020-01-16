// function request(){
//     console.log("request函数");
// }

// request['get'] = function(){
//     console.log("get...");
// }
// request['post'] = function(){
//     console.log("post...");
// }
// console.dir(request)
// request();
// request.get();
let utils = {
    extends(a, b, context) {
        // console.log(context);
        for (let key in b) {
            if (b.hasOwnProperty(key)) {
                // console.log(b[key]);
                if (typeof b[key] === 'function') {
                    // 方法
                    a[key] = b[key].bind(context);
                } else {
                    a[key] = b[key];
                }
            }
        }
    }
}

class Axios {
    constructor() {
        this.myname = "张三";
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        }
    }
    request(config) {
        // 执行队列；
        let chain = [this.xhr.bind(this), undefined];
        // 请求放在队列之前
        this.interceptors.request.handlers.forEach(interceptor => {
            chain.unshift(interceptor.fulfilled, interceptor.reject);
        })
        // 返还放在队列之后；
        this.interceptors.response.handlers.forEach(interceptor => {
            chain.push(interceptor.fulfilled, interceptor.reject);
        })
        console.log("队列", chain);
        // 执行队列；
        let promise = Promise.resolve(config);
        // promise.then(function(){},function(){})
        while(chain.length>0){
            promise =   promise.then(chain.shift(),chain.shift())
        }
        return promise;
    }
    xhr(config) {
        return new Promise(resolve => {
            // console.log(config)
            let { url = "", method = "get", headers = {}, data = null } = config;
            let xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.onload = function () {
                // console.log(xhr.responseText);
                resolve(xhr.responseText);
            }
            xhr.send(data);
            // 发送ajax请求；
            // console.log("执行了request", this.myname);
        })
    }

}
let methodsArr = ["get", "post", "put", "delete", "options", "head"];
methodsArr.forEach(method => {
    Axios.prototype[method] = function (config) {
        // console.log("执行了" + method + "方法", this);
        config.method = method;
        return this.request(config);
    }
})
// 拦截器管理器；
class InterceptorManager {
    constructor() {
        this.handlers = [];
    }
    use(fulfilled, reject) {
        this.handlers.push({
            fulfilled: fulfilled,
            reject
        })
    }
}


// console.dir(Axios);
function createInstance() {
    let context = new Axios();
    // console.log(Axios.prototype);
    // console.log(context.request);
    let instance = context.request.bind(context);
    // 函数混入  get post ...方法；
    utils.extends(instance, Axios.prototype, context);
    // 混入Axios 实例对象的 属性；
    utils.extends(instance, context);
    console.dir(context.request);
    return instance;
}
let axios = createInstance();
// console.dir(axios);
// axios();
// axios.post();

// 把函数既当函数执行 ，又当对象使用 ；
// axios();  
// let axios = {
//     get:function(){},
//     post:function(){},
//     delete:function(){}
// }
// axios.get();


