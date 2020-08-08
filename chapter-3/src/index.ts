import { type } from "os";

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

  let danger: {}
  danger = {}
  danger = {x: 1}
  danger = []
  danger = 2
  console.log(danger);
}

// 型エイリアス
console.log('型エイリアス ///////');
{
  type Age = number;
  type Person = {
    name: string
    age: Age
  }

  let age: Age = 55;
  let driver: Person = {
    name: 'James May',
    age: age
  }
  console.log(driver);

  type Color = 'red'
  // type Color = 'blue' 識別子 'Color' が重複しています。ts(2300)
  let color: Color = 'red';
  console.log(color);
}
{
  type Color = 'yellow';
  let x = Math.random() < .5
  console.log(x);

  if(x) {
    type Color = 'purple';
    let b: Color = 'purple'
    console.log(b);
  } else {
    let b: Color = 'yellow'
    console.log(b);
  }
}

// 合併型と交差型
console.log('合併型と交差型 ///////');
{
  type Cat = {
    name: string,
    purrs: boolean
  }

  type Dog = {
    name: string,
    barks: boolean,
    wags: boolean
  }
  type CatOrDogOrBoth = Cat | Dog;
  type CatAndDog = Cat & Dog;

  let a: CatOrDogOrBoth = {
    name: 'neko',
    purrs: true
  }
  console.log(a);

  a = {
    name: 'inu',
    barks: true,
    wags: true
  }
  console.log(a);

  a = {
    name: 'neko',
    barks: true,
    purrs: true,
    wags: true
  }
  console.log(a);

  let b: CatAndDog = {
    name: "inu-neko",
    barks: true,
    purrs: true,
    wags: true
  }
  console.log(b);

  function trueOrNull(isTrue: boolean) {
    if(isTrue) return 'true'
    return null;
  }
  console.log(trueOrNull(true));
  console.log(trueOrNull(false));

  type Returns = string | null;
  function returns(a: Returns, b:number) {
    return a || b
  }
  console.log(returns('a', 2));
  console.log(returns(null, 2));

}

// 配列
console.log('配列 ///////');
{
  let a = [1,2,3];
  var ArrayB = ['a', 'b'];
  let c: string[] = ['a']
  let d = [1, 'a'];
  const e = [2, 'b'];

  let f = ['red'];
  f.push('blue');
  // f.push(true); 型 'true' の引数を型 'string' のパラメーターに割り当てることはできません。ts(2345)

  let g = [] // any[]
  g.push(1);
  g.push('red');
  g.push(true);

  let h: number[] = [];
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
    if(typeof _ === 'number') {
      return _ * 3
    }
    return _.toUpperCase();
  });
  console.log(i);

  const buildArray = () => {
    let a = [];
    a.push(1);
    a.push('x');
    return a
  }
  console.log(buildArray());
  let myArray = buildArray();
  // myArray.push(true); 型 'true' の引数を型 'string | number' のパラメーターに割り当てることはできません。ts(2345)
}

// タプル
console.log('タプル ///////');
{
  let a: [number] = [1];
  let b: [string, string, number] = ['aa', 'bb', 2];
  // b = ['aaa', 'bbb', 'ccc', 200]; 型 'string' を型 'number' に割り当てることはできません。ts(2322)

  console.log(a);
  console.log(b);

  let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10, 50]
  ]
  console.log(trainFares);

  let friends: [string, ...string[]] = ['Sara', 'Tail', 'Chole', 'Claire'];
  let list: [number, boolean, ...string[]] = [2, false, 'a', 'b', 'c', 'd', 'e'];

  console.log(friends);
  console.log(list);

  let as: readonly number[] = [1, 2, 3];
  let bs: readonly number[] = as.concat(4,5,6);
  let three = bs[2];
  // as[4] = 5; 型 'readonly number[]' のインデックス シグネチャは、読み取りのみを許可します。ts(2542)
  // as.push(6); プロパティ 'push' は型 'readonly number[]' に存在しません。ts(2339)

  console.log(as);
  console.log(bs);
  console.log(three);

  type A = readonly string[];
  type B = ReadonlyArray<string>;
  type C = Readonly<string[]>;

  type D = readonly [number, string];
  type E = Readonly<[number, string]>;
}

// null,undefind,void,never
console.log('null,undefind,void,never ///////');
{
  function a(x: number) {
    if(x < 10) return x;
    return null;
  }

  function b() {
    return undefined;
  }

  function c() {
    let a = 2 + 2
    let b = a * a
  }

  function d() {
    console.log('dが実行された')
    // エラーで処理止まるので
    // throw TypeError('I always Error');
  }

  function e() {
    while(true) {
      c();
    }
  }

  console.log(a(2));
  console.log(a(36));
  console.log(b());
  console.log(c());
  console.log(d());
  // 叩き続けてしまうので
  // console.log(e());
}

// 列挙型
console.log('列挙型 ///////');
{
  enum Language {
    English = 0,
    Spanish = 1,
  }

  // 分割が可能
  enum Language {
    Russian = 2
  }

  let myFirstLangage = Language.English;
  let mySecondLanguage = Language.Russian;

  console.log(myFirstLangage);
  console.log(mySecondLanguage);

  enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = '0xc10050',
    White = 255
  }

  let red = Color.Red;
  let pink = Color.Pink;

  console.log(red);
  console.log(pink);

  let a = Color.Red
  // let b = Color.Green プロパティ 'Green' は型 'typeof Color' に存在しません。ts(2339)

  let c = Color[255];
  let d = Color[6];

  console.log(a)
  console.log(c)
  console.log(d) // undefinedだがエラーにならない
}

{
 const enum Language {
   English,
   Spanish,
   Russian
 } 

 let a = Language.English;
 // let b = Language.Tagalog; プロパティ 'Tagalog' は型 'typeof Language' に存在しません。ts(2339)
 // let c = Language[0]; const 列挙型メンバーは、文字列リテラルを使用してのみアクセスできます。ts(2476)
 // let d = Language[6]; const 列挙型メンバーは、文字列リテラルを使用してのみアクセスできます。ts(2476)

 console.log(a);
}

{
  const enum Flippable {
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skatebord = 'Skatevord',
    Table = 'Table'
  }

  function flip(f: Flippable) {
    return 'fliped it'
  }

  console.log(flip(Flippable.Chair));
  console.log(flip(Flippable.Cup));
  // console.log(flip(Flippable.Hat)); プロパティ 'Hat' は型 'typeof Flippable' に存在しません。ts(2339)
  // console.log(flip(12)); //型 '12' の引数を型 'Flippable' のパラメーターに割り当てることはできません。ts(2345)

  // enum の中に数値が一つでもあると、すべての数値が割り当て可能となり、enum全体が安全ではなくなる
}

