import { toByteArray } from "base64-js";
import { TextDecoder } from "util";

const encoded = "44GT44KT44Gr44Gh44Gv"; // "こんにちは" をBase64エンコードしたもの
console.log(`encoded: ${encoded}`);
const decoded = new TextDecoder().decode(toByteArray(encoded));
console.log(`decoded: ${decoded}`);