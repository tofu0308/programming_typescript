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

}
