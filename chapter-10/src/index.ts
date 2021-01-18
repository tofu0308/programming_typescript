import {locale} from './locales/locale-us'
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants'
import { promises } from 'fs'

export default null

async function main() {
  let userLocale = await getUserLocale()
  let path = `./locales/locale-${userLocale}`
  let localeUS: typeof locale = await import(path)

  console.log(path)
}

function getUserLocale() {
  return 'us'
}

main()

// 名前空間
// 複数のファイルにまたがって1つの名前空間を設定することが可能（ここでは一つのファイルにまとめている）
namespace Network {
  export function get<T>(url: string): string {
    console.log(url)
    return url
  }
  export namespace HTTP {
    export function get<T>(url: string): string {
      console.log(url)
      return url
    }
  }

  export namespace TCP {
    // ...
  }
  export namespace UDP {
    // ...
  }
  export namespace IP {
    // ...
  }
}

namespace App {
  Network.get<string>('https://www.google.com/')
}

// 名前空間エイリアス
namespace A {
  export namespace B {
    export namespace C {
      export let d = 3
    }
  }
}

import d = A.B.C.d
import { builtinModules } from 'module'
import { captureRejectionSymbol } from 'events'
let e = d*3
console.log(e)


// コンパイルされた出力結果
namespace Flowers {
  export function give(count: number) {
    return `${count} flowers`
  }
}
let flowers = Flowers.give(4)
console.log(flowers)
// 名前空間はtsconfigの設定問わず、常にグローバル変数にコンパイルされる
/* コンパイルされたdist/index.jsの引用
var Flowers;
(function (Flowers) {
    function give(count) {
        return `${count} flowers`;
    }
    Flowers.give = give;
})(Flowers || (Flowers = {}));
let flowers = Flowers.give(4);
console.log(flowers);
*/

// 練習問題
// a
interface Currency {
  unit:'EUR'|'GBP'|'JPY'|'USD'
  value:number
}

namespace Currency {
  export let DEFAULT: Currency['unit'] = 'USD'
  export function from(value: number, unit = Currency.DEFAULT) : Currency {
    return {unit, value}
  }
}

let amountDue: Currency = {
  unit: 'JPY',
  value: 12345.1
}

let otherAmountDue = Currency.from(330, 'EUR')

// b
enum Color {
  RED = '#ff0000',
  GREEN = '#00ff00',
  BLUE = '#0000ff'
}

namespace Color {
  export function getClosest(to: string): Color {
    // エラー回避のために適当な値を返す
    return Color['RED']
  }
}
Color.getClosest('#ffa500')