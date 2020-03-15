import a, {fn} from './a';
import b from './b';
import './assets/css/css.css';

console.log(a);
console.log('开课吧!!!');

let btn = document.querySelector('button');

document.onclick = function () {
    // fn();
};

btn.onclick = function() {
    b();
};

if (module.hot) {//如果开启 HMR
    console.log('启动热替换');

    module.hot.accept('./b.js', function() {
        console.log('b更新了');
        btn.onclick = function() {
            b();
        };
    });

    module.hot.accept('./a.js', function() {
        console.log('a更新了');
    });
}