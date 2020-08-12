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