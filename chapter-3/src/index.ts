function squareOf(n:number) {
  return n * n
}

// number以外はエラー
console.log(squareOf(2+2))

console.log('ここから3.2.1　型の初歩');
// any
console.log('any ///////');
{
  const a: any = 666;
  const b: any = ['any', 'string'];
  const c: any = a + b;

  console.log(a);
  console.log(b);
  console.log(c);
}
// unknown
console.log('unknown ///////');
{
  const a: unknown = 30;
  const b = a === 123;
  // const c = a + 10; エラー

  let d;
  if (typeof a === 'number') {
    d = a +10;
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
  let d: boolean = true;
  let e: true = true;
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
  let e: number = 100;
  let f: 26.18 = 26.18;
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
  let d = a < 12345
  // let e = 88.5n; bigint リテラルは整数である必要があります。ts(1353)
  let f: bigint = 100n;
  let g: 100n = 100n;
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
  let d = a + stringb + ' ' + c
  let e: string = 'string e';
  let f: 'string f' = 'string f';
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
  let b: Symbol = Symbol('b');
  var SymbolC = a === b;
  //  let d = a + 'x'; '+' 演算子を 'symbol' 型に適用することはできません。ts(2469)

  console.log(a);
  console.log(b);
  console.log(SymbolC);

  const e = Symbol('e');
  const f: unique symbol = Symbol('f');
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
  let a: object = {
    b: 'x'
  }
  // a.b プロパティ 'b' は型 'object' に存在しません。ts(2339)
}

{
  let a = {
    b: 'x'
  }
  a.b // (property) b: string
  console.log(a);
  console.log(a.b);

  let b = {
    c: {
      d: 'f'
    }
  }
  console.log(b);
  console.log(b.c);
  console.log(b.c.d);
}

{
  let a: {b: number} = {
    b: 12
  }
  console.log(a);
  console.log(a.b);

  let c: {
    firstName: string
    lastName: string
  } = {
    firstName: 'jhon',
    lastName: 'barrowman'
  }
  console.log(c);

  class Person{
    constructor(
      public firstName: string,
      public lastName: string
    ){}
  }
  c = new Person('matt', 'smith');
  console.log(c);
}

{
  let a: {b: number};
  // a = {} プロパティ 'b' は型 '{}' にありませんが、型 '{ b: number; }' では必須です。ts(2741)
  a = {
    b: 1,
    // c: 2
    // 型 '{ b: number; c: number; }' を型 '{ b: number; }' に割り当てることはできません。
    //   オブジェクト リテラルは既知のプロパティのみ指定できます。'c' は型 '{ b: number; }' に存在しません。ts(2322)
  }

  let aa: {
    b: number
    c? : string
    [key: number]: boolean
  }
  aa = {b:1}
  aa = {b:2, c: undefined}
  aa = {b:3, c: 'string c'}
  aa = {b:4, 10: true };
  aa = {b:5, 20: true, 30: false };
  // aa = {40: true}; プロパティ 'b' は型 '{ 40: true; }' にありませんが、型 '{ [key: number]: boolean; b: number; c?: string | undefined; }' では必須です。ts(2741)
  // aa = {b:6, 50: 'string' }; 型 'string' を型 'boolean' に割り当てることはできません。ts(2322)

  console.log(aa);

  let user: {
    readonly firstName: string
  } = {
    firstName: 'abby'
  }
  // user.firstName = 'abby with an e' 読み取り専用プロパティであるため、'firstName' に代入することはできません。ts(2540)

}
