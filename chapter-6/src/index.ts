import { userInfo } from "os"

{
  type ExistingUser = {
    id: number
    name: string
  }
  type NewUser = {
    name: string
  }
type LegacyUser = {
  id?: number|string
  name: string
}


  function deleteUser(user: {id?: number, name: string}) {
    delete user.id
  }

  let existingUser: ExistingUser = {
    id: 1,
    name : 'user1'
  }
  // 削除前
  console.log(existingUser)
  deleteUser(existingUser) 
  // 削除後
  console.log(existingUser)

  let legacyUser: LegacyUser = {
    id: '1234',
    name: 'legacy1234'
  }

  // deleteUser(legacyUser)
  /*
    型 'LegacyUser' の引数を型 '{ id?: number | undefined; name: string; }' のパラメーターに割り当てることはできません。
    プロパティ 'id' の型に互換性がありません。
      型 'string | number | undefined' を型 'number | undefined' に割り当てることはできません。
        型 'string' を型 'number | undefined' に割り当てることはできません。ts(2345) 
  */
}
{
  class Animal {}
  class Bird extends Animal {
    chirp(){}
  }
  class Crow extends Bird {
    caw():void {}
  }
  /*
    CrowはBirdのサブタイプ
    BirdはAnimalsのサブタイプ
    Crow <: Bird <: Annimals
  */

  function chirp(bird: Bird): Bird {
    bird.chirp()
    return bird
  }

  // chirp(new Animal)
  /*
    型 'Animal' の引数を型 'Bird' のパラメーターに割り当てることはできません。
    プロパティ 'chirp' は型 'Animal' にありませんが、型 'Bird' では必須です。ts(2345)
  */

  chirp(new Bird)
  chirp(new Crow)

  function clone(f: (b: Bird) => Bird): void {}

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
  function birdToBird(b: Bird): Bird {}
  clone(birdToBird)

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
  function birdToCrow(d: Bird): Crow {}
  clone(birdToCrow)

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
　function birdToAnimal(d: Bird): Animal{}
  // clone(birdToAnimal)
  /*
  型 '(d: Bird) => Animal' の引数を型 '(b: Bird) => Bird' のパラメーターに割り当てることはできません。
  プロパティ 'chirp' は型 'Animal' にありませんが、型 'Bird' では必須です。ts(2345)
  */

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
  function animalToBird(a: Animal):Bird {}
  clone(animalToBird)

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
  function crowToBird(c: Crow):Bird {}
  // clone(crowToBird)
  /*
    型 '(c: Crow) => Bird' の引数を型 '(b: Bird) => Bird' のパラメーターに割り当てることはできません。
      パラメーター 'c' および 'b' は型に互換性がありません。
        プロパティ 'caw' は型 'Bird' にありませんが、型 'Crow' では必須です。ts(2345) 
  */
}

// 型の拡大
{
  // ベースの型へ拡大
  let a = 'x' // string
  let b = 3 // number
  let c = true // boolean
  let d = {x: 3} // {x: number}

  enum E {X, Y, Z}
  let e = E.X // E

  console.log(a,b,c,d,e)

  // イミュータブルな型
  const aa = 'x' // 'x'
  const bb = 3 // 3
  const cc = true // true
  const ee = E.X // E.X

  console.log(aa, bb, cc, ee)

  // 明示的な型アノテーション
  let aaa: 'x' = 'x'
  let bbb:3 = 3
  var ccc:true = true
  const ddd: {x: 3} = {x: 3}
}

 {
  // 拡大されない方をletで再割り当て=>拡大される
  const a = 'x' // 'x'
  let b = a // string

  // 型を狭く保つにはもとの宣言に明示的な型アノテーションを追加する
  const c: 'x' = 'x' // 'x'
  let d = c // 'x'
 }

{
  // null,undefinedに初期化された変数はanyに拡大される
  let a = null // any
  a = 3 // any
  a = 'b' // any

  function x() {
    let b =undefined // any
    b =3  // any
    b ='b'  // any
    return b
  }
  
  // 宣言されたスコープを離れると明確な型を割り当てる
  x() // string


}

// constアサーション
{
  let a = {x: 3} // x: number
  let b: {x: 3} // x: 3
  let c = {x: 3} as const // readonly x: 3;

  let d = [1, {x: 2}]
  /*
    let d: (number | {
      x: number;
    })[]
  */

  let e = [1, {x: 2}] as const 
  /*
    let e: readonly [1, {
      readonly x: 2;
    }]
  */
}

