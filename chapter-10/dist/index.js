"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function main() {
    let userLocale = await getUserLocale();
    let path = `./locales/locale-${userLocale}`;
    let localeUS = await Promise.resolve().then(() => require(path));
    console.log(path);
}
function getUserLocale() {
    return 'us';
}
main();
//# sourceMappingURL=index.js.map