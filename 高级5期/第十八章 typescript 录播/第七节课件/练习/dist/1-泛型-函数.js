function getVal(obj, k) {
    return obj[k];
}
var obj1 = {
    x: 1,
    y: 2
};
var obj2 = {
    username: 'mt',
    age: 32
};
getVal(obj1, 'x');
getVal(obj2, 'age');
