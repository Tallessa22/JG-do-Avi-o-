import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const required = [
  "android/settings.gradle",
  "android/build.gradle",
  "android/app/build.gradle",
  "android/app/src/main/AndroidManifest.xml",
  "android/app/src/main/java/com/tallessa22/paperflight/MainActivity.java",
  "android/app/src/main/assets/public/index.html",
];

let failed = false;
for (const relativePath of required) {
  const found = existsSync(path.join(root, relativePath));
  console.log(`${found ? "OK" : "FALTA"}  ${relativePath}`);
  failed ||= !found;
}

const manifestPath = path.join(root, "android/app/src/main/AndroidManifest.xml");
if (existsSync(manifestPath)) {
  const manifest = readFileSync(manifestPath, "utf8");
  const hasInternetPermission = manifest.includes("android.permission.INTERNET");
  console.log(`${hasInternetPermission ? "ATENÇÃO" : "OK"}  aplicativo sem permissão de internet`);
  failed ||= hasInternetPermission;
}

if (failed) process.exitCode = 1;
