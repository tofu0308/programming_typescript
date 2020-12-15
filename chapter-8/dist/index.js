"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 非同期プログラミングと並行処理
const fs = require("fs");
// Javascriptのイベントループ　
{
    // 実行結果はC>B>A 邪魔なのでコメントにする
    /*
    setTimeout(()=>console.info('A')  ,1)
    setTimeout(()=>console.info('B')  ,2)
    console.info('C')
    */
}
// コールバックの処理
{
    function readFile(path, options, callback) { }
    fs.readFile('/var/log/apache2/access_log', { encoding: 'utf8' }, (error, data) => {
        if (error) {
            console.error('error reading!', error);
            return;
        }
        console.log('success reading!', data);
    });
    fs.appendFile('/var/log/apache2/access_log', 'New access log entry.', error => {
        if (error) {
            console.error('error writeig!', error);
        }
    });
}
//# sourceMappingURL=index.js.map