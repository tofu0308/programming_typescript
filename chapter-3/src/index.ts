function squareOf(n:number) {
  return n * n
}

// number以外はエラー
console.log(squareOf(2+2))

// any
const a: any = 666;
const b: any = ['any', 'string'];
const c: any = a + b;

console.log(a);
console.log(b);
console.log(c);
