# webpack 与 模块化

[toc]

## 模块化

模块化已经是现代前端开发中不可或缺的一部分了

把复杂的问题分解成相对独立的模块，这样的设计可以降低程序复杂性，提高代码的重用，也有利于团队协作开发与后期的维护和扩展

从 `ECMAScript2015` 开始引入了模块的概念，我们称为：`ECMAScript Module`，简称：`ESM`



## 模块化的核心

- 独立的作用域
- 如何导出模块内部数据
- 如果导入外部模块数据



## ESM

从 `ECMAScript2015/ECMAScript6` 开始，`JavaScript` 原生引入了模块概念，而且现在主流浏览器也都有了很好的支持

### 独立模块作用域

一个文件就是模块，拥有独立的作用域，且导出的模块都自动处于 `严格模式`下，即：`'use strict'`

### 导出模块内部数据

使用 `export` 语句导出模块内部数据

```javascript
// 导出单个特性
export let name1, name2, …, nameN;
export let name1 = …, name2 = …, …, nameN;
export function FunctionName(){...}
export class ClassName {...}

// 导出列表
export { name1, name2, …, nameN };

// 重命名导出
export { variable1 as name1, variable2 as name2, …, nameN };

// 默认导出
export default expression;
export default function (…) { … }
export default function name1(…) { … }
export { name1 as default, … };

// 模块重定向导出
export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

### 导入外部模块数据

导入分为两种模式

- 静态导入
- 动态导入

**静态导入**

在浏览器中，`import` 语句只能在声明了 `type="module"` 的 script 的标签中使用。

```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

> 静态导入方式不支持延迟加载，`import` 必须这模块的最开始

```javascript
document.onclick = function () {

    // import 必须放置在当前模块最开始加载
    // import m1 from './m1.js'

    // console.log(m1);

}
```

**动态导入**

此外，还有一个类似函数的动态 `import()`，它不需要依赖 `type="module"` 的 script 标签。

关键字 `import` 可以像调用函数一样来动态的导入模块。以这种方式调用，将返回一个 `promise`。

```javascript
import('./m.js')
  .then(m => {
    //...
});
// 也支持 await
let m = await import('./m.js');
```

> 通过 `import()` 方法导入返回的数据会被包装在一个对象中，即使是 `default` 也是如此



## 模块化的向下兼容

- CommonJS
- AMD
- UMD
- ESM

无论是那种模块化规范，重点关注

- 独立模块作用域
- 导出模块内部数据
- 导入外部模块数据

### CommonJS

在早起前端对于模块化并没有什么规范，反而是偏向服务端的应用有更强烈的需求，CommonJS 规范就是一套偏向服务端的模块化规范，NodeJS 就采用了这个规范。

**独立模块作用域**

一个文件就是模块，拥有独立的作用域

**导出模块内部数据**

通过 `module.exports` 或 `exports` 对象导出模块内部数据

```javascript
// a.js
let a = 1;
let b = 2;

module.exports = {
  x: a,
  y: b
}
// or
exports.x = a;
exports.y = b;
```

**导入外部模块数据**

通过 `require` 函数导入外部模块数据

```javascript
// b.js
let a = require('./a');
a.x;
a.y;
```

### AMD

因为 CommonJS 规范一些特性（基于文件系统，同步加载），它并不适用于浏览器端，所以另外定义了适用于浏览器端的规范 

 `AMD(Asynchronous Module Definition)`

https://github.com/amdjs/amdjs-api/wiki/AMD

浏览器并没有具体实现该规范的代码，我们可以通过一些第三方库来解决

#### requireJS

https://requirejs.org/

```javascript
// 1.html
<script data-main="scripts/main" src="https://cdn.bootcss.com/require.js/2.3.6/require.min.js"></script>
```

**独立模块作用域**

通过一个 `define` 方法来定义一个模块，并通过该方法的第二个回调函数参数来产生独立作用域

```javascript
// scripts/Cart.js
define(function() {
  // 模块内部代码
})
```

**导出模块内部数据**

通过 `return` 导出模块内部数据

```javascript
// scripts/Cart.js
define(function() {
  return class Cart {
    add(item) {
      console.log(`添加商品：${item}`)
    }
  }
})
```

**导入外部模块数据**

通过前置依赖列表导入外部模块数据

```javascript
// scripts/main.js
// 定义一个模块，并导入 ./Cart 模块
define(['./Cart'], function(Cart) {
  let cart = new Cart()
  cart.add({name: 'iphoneXX', price: 1000000})
})
```

### `requireJS` 的 `CommonJS` 风格

`require.js` 也支持 `CommonJS` 风格的语法

**导出模块内部数据**

```javascript
// scripts/Cart.js
define(['require', 'exports', 'module'], function(require, exports, module) {
  class Cart {
    add(item) {
      console.log(`添加商品：${item}`)
    }
  }
  exports.Cart = Cart;
})
// 忽略不需要的依赖导入
define(['exports'], function(exports) {
  class Cart {
    add(item) {
      console.log(`添加商品：${item}`)
    }
  }
  exports.Cart = Cart;
})
// 如果是依赖的导入为：require, exports, module，也可以省略依赖导入声明
define(function(require, exports, module) {
  class Cart {
    add(item) {
      console.log(`添加商品：${item}`)
    }
  }
  exports.Cart = Cart;
})
```

**导入外部模块数据**

```javascript
// scripts/main.js
define(['./Cart'], function(Cart) {
  let cart = new Cart()
  cart.add({name: 'iphoneXX', price: 1000000})
})
```

### UMD

严格来说，`UMD` 并不属于一套模块规范，它主要用来处理 `CommonJS`、`AMD`、`CMD` 的差异兼容，是模块代码能在前面不同的模块环境下都能正常运行

```javascript
(function (root, factory) {
  	if (typeof module === "object" && typeof module.exports === "object") {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    }
    else if (typeof define === "function" && define.amd) {
      	// AMD 模块环境下
        define(['jquery'], factory);
    }
}(this, function ($) { // $ 要导入的外部依赖模块
    $('div')
    // ...
    function b(){}
    function c(){}

    // 模块导出数据
    return {
        b: b,
        c: c
    }
}));
```

### tsm - typescript module