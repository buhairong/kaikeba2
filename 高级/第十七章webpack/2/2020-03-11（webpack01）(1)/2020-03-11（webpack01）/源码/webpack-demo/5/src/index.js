import kkb from './data/kkb.txt';
import kkbmd from './data/kkb.md';
import logo from './data/logo.png';
import css from './data/css.css';

console.log(kkb);
console.log(kkbmd);
console.log(logo);



document.body.innerHTML = kkbmd;

let img = new Image();
img.src = logo;
document.body.appendChild(img);


// console.log(css[0][1]);
// let style = document.createElement('style');
// style.innerHTML = css[0][1];
// document.head.appendChild(style);