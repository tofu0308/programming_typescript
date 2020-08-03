"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
{
    let x = Math.random() < .5;
    console.log(x);
    if (x) {
        let b = 'purple';
        console.log(b);
    }
    else {
        let b = 'yellow';
        console.log(b);
    }
}
// 合併型と交差型
console.log('合併型と交差型 ///////');
{
    let a = {
        name: 'neko',
        purrs: true
    };
    console.log(a);
    a = {
        name: 'inu',
        barks: true,
        wags: true
    };
    console.log(a);
    a = {
        name: 'neko',
        barks: true,
        purrs: true,
        wags: true
    };
    console.log(a);
    let b = {
        name: "inu-neko",
        barks: true,
        purrs: true,
        wags: true
    };
    console.log(b);
    function trueOrNull(isTrue) {
        if (isTrue)
            return 'true';
        return null;
    }
    console.log(trueOrNull(true));
    console.log(trueOrNull(false));
    function returns(a, b) {
        return a || b;
    }
    console.log(returns('a', 2));
    console.log(returns(null, 2));
}
// 配列
console.log('配列 ///////');
{
    let a = [1, 2, 3];
    var ArrayB = ['a', 'b'];
    let c = ['a'];
    let d = [1, 'a'];
    const e = [2, 'b'];
    let f = ['red'];
    f.push('blue');
    // f.push(true); 型 'true' の引数を型 'string' のパラメーターに割り当てることはできません。ts(2345)
    let g = []; // any[]
    g.push(1);
    g.push('red');
    g.push(true);
    let h = [];
    h.push(1);
    // h.push('red'); 型 '"red"' の引数を型 'number' のパラメーターに割り当てることはできません。ts(2345)
    console.log(a);
    console.log(ArrayB);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    const i = d.map(_ => {
        if (typeof _ === 'number') {
            return _ * 3;
        }
        return _.toUpperCase();
    });
    console.log(i);
    const buildArray = () => {
        let a = [];
        a.push(1);
        a.push('x');
        return a;
    };
    console.log(buildArray());
    let myArray = buildArray();
    // myArray.push(true); 型 'true' の引数を型 'string | number' のパラメーターに割り当てることはできません。ts(2345)
}
// タプル
console.log('タプル ///////');
{
    let a = [1];
    let b = ['aa', 'bb', 2];
    // b = ['aaa', 'bbb', 'ccc', 200]; 型 'string' を型 'number' に割り当てることはできません。ts(2322)
    console.log(a);
    console.log(b);
    let trainFares = [
        [3.75],
        [8.25, 7.70],
        [10, 50]
    ];
    console.log(trainFares);
    let friends = ['Sara', 'Tail', 'Chole', 'Claire'];
    let list = [2, false, 'a', 'b', 'c', 'd', 'e'];
    console.log(friends);
    console.log(list);
    let as = [1, 2, 3];
    let bs = as.concat(4, 5, 6);
    let three = bs[2];
    // as[4] = 5; 型 'readonly number[]' のインデックス シグネチャは、読み取りのみを許可します。ts(2542)
    // as.push(6); プロパティ 'push' は型 'readonly number[]' に存在しません。ts(2339)
    console.log(as);
    console.log(bs);
    console.log(three);
}
//# sourceMappingURL=index.js.map