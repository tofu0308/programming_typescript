"use strict";
{
    function deleteUser(user) {
        delete user.id;
    }
    let existingUser = {
        id: 1,
        name: 'user1'
    };
    // 削除前
    console.log(existingUser);
    deleteUser(existingUser);
    // 削除後
    console.log(existingUser);
    let legacyUser = {
        id: '1234',
        name: 'legacy1234'
    };
    // deleteUser(legacyUser)
    /*
      型 'LegacyUser' の引数を型 '{ id?: number | undefined; name: string; }' のパラメーターに割り当てることはできません。
      プロパティ 'id' の型に互換性がありません。
        型 'string | number | undefined' を型 'number | undefined' に割り当てることはできません。
          型 'string' を型 'number | undefined' に割り当てることはできません。ts(2345)
    */
}
{
    class Animal {
    }
    class Bird extends Animal {
        chirp() { }
    }
    class Crow extends Bird {
        caw() { }
    }
    /*
      CrowはBirdのサブタイプ
      BirdはAnimalsのサブタイプ
      Crow <: Bird <: Annimals
    */
    function chirp(bird) {
        bird.chirp();
        return bird;
    }
    // chirp(new Animal)
    /*
      型 'Animal' の引数を型 'Bird' のパラメーターに割り当てることはできません。
      プロパティ 'chirp' は型 'Animal' にありませんが、型 'Bird' では必須です。ts(2345)
    */
    chirp(new Bird);
    chirp(new Crow);
    function clone(f) { }
    // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
    // @ts-ignore
    function birdToBird(b) { }
    clone(birdToBird);
    // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
    // @ts-ignore
    function birdToCrow(d) { }
    clone(birdToCrow);
    // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
    // @ts-ignore
    function birdToAnimal(d) { }
    // clone(birdToAnimal)
    /*
    型 '(d: Bird) => Animal' の引数を型 '(b: Bird) => Bird' のパラメーターに割り当てることはできません。
    プロパティ 'chirp' は型 'Animal' にありませんが、型 'Bird' では必須です。ts(2345)
    */
    // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
    // @ts-ignore
    function animalToBird(a) { }
    clone(animalToBird);
    // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
    // @ts-ignore
    function crowToBird(c) { }
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
    let a = 'x'; // string
    let b = 3; // number
    let c = true; // boolean
    let d = { x: 3 }; // {x: number}
    let E;
    (function (E) {
        E[E["X"] = 0] = "X";
        E[E["Y"] = 1] = "Y";
        E[E["Z"] = 2] = "Z";
    })(E || (E = {}));
    let e = E.X; // E
    console.log(a, b, c, d, e);
    // イミュータブルな型
    const aa = 'x'; // 'x'
    const bb = 3; // 3
    const cc = true; // true
    const ee = E.X; // E.X
    console.log(aa, bb, cc, ee);
    // 明示的な型アノテーション
    let aaa = 'x';
    let bbb = 3;
    var ccc = true;
    const ddd = { x: 3 };
}
{
    // 拡大されない方をletで再割り当て=>拡大される
    const a = 'x'; // 'x'
    let b = a; // string
    // 型を狭く保つにはもとの宣言に明示的な型アノテーションを追加する
    const c = 'x'; // 'x'
    let d = c; // 'x'
}
{
    // null,undefinedに初期化された変数はanyに拡大される
    let a = null; // any
    a = 3; // any
    a = 'b'; // any
    function x() {
        let b = undefined; // any
        b = 3; // any
        b = 'b'; // any
        return b;
    }
    // 宣言されたスコープを離れると明確な型を割り当てる
    x(); // string
}
// constアサーション
{
    let a = { x: 3 }; // x: number
    let b; // x: 3
    let c = { x: 3 }; // readonly x: 3;
    let d = [1, { x: 2 }];
    /*
      let d: (number | {
        x: number;
      })[]
    */
    let e = [1, { x: 2 }];
    /*
      let e: readonly [1, {
        readonly x: 2;
      }]
    */
}
// 過剰プロパティチェック
{
    class API {
        constructor(options) {
            this.options = options;
        }
    }
    new API({
        baseURL: 'https://google.com/',
        tier: 'prod'
    });
    // スペルミスした場合
    new API({
        baseURL: 'https://google.com/',
    });
    new API({
        baseURL: 'https://google.com/',
    });
    new API({
        baseURL: 'https://google.com/',
        tier: 'prod'
    });
    let badOptions = {
        baseURL: 'https://google.com/',
        badTier: 'prod'
    };
    new API(badOptions);
    let options = {
        baseURL: 'https://google.com/',
    };
    new API(options);
}
// 型の絞り込み
{
    // 単位を列挙
    let units = ['cm', 'px', '%'];
    // 各単位をチェックし、一致するものがなければnullを返す
    function parseUnit(value) {
        for (let i = 0; i < units.length; i++) {
            if (value.endsWith(units[i])) {
                return units[i];
            }
        }
        return null;
    }
    function ParseWith(width) {
        if (width == null) {
            return null;
        }
        if (typeof width === 'number') {
            return { unit: 'px', value: width };
        }
        let unit = parseUnit(width);
        if (unit) {
            return { unit, value: parseFloat(width) };
        }
        return null;
    }
    console.log(ParseWith(100));
    console.log(ParseWith('100%'));
    console.log(ParseWith('100cm'));
    console.log(ParseWith(null));
}
// タグ付き合併型
{
    function handle(event) {
        if (typeof event.value === 'string') {
            event.value; // string  
            return event;
        }
        event.value; // [number, number]
        return event;
    }
    console.log(handle({ value: 'a' }));
}
{
    function handle(event) {
        if (typeof event.value === 'string') {
            event.value;
            event.target; // (property) target: HTMLInputElement | HTMLElement
            //  UserTextEvent|UserMouseEventの引数の型を渡すことが出来るため。（合併型のメンバーは型が重複する場合がある）
            return;
        }
        event.value;
        event.target; // (property) target: HTMLInputElement | HTMLElement
        //  UserTextEvent|UserMouseEventの引数の型を渡すことが出来るため。（合併型のメンバーは型が重複する場合がある）
    }
}
{
    function handle(event) {
        if (event.type === 'TextEvent') {
            event.value;
            event.target; //(property) target: HTMLInputElement
            return;
        }
        event.value;
        event.target; // (property) target: HTMLElement
    }
}
// 完全性
{
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
//# sourceMappingURL=index.js.map