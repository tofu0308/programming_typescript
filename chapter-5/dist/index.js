"use strict";
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
//# sourceMappingURL=index.js.map