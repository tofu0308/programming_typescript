"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// 高度なオブジェクト型
// オブジェクト型についての型演算子
// ルックアップ型
{
    // function getAPIResponse():Promise<APIResponse> {}  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)
    function getAPIResponse() { } // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)
    function renderFriendList(friendList) { }
    let response = /*await*/ getAPIResponse(); //トップレベルの 'await' 式は、'module' オプションが 'esnext' または 'system' に設定されていて、'target' オプションが 'es2017' 以上に設定されている場合にのみ使用できます。ts(1378)
}
{
    function get(o, k) {
        return o[k];
    }
    let activityLog = {
        lastEvent: new Date,
        events: [
            { id: '1', timestamp: new Date, type: 'Read' },
            { id: '2', timestamp: new Date, type: 'Write' }
        ]
    };
    let LastEvent = get(activityLog, 'lastEvent'); // let LastEvent: Date
    let get2 = (object, ...keys) => {
        let result = object;
        keys.forEach(k => result = result[k]);
        return result;
    };
    const get2log = get2(activityLog, 'events', 0, 'type');
    // let get2: <ActivityLog, "events", 0, "type">(o: ActivityLog, k1: "events", K2: 0, k3: "type") => "Read" | "Write" (+2 overloads)
    console.log(get2log);
    // get2(activityLog, 'bad')
    // 型 '"bad"' の引数を型 '"lastEvent" | "events"' のパラメーターに割り当てることはできません。ts(2345)
}
{
    // レコード型
    /*
    let nextDay: Record<Weekday, Day> = {
      Mon: 'Tue'
    }
     */
    // 型 '{ Mon: "Tue"; }' には 型 'Record<Weekday, Day>' からの次のプロパティがありません: Tue, Wed, Thu, Frits(2739)
    let nextDay = {
        Mon: 'Tue',
        Tue: 'Wed',
        Wed: 'Thu',
        Thu: 'Fri',
        Fri: 'Sat',
    };
    console.log(nextDay);
    let optionalAccount = {};
    let nullableAccout = {
        id: null,
        isEmployee: null,
        notes: null
    };
    let readonlyAccount = {
        id: 1,
        isEmployee: true,
        notes: ['ReadonlyAccount', 'b']
    };
    let account2 = {
        id: 1,
        isEmployee: true,
        notes: ['Account2', 'b']
    };
    account2 = { ...account2, notes: ['rewrite 2ccount2'] };
    let account3 = {
        id: 1,
        isEmployee: true,
        notes: ['Account3', 'b']
    };
    console.log(optionalAccount);
    console.log(nullableAccout);
    console.log(readonlyAccount);
    console.log(account2);
    console.log(account3);
}
// コンパニオンオブジェクトパターン
{
    let Currency = {
        from(value, unit) {
            return {
                unit: unit,
                value
            };
        }
    };
    // import {Currency} from './Currency'
    // インポート宣言は名前空間またはモジュールでのみ使用可能です。ts(1232)
    let amountDue = {
        unit: 'JPY',
        value: 100.2
    };
    let otherAmoutDue = Currency.from(330, "EUR");
    console.log(amountDue);
    console.log(otherAmoutDue);
}
// 関数にまつわる高度な型
// タプルについての型推論の改善
{
    let a = [1, true]; //let a: (number | boolean)[] 
    function tuple(...ts // (tye parameter) T in tuple<T extends unknown[]>(...ts: T): T
    ) {
        return ts;
    }
    let b = tuple(1, true); // let b: [number, boolean]
    let c = tuple(2, false, 'aaa'); // let c: [number, boolean, string]
    console.log(a);
    console.log(b);
    console.log(c);
}
// ユーザー定義型ガード
{
    function isString(a) {
        console.log(typeof a === 'string');
        return typeof a === 'string';
    }
    isString('a');
    isString(['7']);
    function parseInput(input) {
        let formattedInput;
        if (isString(input)) {
            formattedInput = input.toUpperCase(); // (method) String.toUpperCase(): string
        }
    }
    parseInput('b');
    parseInput(6);
    function isLegacyDialog(dialog) {
        return dialog;
    }
    console.log(isLegacyDialog(true));
    console.log(isLegacyDialog(false));
}
// 条件型
{
}
// 分配条件型
{
    let a = [1, 2, 3];
    let b = [1, '2', 3];
    let a2 = [1, 2, 3];
}
// inferキーワード
{
}
{
}
// 組み込みの型条件
{
}
{
}
{
}
{
}
{
    /**
      type I = {
        b: number;
      }
     */
}
// エスケープパッチ
// 型アサーション
{
    function formatInput(input) { }
    function getUserInput() { return 'hoge'; }
    let input = getUserInput();
    formatInput(input); // inputがstringであることを主張
    formatInput(input); // ↑と同等
    function addToList(list, item) { }
    addToList(['1', '2'], 'a');
    // addToList(2, 'b') // 型 '2' の引数を型 'string[]' のパラメーターに割り当てることはできません。ts(2345)
    // ↓も通過してしまうので、as anyの使用は　極力控える
    addToList(2, 'b');
}
// 非nullアサーション
{
    function closeDialog(dialog) {
        if (!dialog.id)
            return;
        setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id)));
    }
    function removeFromDOM(dialog, element) {
        element.parentNode.removeChild(element);
        delete dialog.id;
    }
}
// ↑をリファクタリング（非nullアサーションの使用を減らす）
{
    function closeDialog(dialog) {
        if (!('id' in dialog))
            return;
        setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id)));
    }
    function removeFromDOM(dialog, element) {
        element.parentNode.removeChild(element);
        delete dialog.id;
    }
}
// 明確な割当アサーション
{
    let userId;
    fetchUser();
    userId.toUpperCase();
    function fetchUser() {
        userId = 'userID';
    }
}
// 名前的型をシュミレートする
{
    function CompanyID(id) {
        return id;
    }
    function OrderID(id) {
        return id;
    }
    function UserID(id) {
        return id;
    }
    function queryForUser(id) { }
    let companyId = CompanyID('c123a');
    let orderId = OrderID('o234b');
    let userId = UserID('u345c');
    queryForUser(userId);
    // queryForUser(companyId)
    /**
      型 'CompanyID' の引数を型 'UserID' のパラメーターに割り当てることはできません。
        型 'CompanyID' を型 '{ readonly brand: unique symbol; }' に割り当てることはできません。
          プロパティ 'brand' の型に互換性がありません。
            型 'typeof brand' は型 'typeof brand' に割り当てられません。同じ名前で 2 つの異なる型が存在しますが、これは関連していません。ts(2345)
     */
}
//# sourceMappingURL=index.js.map