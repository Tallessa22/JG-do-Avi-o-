import { cp, mkdir, rm } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webOutput = path.join(projectRoot, "dist", "public");
const androidAssets = path.join(projectRoot, "android", "app", "src", "main", "assets", "public");

execFileSync(process.execPath, [path.join(projectRoot, "node_modules", "vite", "bin", "vite.js"), "build"], {
  cwd: projectRoot,
  stdio: "inherit",
});
await rm(path.join(webOutput, "__manus__"), { recursive: true, force: true });
await rm(path.join(webOutput, ".gitkeep"), { force: true });
await rm(androidAssets, { recursive: true, force: true });
await mkdir(androidAssets, { recursive: true });
await cp(webOutput, androidAssets, { recursive: true });

console.log("Conteúdo web sincronizado com o aplicativo Android.");
