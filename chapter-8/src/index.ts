// 非同期プログラミングと並行処理
import * as fs from 'fs'

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
  function readFile(
    path: string,
    options: {encoding: string, flag?: string},
    callback: (err: Error|null, data:string|null) => void
  ): void {}

  fs.readFile(
    '/var/log/apache2/access_log',
    {encoding: 'utf8'},
    (error, data) => {
      if(error) {
        console.error('error reading!', error)
        return
      }
      console.log('success reading!', data)
    }
  )

  fs.appendFile(
    '/var/log/apache2/access_log',
    'New access log entry.',
    error => {
      if(error) {
        console.error('error writeig!', error)
      }
    }
  )
}

// プロミスを使って健全さを取り戻す
import { readFile } from 'fs'
{
  type Executer<T> = (
    resolve: (result: T) => void,
    reject: (error: unknown) => void
  ) => void

  class Promiser<T> {
    constructor(f: Executer<T>) {}
    then<U>(g: (result: T) => Promise<U>| U): Promise<U>{
      // エラー回避のためになんか返す
      return 'then' as any
    }
    catch<U>(g: (result: T) => Promise<U>| U): Promise<U>{
      // エラー回避のためになんか返す
      return 'catch' as any
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
      let user = await getUserID(18)
      let location = await getLocation(user)
      console.info('got location', user)
    } catch(error) {
      console.error(error)
    } finally {
      console.info('done getting location')
    }
  }

  // エラー避け　適当に定義
  function getUserID(id:number) {}
  function getLocation(user: void) { return user}
}

// 非同期ストリーム
// イベントエミッター
{
  interface Emitter {
    // イベントを送信
    emit(channel: string, value: unknown): void

    //　イベント送信時、何かを行う
    on(channel: string, f: (value: unknown) => void): void
  }
}

const redis = require("redis");
{
  type Events = {
    ready: void
    error: Error
    reconnecting: {attempt: number, delay: number}
  }

  type RedisClient = {
    on<E extends keyof Events> (
      event: Error,
      f:(arg: Events[E] ) => void
    ): void
    emit<E extends keyof Events> (
      event: Error,
      f:(arg: Events[E] ) => void
    ): void
  }

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

