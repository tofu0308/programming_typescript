import { REPLServer } from "repl";

function add(a: number, b: number): number {
  {
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
  console.log('// fibonacciGenerator')
  for (let i = 0; i < c; i++) {
    console.log(fibonacciGenerator.next());
  }

  function* createNumbers(): Generator<number> {
    let n = 0;
    while(1) {
      yield n++;
    }
  }
  
  let numbers = createNumbers();
  console.log('// numbers')
  for (let i = 0; i < c; i++) {
    console.log(numbers.next());
  }

  // iterator
  let numbersIterator = {
    *[Symbol.iterator]() {
      for (let n = 0; n < 10; n++) {
        yield n   
      }
    }
  }
  
  console.log('// numbersIterator')
  for (let d of numbersIterator) {
    console.log(d)
  }

  let allNumbersIterator = [...numbersIterator] 
  console.log(allNumbersIterator);

  let [one, two, ...rest] = numbersIterator;
  console.log(one, two, ...rest)
}

// 呼び出しシグネチャ
{
  type add = (a: number, b: number) => number;

   function area(radius: number):number | null {
     if(radius < 0) return null
     return  Math.PI *  ( radius ** 2 )
   }
  let r: number = 3
  let a = area(r);

  if(a !== null) {
    console.info('result', a)
  }

  // function freet(name: string)
  type Greet = (name: string) => string

  // function log(message: string, userId?: string)
  type Log = (message: string, userID?: string) => void
  let log: Log = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
  }
  log('message,string', '123456');

  // function sumVariadicSafe(...numbers: number[]): number
  type sumVariadicSafe = (...numbers: number[]) => number
}

//  文脈的型付け
{
  function times(
    f: (index: number) => void,
    n: number
  ) {
    for (let i = 0; i < n; i++) {
      f(i)
    }
  }
  
  times(n => console.info('times' ,n), 6);

  /*
  function f(n) { // パラメーター 'n' の型は暗黙的に 'any' になります。ts(7006)
    console.log(n)
  }
  times(f, 4)
  */
}

// オーバーロード
{
  /*

  type Reserve = {
    (form: Date,  to: Date,destination: string): Reservation
    (from: Date, destination: string): Reservation
  }

  // type Reservation = (hoge: string)
  let reserve: Reserve = (
    from: Date,
    to: Date,
    toOrDestination: string,
    destination?: string
  ) => {
    if( toOrDestination instanceof Date && destination !== undefined) {
      // 宿泊旅行を予約する
    }else if(typeof toOrDestination === 'string') {
      // 日帰り旅行を予約する
    }
  };

   function warnUser(warning: string) {
    if(warnUser.wasCalled) return;
    
    warnUser.wasCalled = true;
    console.log(warning);
  }
  warnUser.wasCalled = false;

  type WarnUser = {
    (warning: string): void
    wasCalled: boolean
  }

  const assignedWarnUser: WarnUser = warnUser
   */

}

// ポリモーフィズム
{
  type Filter = {
    <T>(array: T[]|undefined, f:(item: T) => boolean|undefined): T[]|undefined
  }
  
  let filter: Filter = (array, f) => {
    let result = [];
    for(let i = 0; i < array!.length; i++) {
      let item = array![i]
      if(f(item)) {
        result.push(item)
      }
    }
      console.log(result)
      return result    
  }

  filter([1,2,3,4], _ => _ < 3)
  filter([1,2,3], _ => _ > 2)
  filter(['a', 'b'], _ => _ !== 'b')

  let names = [
    {firstName: 'a氏'},
    {firstName: 'b氏'},
    {firstName: 'c氏'},
  ]
  filter(names, _ => _.firstName.startsWith('b'))
}