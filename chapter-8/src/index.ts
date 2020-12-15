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