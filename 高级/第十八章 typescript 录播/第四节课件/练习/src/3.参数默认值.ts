// 默认参数也是可选参数
function sort(items: Array<any>, order: 'desc' | 'asc' = 'desc') {
    // ...
}

sort([1, 2, 3], 'asc')
sort([1, 2, 3])
//sort([1, 2, 3], 'kaikeba') // 报错， 只能穿 desc 或 asc