const x = require('./base').x;
const bark = require('./base');

// console.log('x', x);

// bark();

console.log(require.main);


JSON.stringify({ a: 1, b: 2, c: 3 }, ['b', 'a'], '')
// "{"b":2,"a":1}"

JSON.stringify({ a: 1, b: 2, c: 3 }, function (k, v) {
    console.log(`${k}=>${v}`);
    if (k === 'b') v += 1;
    return v;
}, '')
// => [object Object]
// a => 1
// b => 2
// c => 3
// "{"a":1,"b":3,"c":3}"

console.assert(true, '什么都不做');
console.assert(false, '%s 工作', '无法');
console.count('abc')
console.count('abc')
console.countReset('abc');
console.count('abc')

const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.dir(obj, {
    showHidden: true,
    depth: null, // null 无限递归
    colors: true
})
console.error('error #%d', 5);
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);