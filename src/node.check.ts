import { isBrowser, isNode, isJsDom, isDeno } from "./index";

console.log(isBrowser ? "❌" : "✅", "browser:", isBrowser);
console.log(isNode ? "✅" : "❌", "node:", isNode);
console.log(isBrowser ? "❌" : "✅", "js-dom:", isJsDom);
console.log(isDeno ? "❌" : "✅", "deno:", isDeno);


if (isBrowser || !isNode || isJsDom) {
  process.exit(1);
}
