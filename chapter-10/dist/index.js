"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
async function main() {
    let userLocale = await getUserLocale();
    let path = `./locales/locale-${userLocale}`;
    let localeUS = await Promise.resolve().then(() => require(path));
    console.log(path);
}
function getUserLocale() {
    return 'us';
}
main();
// 名前空間
// 複数のファイルにまたがって1つの名前空間を設定することが可能（ここでは一つのファイルにまとめている）
var Network;
(function (Network) {
    function get(url) {
        console.log(url);
        return url;
    }
    Network.get = get;
    let HTTP;
    (function (HTTP) {
        function get(url) {
            console.log(url);
            return url;
        }
        HTTP.get = get;
    })(HTTP = Network.HTTP || (Network.HTTP = {}));
})(Network || (Network = {}));
var App;
(function (App) {
    Network.get('https://www.google.com/');
})(App || (App = {}));
// 名前空間エイリアス
var A;
(function (A) {
    let B;
    (function (B) {
        let C;
        (function (C) {
            C.d = 3;
        })(C = B.C || (B.C = {}));
    })(B = A.B || (A.B = {}));
})(A || (A = {}));
var d = A.B.C.d;
let e = d * 3;
console.log(e);
// コンパイルされた出力結果
var Flowers;
(function (Flowers) {
    function give(count) {
        return `${count} flowers`;
    }
    Flowers.give = give;
})(Flowers || (Flowers = {}));
let flowers = Flowers.give(4);
console.log(flowers);
var Currency;
(function (Currency) {
    Currency.DEFAULT = 'USD';
    function from(value, unit = Currency.DEFAULT) {
        return { unit, value };
    }
    Currency.from = from;
})(Currency || (Currency = {}));
let amountDue = {
    unit: 'JPY',
    value: 12345.1
};
let otherAmountDue = Currency.from(330, 'EUR');
// b
var Color;
(function (Color) {
    Color["RED"] = "#ff0000";
    Color["GREEN"] = "#00ff00";
    Color["BLUE"] = "#0000ff";
})(Color || (Color = {}));
(function (Color) {
    function getClosest(to) {
        // エラー回避のために適当な値を返す
        return Color['RED'];
    }
    Color.getClosest = getClosest;
})(Color || (Color = {}));
Color.getClosest('#ffa500');
//# sourceMappingURL=index.js.map