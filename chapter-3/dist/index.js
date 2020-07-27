"use strict";
function squareOf(n) {
    return n * n;
}
// number以外はエラー
console.log(squareOf(2 + 2));
// any
const a = 666;
const b = ['any', 'string'];
const c = a + b;
console.log(a);
console.log(b);
console.log(c);
//# sourceMappingURL=index.js.map