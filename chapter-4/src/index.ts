{
  function add(a: number, b: number): number {
    return a + b;
  }

  // 名前付き関数
  function greet(name: string) {
    return `hello ${name}`
  }

  // 関数式
  let greet2 = function(name: string) {
    return `hello ${name}`
  }

  // アロー関数式
  let greet3 = (name: string) => {
    return `hello ${name}`
  }

  // アロー関数式の省略気泡
  let greet4 = (name: string) => `hello ${name}`

  //　関数コンストラクター
  let greet5 = new Function('name', 'return "hello " + name ')

  console.log(add(1, 2));
  console.log(greet('greet'));
  console.log(greet2('greet2'));
  console.log(greet3('greet3'));
  console.log(greet4('greet4'));
  console.log(greet5('greet5'));

  // console.log(add(1)); 2 個の引数が必要ですが、1 個指定されました。ts(2554)
  // console.log(add(1, 'a')); 型 '"a"' の引数を型 'number' のパラメーターに割り当てることはできません。ts(2345)
}

// オプションパラメーターとデフォルトパラメーター
{
  function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in, pattern A.');
  }

  log('Page loaded');
  log('User signed in', '123abc');
}
{
  function log(message: string, userId = 'Not signed in, pattern B.') {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId);
  }

  log('User clicked on a button', 'def456');
  log('User, signed out.');
  
}
{
  type Context = {
    appId?: string
    userId?: string
  }

  function log(message: string, context: Context = {}) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, context.userId);
  }
  log('patter3', {userId: '7g8h9i'})
}

// レストパラメーター
{
  function sum(numbers: number[]): number {
    let total = numbers.reduce((total, n)=> total + n, 0);
    console.log(total);
    return total;
  }

  function sumVariadic(): number {
    return Array.from(arguments).reduce((total, n)=> total + n, 0);
  }

  function sumVaridacSafe(...numbers: number[]): number {
    let total = numbers.reduce((total, n) => total + n + 0);
    console.log(total);
    return total;
  }

  sum([1,2,3]);
  // console.log((sumVariadic(1,2,3))); 0 個の引数が必要ですが、3 個指定されました。ts(2554)
  sumVaridacSafe(1,2,3,4,5)
}

// call, apply, bind
{
  function add(a: number, b: number) {
    let add = a + b;
    console.log(add);
    return add;
  }

  add(10, 20);
  add.apply(null, [10, 20])
  add.call(null, 10, 20)
  add.bind(null, 10, 20)()
}

// thisの型付け
{
  function fancyDate(this: Date) {
    const Date: string = `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
    console.log(Date);
    return Date
  }

  fancyDate.call(new Date);
  // fancyDate(); 型 'void' の 'this' コンテキストを型 'Date' のメソッドの 'this' に割り当てることはできません。ts(2684)
}

// generator
{
  function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while(true) {
      yield a;
      [a, b] = [b, a + b]
    }
  }
  let fibonacciGenerator = createFibonacciGenerator();
  
  const c: number = 10;
  for (let i = 0; i < c; i++) {
    console.log(fibonacciGenerator.next());
  }
}