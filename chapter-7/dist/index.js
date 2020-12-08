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
//# sourceMappingURL=index.js.map