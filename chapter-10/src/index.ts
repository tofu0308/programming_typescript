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
let e = d*3
console.log(e)