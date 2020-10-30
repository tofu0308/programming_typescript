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
{
    class Cat {
        constructor() {
            this.name = 'neko';
        }
        eat(food) {
            console.info('Ate some', food, '. Mmm!');
        }
        sleep(hours) {
            console.info('Slept for', hours, 'hours');
        }
        meow() {
            console.info('nekooo');
        }
    }
    const cat = new Cat();
    console.log(cat);
    console.log(cat.name);
    console.log(cat.eat('肉'));
    console.log(cat.sleep(36));
    console.log(cat.meow());
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
    function ambleAround(animal) {
        animal.trot();
    }
    let zebra = new Zebra;
    let poodle = new Poodle;
    ambleAround(zebra);
    ambleAround(poodle);
}
{
    class A {
        constructor() {
            this.x = 1;
        }
    }
    class B extends A {
    }
    function f(a) { }
    f(new A);
    f(new B);
    // f({x: 1})
    /*
      型 '{ x: number; }' の引数を型 'A' のパラメーターに割り当てることはできません。
      プロパティ 'x' は型 'A' ではプライベートですが、型 '{ x: number; }' ではプライベートではありません。ts(2345)
    */
}
// クラスは値と型の両方を宣言する
{
    class C {
    }
    let c = new C;
    let E;
    (function (E) {
        E[E["F"] = 0] = "F";
        E[E["G"] = 1] = "G";
    })(E || (E = {}));
    let e = E.F;
    class StringDatabase {
        constructor(state = {}) {
            this.state = state;
        }
        get(key) {
            return key in this.state ? this.state[key] : null;
        }
        set(key, value) {
            this.state[key] = value;
        }
        static from(state) {
            let db = new StringDatabase;
            for (let key in state) {
                db.set(key, state[key]);
            }
            return db;
        }
    }
    let db = new StringDatabase({
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd'
    });
    console.log(db);
}
// ポリモーフィズム
{
    class MyMap {
        constructor(initialKey, initialValue) { }
        get(key) { return key; }
        set(key, value) { return `${key}/${value}`; }
        merge(map) {
            return map;
        }
        static of(k, v) { }
    }
    let a = new MyMap('k', 1);
    let b = new MyMap('k', true);
    console.log(a.get('k'));
    console.log(b.set('k', false));
}
//# sourceMappingURL=index.js.map