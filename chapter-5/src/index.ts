import { isBoolean } from "util"
import { Z_ASCII } from "zlib"
import { serialize } from "v8"

// クラスと継承
{
  // チェスのゲームを表します
  class Game {
    private pieces = Game.makePieces()

    private static makePieces() {
      return [
        new King('White', 'E', 1),
        new King('Black', 'E', 8),

        /*
        new Queen('White', 'D', 1),
        new Queen('Black', 'D', 8),

        new Bishop('White', 'C', 1),
        new Bishop('Black', 'F', 1),
        new Bishop('White', 'C', 8),
        new Bishop('Black', 'F', 8),
        */
        // .....
      ]
    }
  }
  
  // チェスの駒
  abstract class Piece {
    protected position: Position
    constructor(
      private readonly color: Color,
      file: File,
      rank: Rank
    ){
      this.position = new Position(file, rank)
    }

    moveTo(position: Position) {
      this.position = this.position
    }
    abstract canMoveTo(position: Position): boolean
  }

  // 駒の位置（座標）
  class Position {
    constructor(
      private file: File,
      private rank: Rank
    ){}

    distanceFrom(position: Position) {
      return  {
        rank: Math.abs(position.rank - this.rank),
        file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
      }
    }
  }

  // 各駒
  class King extends Piece{
    canMoveTo(position: Position) {
      let distance = this.position.distanceFrom(position)
      return distance.rank < 2 && distance.file < 2
    }
  }

  // 非抽象クラス 'Bishop' はクラス 'Piece' からの継承抽象メンバー 'canMoveTo' を実装しません。ts(2515)
  /*
  class Queen extends Piece{}　
  class Bishop extends Piece{}
  class Knight extends Piece{}
  class Rook extends Piece{}
  class Pawn extends Piece{}
  */

  type Color = 'Black'|'White'
  type File = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'
  type Rank = 1|2|3|4|5|6|7|8

  // new Piece('White', 'E', 1) 抽象クラスのインスタンスは作成できません。ts(2511)
}

{
  let set = new Set
  set.add(1).add(2).add(3)

  console.log(set)
  let setA = set.has(2)
  let setB = set.has(4)

  console.log(setA)
  console.log(setB)
}

{
  class Set {
    has(value: number): boolean {
      return this.has(value)
    }
    add(value: number): this {
     return this
    }
  }
  
  class MutableSet extends Set {
    delete(value: number): boolean {
      return this.delete(value)
    }
    add(value: number): this {
      return this
     }
  }
}

{
  type Sushi = {
    calolies: number
    salty: boolean
    tasty: boolean
  }

  interface ISushi {
    calolies: number
    salty: boolean
    tasty: boolean
  }

  type Cake =　{
    calolies: number
    sweet: boolean
    tasty: boolean
  }
}

{
  type Food = {
    calolie: number
    tasty: boolean
  }
  type Sushi = Food & {
    salty: boolean
  }
  type Cake = Food & {
    sweet: boolean
  }

  interface IFood {
    calolie: number
    tasty: boolean
  }
  interface ISushi extends IFood {
    salty: boolean
  }
  interface ICake extends IFood {
    sweet: boolean
  }

  // 下記のパターンをinterfaceとして書き直す方法はない
  type A = number
  type B = A| string

  interface IA {
    good(x: number): string
    bad(x: number): string
  }
  /*
  interface IB extends IA {
    good(x: number): string
    bad(x: string): string
  }
インターフェイス 'IB' はインターフェイス 'IA' を正しく拡張していません。
  プロパティ 'bad' の型に互換性がありません。
    型 '(x: string) => string' を型 '(x: number) => string' に割り当てることはできません。
      パラメーター 'x' および 'x' は型に互換性がありません。
        型 'number' を型 'string' に割り当てることはできません。ts(2430)
  */
}
{
  // 宣言のマージ
  interface User {
    name: string
  }

  interface User {
    age: number
  }

  let a: User ={
    name: 'namae',
    age: 40
  }
  console.log(a)

  // type UserType = {name: string} 識別子 'UserType' が重複しています。ts(2300)
  // type UserType = {age: number} 識別子 'UserType' が重複しています。ts(2300)

  interface User2 {age: string}
  // interface User2 {age: number} 後続のプロパティ宣言は同じ型でなければなりません。プロパティ 'age' の型は 'string' である必要がありますが、ここでは型が 'number' になっています。ts(2717)

  interface User3<Age extends number> {age: Age}
  // interface User3<Age extends string> {age: Age} 'User3' のすべての宣言には、同一の型パラメーターがある必要があります。ts(2428)
}

 {
   interface Animal {
    readonly name: string 
    eat(food: string): void
    sleep(hours: number): void  
   }

    interface Feline { meow(): void}

    class Cat implements Animal, Feline {
      name = 'neko'
      eat(food: string) {
        console.info('Ate some', food, '. Mmm!')
      }
      sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
      }
      meow() {
        console.info('nekooo')
      }
    }

    const cat = new Cat()
    console.log(cat)
    console.log(cat.name)
    console.log(cat.eat('肉'))
    console.log(cat.sleep(36))
    console.log(cat.meow())
 }

