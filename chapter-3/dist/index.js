"use strict";
function squareOf(n) {
    return n * n;
}
// number以外はエラー
console.log(squareOf(2 + 2));
console.log('ここから3.2.1　型の初歩');
// any
console.log('any ///////');
{
    const a = 666;
    const b = ['any', 'string'];
    const c = a + b;
    console.log(a);
    console.log(b);
    console.log(c);
}
// unknown
console.log('unknown ///////');
{
    const a = 30;
    const b = a === 123;
    // const c = a + 10; => エラー
    let d;
    if (typeof a === 'number') {
        d = a + 10;
    }
    console.log(a);
    console.log(b);
    console.log(d);
}
// boolean
console.log('boolean ///////');
{
    let a = true;
    var b = false;
    const c = true;
    let d = true;
    let e = true;
    // let f: false = true; => エラー
    console.log(a);
    console.log(b);
    console.log(typeof c);
    console.log(d);
    console.log(e);
}
//# sourceMappingURL=index.js.map