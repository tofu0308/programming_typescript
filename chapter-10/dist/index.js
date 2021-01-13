"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=index.js.map