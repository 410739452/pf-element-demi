const { switchVersion } = require("./utils");

const version = process.argv[2];
const vueEntry = process.argv[3] || "vue";

if (version === "2") {
  switchVersion(2, vueEntry);
  console.log(`[element-demi] Switched for Vue 2 (entry: "${vueEntry}")`);
} else if (version === "3") {
  switchVersion(3, vueEntry);
  console.log(`[element-demi] Switched for Vue 3 (entry: "${vueEntry}")`);
} else {
  console.warn(
    `[element-demi] expecting version "2" or "3" but got "${version}"`
  );
  process.exit(1);
}
