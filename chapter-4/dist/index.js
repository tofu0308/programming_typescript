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
// オプションパラメーターとデフォルトパラメーター
{
    function log(message, userId) {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, userId || 'Not signed in, pattern A.');
    }
    log('Page loaded');
    log('User signed in', '123abc');
}
{
    function log(message, userId = 'Not signed in, pattern B.') {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, userId);
    }
    log('User clicked on a button', 'def456');
    log('User, signed out.');
}
{
    function log(message, context = {}) {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, context.userId);
    }
    log('patter3', { userId: '7g8h9i' });
}
// レストパラメーター
{
    function sum(numbers) {
        let total = numbers.reduce((total, n) => total + n, 0);
        console.log(total);
        return total;
    }
    function sumVariadic() {
        return Array.from(arguments).reduce((total, n) => total + n, 0);
    }
    function sumVaridacSafe(...numbers) {
        let total = numbers.reduce((total, n) => total + n + 0);
        console.log(total);
        return total;
    }
    sum([1, 2, 3]);
    // console.log((sumVariadic(1,2,3))); 0 個の引数が必要ですが、3 個指定されました。ts(2554)
    sumVaridacSafe(1, 2, 3, 4, 5);
}
// call, apply, bind
{
    function add(a, b) {
        let add = a + b;
        console.log(add);
        return add;
    }
    add(10, 20);
    add.apply(null, [10, 20]);
    add.call(null, 10, 20);
    add.bind(null, 10, 20)();
}
//# sourceMappingURL=index.js.map