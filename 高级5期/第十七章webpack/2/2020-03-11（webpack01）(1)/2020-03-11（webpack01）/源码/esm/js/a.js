// import b from './b.js'; //import 语句，必须放在模块代码的最顶层

// let a = 100;

// console.log(b);

document.onclick = async function() {
    // import b from './b.js';

    // 使用 import 函数来实现延迟导入
    let b = await import('./b.js');   // 异步
    console.log(b.default);

};