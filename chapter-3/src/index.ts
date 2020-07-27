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
  var b = false;
  const c = true;
  let d: boolean = true;
  let e: true = true;
  // let f: false = true; エラー

  console.log(a);
  console.log(b);
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
