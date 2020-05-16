# JS02期二阶段第一次测试 - DOM&BOM

1.获取属性节点内容的正确方式是(设：属性为index)： （ ） 
// 属性节点 --> DOM 操作

```
A. node.index //ECMA 的属性操作 排除
B. node.getAttriBute('index') 
C. node.getAttriBute['index']//注意要是 [] 
D. node[index] // ECMA 的属性操作 排除  node["index"]
答案： B
```

2.如何创建一个div元素节点？ （ ） 

```
A. create（div） 
B. createElement('div') 
C. document.createElement('div') 
D. body.createElement('div') // createElement 属于 document 下的方法
答案： C
```

3.下列操作中，书写错误的是？

```
A. div.id = "example"; 
B. p.className = "slogan";
C. div.appendChild('div');// appendChild(node)，node DOM 节点
D. p.innerHTML = '开课吧';
答案：C
```

4.对于添加、删除、插入、替换到某个节点方法说法错误的是？

```
A 添加节点 obj.appendChild();   
B 插入某个节点 obj.insertBefore() //    
C 替换节点 obj.cloneChild()  // parent.replaceChild();  cloneNode
D 删除节点  Obj.remove();
答案  C；
```

5.如何删除id为box的div中的span节点？ （ ） 


```
A. document.removeChild(span) 
B. box.remove(span) 
C. document.remove(span) 
D. box.removeChild(span) 
答案： D
```

6.获取浏览器窗框宽度正确的是： （ ） 

```
A. window.offsetWidth 
B. window.clientWidth 
C. window.innerWidth  // 包含了滚动条
D. window.innerHTML 
答案： C
```

7.以下能正确的返回上一次访问页面的方法是： （ ） 

```
A. window.goBack() 
B. window.loaction.go(1) 
C. window.history.go(-1) 
D. widnow.back() 
答案： C
```

8.浏览器对象在js中对应的是哪个？ （ ） 

```
A. document 
B. window 
C. body 
D. html 
答案：B
```

9.下面有关 javascript 内部对象的描述，正确的有？

```
A.History 对象包含用户（在浏览器窗口中）访问过的 URL
B.Location 对象包含有关当前 URL 的信息
C.Window 对象表示浏览器中打开的窗口
D.以上都正确

答案：D
```

10.下列方法哪个不是在新窗口打开： （ ） 

```
A. open('http://www.miaov.com') 
B. window.open('http://www.miaov.com') 
C. window.open('http://www.miaov.com','_blank') 
D. window.href = 'http://www.baidu.com' 
答案： D
```

