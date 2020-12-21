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
{
    class Promiser {
        constructor(f) { }
        then(g) {
            // エラー回避のためになんか返す
            return 'then';
        }
        catch(g) {
            // エラー回避のためになんか返す
            return 'catch';
        }
    }
    /*
      function readFilePromise(path: string): Promise<string> {
      return new Promise((resolve, reject) => {
        readFile(path, (error, result)=> {
          if(error) {
            reject(error)
          } else {
            resolve(result)
          }
        })
      })
    }
  
    function appendAndReadPromise(pat: string, data: string): Promise<string> {
      return appendPromise(path, data)
        .then(()=> readPromise(path))
        .catch(error => console.error(error))
    }
    function appendPromise(path, data) {}
    function readPromise(path) {}
    */
}
// async await
{
    async function getUser() {
        try {
            let user = await getUserID(18);
            let location = await getLocation(user);
            console.info('got location', user);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            console.info('done getting location');
        }
    }
    // エラー避け　適当に定義
    function getUserID(id) { }
    function getLocation(user) { return user; }
}
// 非同期ストリーム
// イベントエミッター
{
}
const redis = require("redis");
{
    // Redisクライアントの新しいインスタンスを作成
    // 処理が止まらないのでコメントにする
    /*
  
    let client = redis.createClient()
  
    // クライアントによって発行されるイベントをリッスン
    client.on('ready', ()=> console.info('Client is ready'))
    client.on('error', (e: Error) => console.error('An error ocurred!', e))
    client.on('reconnecting', (params:{attempt: number, delay: number}) => {
      console.info('Reconnecting...', params)
    })
    */
}
// 型安全なマルチスレッディング
// Web worker(browser)
{
}
//# sourceMappingURL=index.js.map