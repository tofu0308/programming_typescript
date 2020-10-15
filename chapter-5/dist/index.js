"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// クラスと継承
{
    // チェスのゲームを表します
    class Game {
        constructor() {
            this.pieces = Game.makePieces();
        }
        static makePieces() {
            return [
                new King('White', 'E', 1),
                new King('Black', 'E', 8),
            ];
        }
    }
    // チェスの駒
    class Piece {
        constructor(color, file, rank) {
            this.color = color;
            this.position = new Position(file, rank);
        }
        moveTo(position) {
            this.position = this.position;
        }
    }
    // 駒の位置（座標）
    class Position {
        constructor(file, rank) {
            this.file = file;
            this.rank = rank;
        }
        distanceFrom(position) {
            return {
                rank: Math.abs(position.rank - this.rank),
                file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
            };
        }
    }
    // 各駒
    class King extends Piece {
        canMoveTo(position) {
            let distance = this.position.distanceFrom(position);
            return distance.rank < 2 && distance.file < 2;
        }
    }
    // new Piece('White', 'E', 1) 抽象クラスのインスタンスは作成できません。ts(2511)
}
{
    let set = new Set;
    set.add(1).add(2).add(3);
    console.log(set);
    let setA = set.has(2);
    let setB = set.has(4);
    console.log(setA);
    console.log(setB);
}
{
    class Set {
        has(value) {
            return this.has(value);
        }
        add(value) {
            return this;
        }
    }
    class MutableSet extends Set {
        delete(value) {
            return this.delete(value);
        }
        add(value) {
            return this;
        }
    }
}
{
}
{
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
    let a = {
        name: 'namae',
        age: 40
    };
    console.log(a);
    // interface User3<Age extends string> {age: Age} 'User3' のすべての宣言には、同一の型パラメーターがある必要があります。ts(2428)
}
//# sourceMappingURL=index.js.map