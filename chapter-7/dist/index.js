"use strict";
// エラー処理
// nullを返す
{
    function ask() {
        // return prompt('When is your birthday?')
        const birthday = new Date;
        return birthday.toString();
    }
    function parse(birthday) {
        let date = new Date(birthday);
        if (!isValid(date)) {
            return null;
        }
        return date;
    }
    // 与えられた日付が有効かどうかをチェック
    function isValid(date) {
        return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());
    }
    let date = parse(ask());
    if (date) {
        console.info(`Date is ${date.toISOString()}`);
    }
    else {
        console.error('Error parsing date for some reason');
    }
}
// 例外をスローする
{
    function ask() {
        return null;
    }
    class InvalidDateFormatError extends RangeError {
    }
    class DateIsInTheFutureError extends RangeError {
    }
    // 挙動確認のためanyに変更
    function parse(birthday) {
        let date = new Date(birthday);
        if (!isValid(date)) {
            throw new InvalidDateFormatError('Enter a date in the form YYY/MM/DD');
        }
        if (date.getTime() > Date.now()) {
            throw new DateIsInTheFutureError('Are you a timeload?');
        }
        return date;
    }
    // 与えられた日付が有効かどうかをチェック
    function isValid(date) {
        return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());
    }
    try {
        let date = parse(ask());
        // オプショナルチェイニングでエラー避け
        console.info(`Date is ${date?.toISOString()}`);
    }
    catch (e) {
        if (e instanceof InvalidDateFormatError) {
            console.error(e.message);
        }
        else if (e instanceof DateIsInTheFutureError) {
            console.error(e.message);
        }
        else {
            throw e;
        }
    }
}
//# sourceMappingURL=index.js.map