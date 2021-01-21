"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPascalCase = void 0;
/**
 *
 * @param word {string} 変換すべき入力文字列
 * @returns {string} パスカルケースでの文字列
 *
 */
function toPascalCase(word) {
    return word.replace(/\w+/g, ([a, ...b]) => a.toUpperCase + b.join('').toLowerCase());
}
exports.toPascalCase = toPascalCase;
//# sourceMappingURL=utils.js.map