import {locale} from './locales/locale-us'
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants'
import { promises } from 'fs'

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
