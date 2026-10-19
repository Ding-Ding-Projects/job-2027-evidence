import { createHash } from "node:crypto";
import { cp, mkdir, readFile, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const docs = resolve(root, "docs");
const dist = resolve(root, "dist");
const inventory = JSON.parse(await readFile(resolve(docs, "captures.json"), "utf8"));
for (const image of inventory.images) {
  const bytes = await readFile(resolve(docs, image.path));
  const actual = createHash("sha256").update(bytes).digest("hex");
  if (actual !== image.sha256) throw new Error(`Hash mismatch for ${image.path}`);
}
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(docs, dist, { recursive: true });
console.log(`Assembled ${inventory.images.length} reviewed images into dist.`);
