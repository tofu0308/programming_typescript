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
    // const c = a + 10; エラー
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
    var booleanb = false;
    const c = true;
    let d = true;
    let e = true;
    // let f: false = true; エラー
    console.log(a);
    console.log(booleanb);
    console.log(c);
    console.log(d);
    console.log(e);
}
// number
console.log('number ///////');
{
    let a = 1234;
    let b = Infinity * 0.10;
    const c = 5678;
    let d = a < b;
    let e = 100;
    let f = 26.18;
    // let g: 26.18 = 26; エラー
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
// bigint
console.log('bigint ///////');
{
    let a = 1234n;
    const b = 5678n;
    var bigintc = a + b;
    let d = a < 12345;
    // let e = 88.5n; bigint リテラルは整数である必要があります。ts(1353)
    let f = 100n;
    let g = 100n;
    // let h: bigint = 100; 型 '100' を型 'bigint' に割り当てることはできません。ts(2322)
    console.log(a);
    console.log(b);
    console.log(bigintc);
    console.log(d);
    console.log(f);
    console.log(g);
}
// string
console.log('string ///////');
{
    let a = 'stringa';
    var stringb = 'stringb';
    const c = '!';
    let d = a + stringb + ' ' + c;
    let e = 'string e';
    let f = 'string f';
    //let g : 'string g' = 'string h';  型 '"string h"' を型 '"string g"' に割り当てることはできません。ts(2322)
    console.log(a);
    console.log(stringb);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
// symbol
console.log('symbol ///////');
{
    let a = Symbol('a');
    let b = Symbol('b');
    var SymbolC = a === b;
    //  let d = a + 'x'; '+' 演算子を 'symbol' 型に適用することはできません。ts(2469)
    console.log(a);
    console.log(b);
    console.log(SymbolC);
    const e = Symbol('e');
    const f = Symbol('f');
    // let g: unique symbol =  Symbol('f'); 型が 'unique symbol' 型の変数は、'const' である必要があります。ts(1332)
    let h = e === e;
    // let i = e === f; 型 'typeof e' と 'typeof f' には重複がないため、この条件は常に 'false' を返します。ts(2367)
    console.log(e);
    console.log(f);
    console.log(h);
}
// オブジェクト
console.log('オブジェクト ///////');
{
    let a = {
        b: 'x'
    };
    // a.b プロパティ 'b' は型 'object' に存在しません。ts(2339)
}
{
    let a = {
        b: 'x'
    };
    a.b; // (property) b: string
    console.log(a);
    console.log(a.b);
    let b = {
        c: {
            d: 'f'
        }
    };
    console.log(b);
    console.log(b.c);
    console.log(b.c.d);
}
{
    let a = {
        b: 12
    };
    console.log(a);
    console.log(a.b);
    let c = {
        firstName: 'jhon',
        lastName: 'barrowman'
    };
    console.log(c);
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    c = new Person('matt', 'smith');
    console.log(c);
}
{
    let a;
    // a = {} プロパティ 'b' は型 '{}' にありませんが、型 '{ b: number; }' では必須です。ts(2741)
    a = {
        b: 1,
    };
    let aa;
    aa = { b: 1 };
    aa = { b: 2, c: undefined };
    aa = { b: 3, c: 'string c' };
    aa = { b: 4, 10: true };
    aa = { b: 5, 20: true, 30: false };
    // aa = {40: true}; プロパティ 'b' は型 '{ 40: true; }' にありませんが、型 '{ [key: number]: boolean; b: number; c?: string | undefined; }' では必須です。ts(2741)
    // aa = {b:6, 50: 'string' }; 型 'string' を型 'boolean' に割り当てることはできません。ts(2322)
    console.log(aa);
    let user = {
        firstName: 'abby'
    };
    // user.firstName = 'abby with an e' 読み取り専用プロパティであるため、'firstName' に代入することはできません。ts(2540)
    let danger;
    danger = {};
    danger = { x: 1 };
    danger = [];
    danger = 2;
    console.log(danger);
}
// 型エイリアス
console.log('型エイリアス ///////');
{
    let age = 55;
    let driver = {
        name: 'James May',
        age: age
    };
    console.log(driver);
    // type Color = 'blue' 識別子 'Color' が重複しています。ts(2300)
    let color = 'red';
    console.log(color);
}
//# sourceMappingURL=index.js.map