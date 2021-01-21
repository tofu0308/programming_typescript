/**
 * 
 * @param word {string} 変換すべき入力文字列
 * @returns {string} パスカルケースでの文字列
 * 
 */
export function toPascalCase(word) {
  return word.replace(
    /\w+/g,
    ([a, ...b]) => a.toUpperCase + b.join('').toLowerCase()
  )
}