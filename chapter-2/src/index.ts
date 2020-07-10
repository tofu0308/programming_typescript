console.log('hello TypeScript')

{
  let a: number = 1 + 2
  let b: number = a + 3
  let c: {apple: number, banana: number} = {
    apple: a,
    banana: b
  };

  let d: number = c.apple * 4

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(c.apple);
  console.log(c.banana);
  console.log(d);
}