// クラスは構造的に型付けされる
 {
  class Zebra {
    trot() {
      console.log('aaa');
    }
  }

  class Poodle {
    trot() {
      console.log('aaa');
    }
  }

  function ambleAround(animal: Zebra) {
    animal.trot()
  }

  let zebra = new Zebra
  let poodle = new Poodle
   ambleAround(zebra)
   ambleAround(poodle)
}

{
  class A { private x = 1 }
  class B extends A {}
  function f(a:A) {}

  f(new A)
  f(new B)
  // f({x: 1})
  /*
    型 '{ x: number; }' の引数を型 'A' のパラメーターに割り当てることはできません。
    プロパティ 'x' は型 'A' ではプライベートですが、型 '{ x: number; }' ではプライベートではありません。ts(2345)
  */
}

// クラスは値と型の両方を宣言する
{
  class C {}
  let c: C = new C

  enum E {F, G}
  let e: E = E.F



  type State = {
    [key: string]: string
  }
  interface StringDatabase {
    state: State
    get(key: string): string | null
    set(key: string, value: string): void
  }
  interface StringDatabaseConstructor{
    new(state?: State): StringDatabase
    from(state: State): StringDatabase
  }
  
  class StringDatabase {
    constructor(public state: State = {}) {}
    get(key: string): string | null {
      return key in this.state ? this.state[key] : null
    }
    set(key: string, value: string): void {
      this.state[key] = value
    }
    static from(state: State) {
      let db = new StringDatabase
      for(let key in state) {
        db.set(key, state[key])
      }
      return db
    }
  }

  let db = new StringDatabase({
    '1':'a',
    '2':'b',
    '3':'c',
    '4':'d'
  })
  console.log(db)
}

// ポリモーフィズム
{

  interface MyMap<K, V> {
    get(key: K):  void
    set(key: K, value: V): void
  }

  class MyMap<K, V>  {
    constructor(initialKey: K, initialValue: V) {}
    get(key: K){ return key }
    set(key:K, value: V){return `${key}/${value}`}
    merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K|K1, V|V1>{
      return map;
    }
    static of<K, V>(k: K, v: V){}
  }

  let a = new MyMap<string, number>('k', 1)
  let b = new MyMap('k', true)

   console.log (a.get('k'))
   console.log (b.set('k', false))
}

// ミックスイン
{
  type ClassConstructor<T> = new(...args: any[]) => T

  // class User {}

  function withEZDebug<C extends ClassConstructor<{getDebugValue(): object}>>(Class: C) {
    return class extends Class {
      debug() {
        let Name = this.constructor.name
        let value = this.getDebugValue()
        return `${Name}(${JSON.stringify(value)})`
      }
      constructor(...args: any[]) {
        super(...args)
      }
    }
  }

  class HardToDebugUser {
    constructor(
      private id: number,
      private firstName: string,
      private lastName: string
    ){}
    getDebugValue() {
      return {
        id: this.id,
        name: `${this.firstName} ${this.lastName}`
      }
    }
  }

  let User = withEZDebug(HardToDebugUser)
  let user = new User(3, 'FN', 'LN')
  console.log(user.debug())
}

// デコレーター
{
  @serializable
  class APIPayload {
    getValue(): Payload {
      return 15 // 何でもいいけど文字列以外のものを返す
    }
  }

  interface Payload {}
  type ClassConstructor<T> = new(...args: any[]) => T
  function serializable<
    T extends ClassConstructor<{
      getValue(): Payload
    }>
  >(Constructor: T) {
    return class extends Constructor {
      serialize() {
        return this.getValue().toString()
      }
    }
  }

  let DecoratedAPIPayload = serializable(APIPayload)
  let payload = new DecoratedAPIPayload
  let payloadSerialize = payload.serialize()
  // let serialized = payload.serialize() プロパティ 'serialize' は型 'APIPayload' に存在しません。ts(2339)

  console.log(payloadSerialize)
  console.log(typeof payloadSerialize)
}

// finalクラスをシミュレートする
{
 class MessageQueue {
   private constructor(private messages: string[]) {}
 } 

// class BadQueue extends MessageQueue クラス 'MessageQueue' を拡張できません。Class コンストラクターがプライベートに設定されています。ts(2675)
// new MessageQueue([]) クラス 'MessageQueue' のコンストラクターはプライベートであり、クラス宣言内でのみアクセス可能です。ts(2673)
}
{
  class MessageQueue {
    private constructor(private messages: string[]) {}
    static create(messages: string[]) {
      return new MessageQueue(messages)
    }
  } 

  // class BadQueue extends MessageQueue クラス 'MessageQueue' を拡張できません。Class コンストラクターがプライベートに設定されています。ts(2675)
  let messageQueue = MessageQueue.create([])
  console.log(messageQueue)
 }

 // デザインパターン
 // ファクトリーパターン
 {
   type Shoe = {
     purpose: string
   }

   class BalletFlat implements Shoe {
    purpose = 'dancing'
   }

   class Boot implements Shoe {
     purpose = 'woodcutting'
   }

   class Sneaker implements Shoe {
     purpose = 'walking'
   }

   let Shoe = {
     create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
       switch(type) {
         case 'balletFlat': return new BalletFlat
         case 'boot': return new Boot
         case 'sneaker': return new Sneaker
       }
     }
   }
  
   console.log(Shoe.create('balletFlat'))
   console.log(Shoe.create('boot'))
   console.log(Shoe.create('sneaker'))
}
