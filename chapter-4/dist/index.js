"use strict";
{
    function add(a, b) {
        return a + b;
    }
    // 名前付き関数
    function greet(name) {
        return `hello ${name}`;
    }
    // 関数式
    let greet2 = function (name) {
        return `hello ${name}`;
    };
    // アロー関数式
    let greet3 = (name) => {
        return `hello ${name}`;
    };
    // アロー関数式の省略気泡
    let greet4 = (name) => `hello ${name}`;
    //　関数コンストラクター
    let greet5 = new Function('name', 'return "hello " + name ');
    console.log(add(1, 2));
    console.log(greet('greet'));
    console.log(greet2('greet2'));
    console.log(greet3('greet3'));
    console.log(greet4('greet4'));
    console.log(greet5('greet5'));
    // console.log(add(1)); 2 個の引数が必要ですが、1 個指定されました。ts(2554)
    // console.log(add(1, 'a')); 型 '"a"' の引数を型 'number' のパラメーターに割り当てることはできません。ts(2345)
}
//# sourceMappingURL=index.js.map