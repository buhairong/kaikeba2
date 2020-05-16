el.classList 获取设置 元素的 class 列表 （类数组）
    - 通过下标获取到元素的每一个class
    - length                 元素的 class 个数
    - value                  存储完整的class
    - add("class名字")       给元素classList 添加一个class
    - remove("class名字")    从元素的 classList 删除一项
    - contains("class名字")  判断元素的classList 是否包含这个 class,包含返回 true,否则返回 false
    - toggle("class名字")    切换class,如果元素有这个 class 我们就删掉, 否则给加上个 class


/*
    window.getComputedStyle(el) 获取元素的计算后样式
    IE8及以下不支持,需要使用 el.currentStyle['样式名']
*/
console.log(getComputedStyle(box)['width'])


### 数组
push     数组末尾添加 返回数组的新长度
pop      数组末尾删除一位
unshift  数组头部添加 返回数组的新长度
shift    数组头部删除一位
splice
join
concat
reverse


### 字符串

截取类方法：
    slice(start, end) (slice 严格按照参数的顺序，第0位，start,第一位,end)
    substr(start,length)
    substring(start, end) (substring 会比较start 和 end 谁小谁start)

    start  从哪位开始截取(只写start的话，就从start开始一直截取到最后)
    end    截取到第几位(注意不包含end位)
    length 截取几位

    字符串中 所有的截取类方法，都是返回一个新的字符串，并不会对原来的字符串进行操作


var a = '11'
var b = '2'

console.log(a > b) // false

str.charCodeAt(index) 将字符串的第几位，转换成 charCode 编码
"1":49
"2":50

字符串在比较时，会比较charCode,并且字符串比较时一位一位向后比较的，
如果第0位编码一样，才会比较下一位，否则直接返回第0位的比较结果

String.fromCharCode(index)  将 charCodeAt 再转换回字符


### Number

num.toFixed(i)  保留几位小数，会四舍五入

### 隐式数据类型转换
https://github.com/motao314/js-


### 排序
arr.sort(function(a, b){
    return a - b  // 升序
    return b - a  // 降序
    return Math.random() - .5 // 随机排序
})