"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base64_js_1 = require("base64-js");
const util_1 = require("util");
const encoded = "44GT44KT44Gr44Gh44Gv"; // "こんにちは" をBase64エンコードしたもの
console.log(`encoded: ${encoded}`);
const decoded = new util_1.TextDecoder().decode(base64_js_1.toByteArray(encoded));
console.log(`decoded: ${decoded}`);
//# sourceMappingURL=index.js.map