// 過剰プロパティチェック
{
  type Options = {
    baseURL: string
    cacheSize?: number
    tier?: 'prod'|'dev'
  }

  class API {
    constructor(private options: Options){}
  }

  new API({
    baseURL: 'https://google.com/',
    tier: 'prod'
  })

  // スペルミスした場合
  new API({
    baseURL: 'https://google.com/',
    // tierr: 'prod'
    /**
      型 '{ baseURL: string; tierr: string; }' の引数を型 'Options' のパラメーターに割り当てることはできません。
      オブジェクト リテラルで指定できるのは既知のプロパティのみですが、'tierr' は型 'Options' に存在しません。書こうとしたのは 'tier' ですか?ts(2345)
     */
  })

  new API({
    baseURL: 'https://google.com/',
    // BadTier: 'prod'
    /**
      型 '{ baseURL: string; BadTier: string; }' の引数を型 'Options' のパラメーターに割り当てることはできません。
      オブジェクト リテラルは既知のプロパティのみ指定できます。'BadTier' は型 'Options' に存在しません。ts(2345)
    */
  })

  new API({
    baseURL: 'https://google.com/',
    tier: 'prod'
  } as Options )

  let badOptions = {
    baseURL: 'https://google.com/',
    badTier: 'prod'
  }
  new API(badOptions)

  let options: Options = {
    baseURL: 'https://google.com/',
    // badTier: 'prod'
    /**
      型 '{ baseURL: string; badTier: string; }' を型 'Options' に割り当てることはできません。
      オブジェクト リテラルは既知のプロパティのみ指定できます。'badTier' は型 'Options' に存在しません。ts(2322)
     */
  }
  new API(options)

}

// 型の絞り込み
{
  // 文字列リテラル型の合併型を使ってCSSの単位が取り得る値を表現
  type Unit = 'cm'|'px'|'%'

  // 単位を列挙
  let units: Unit[] = ['cm', 'px', '%']

  // 各単位をチェックし、一致するものがなければnullを返す
  function parseUnit(value: string): Unit | null {
    for(let i=0; i < units.length; i++) {
      if(value.endsWith(units[i])) {
        return units[i]
      }
    }
    return null
  }

  type Width = {
    unit: Unit,
    value: number
  }

  function ParseWith(width: number| string | null): Width|null {
    if(width == null) {
      return null
    }

    if(typeof width === 'number') {
      return {unit: 'px', value: width}
    }

    let unit = parseUnit(width)
    if(unit) {
      return {unit, value: parseFloat(width)}
    }

    return null
  }

  console.log(ParseWith(100))
  console.log(ParseWith('100%'))
  console.log(ParseWith('100cm'))
  console.log(ParseWith(null))
}

// タグ付き合併型
{
  type UserTextEvent = { value: string}
  type UserMouseEvent = { value: [number, number]}

  type UserEvent = UserTextEvent|UserMouseEvent

  function handle(event: UserEvent) {
    if(typeof event.value === 'string') {
      event.value // string  
      return event
    }
    event.value // [number, number]
    return event
  }

  console.log(handle({value: 'a'}))
}

{
  type UserTextEvent = { value: string, target: HTMLInputElement}
  type UserMouseEvent = { value: [number, number], target: HTMLElement}

  type UserEvent = UserTextEvent|UserMouseEvent

  function handle(event: UserEvent) { 
     if(typeof event.value === 'string') {
       event.value
       event.target // (property) target: HTMLInputElement | HTMLElement
       //  UserTextEvent|UserMouseEventの引数の型を渡すことが出来るため。（合併型のメンバーは型が重複する場合がある）
       return
     }
     event.value
     event.target // (property) target: HTMLInputElement | HTMLElement
     //  UserTextEvent|UserMouseEventの引数の型を渡すことが出来るため。（合併型のメンバーは型が重複する場合がある）
   }
}

{
  type UserTextEvent = { type: 'TextEvent', value: string, target: HTMLInputElement}
  type UserMouseEvent = { type: 'MouseEvent', value: [number, number], target: HTMLElement}

  type UserEvent = UserTextEvent|UserMouseEvent

  function handle(event: UserEvent) { 
    if(event.type === 'TextEvent') {
      event.value
      event.target //(property) target: HTMLInputElement
      return
    }
    event.value
    event.target  // (property) target: HTMLElement
  }
}

// 完全性
{
  type Weekday = 'Mon'|'Tue'|'Wed'|'Thu'|'Fri'
  type Day = Weekday  |'Sat'|'Sun'

  /*
  function getNextDay(w: Weekday): Day { //関数に終了の return ステートメントがないため、戻り値の型には 'undefined' が含まれません。ts(2366)
    switch(w) {
      case 'Mon': return "Tue"
    }
  }
  */

  /*
  function isBig(n: number) { // 一部のコード パスは値を返しません。ts(7030)
  // tsconfigで"noImplicitReturns": trueを設定する必要がある
    if(n >= 100) {
      return true
    }
  }
  */
}

// 高度なオブジェクト型
// オブジェクト型についての型演算子
// ルックアップ型
{
  type APIResponse = {
    user: {
      userId: string
      friendList: {
        count: number
        friends: {
          firstName: string
          lastName: string
        }[]
      }
    }
  }

  // キーを指定して型を取得（ルックアップ）する
  type FriendList = APIResponse['user']['friendList']
  type Friend = FriendList['friends'][number]

  // function getAPIResponse():Promise<APIResponse> {}  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)
  function getAPIResponse():void {}  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)
  function renderFriendList(friendList: FriendList) {}

  let response = /*await*/ getAPIResponse() //トップレベルの 'await' 式は、'module' オプションが 'esnext' または 'system' に設定されていて、'target' オプションが 'es2017' 以上に設定されている場合にのみ使用できます。ts(1378)
}