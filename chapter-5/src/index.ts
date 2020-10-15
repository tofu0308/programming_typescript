import { isBoolean } from "util"

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