import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const docs = resolve(root, 'docs');
const dist = resolve(root, 'dist');
const inventory = JSON.parse(await readFile(resolve(docs, 'captures.json'), 'utf8'));
for (const image of inventory.images) {
  const bytes = await readFile(resolve(docs, image.path));
  const actual = createHash('sha256').update(bytes).digest('hex');
  if (actual !== image.sha256) throw new Error(`Hash mismatch for ${image.path}`);
}
const buildInfo = { schemaVersion: 1, revision: null, updatedAt: null };
try {
  const revision = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
  const status = execFileSync('git', ['status', '--porcelain', '--untracked-files=all'], { cwd: root, encoding: 'utf8' }).trim();
  if (/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/u.test(revision) && !status) {
    const updatedAt = execFileSync('git', ['show', '-s', '--format=%cI', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
    buildInfo.revision = revision;
    buildInfo.updatedAt = updatedAt;
  }
} catch {
  // An unavailable or dirty source tree must display unavailable build metadata.
}
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(docs, dist, { recursive: true });
await writeFile(resolve(dist, 'build-info.json'), `${JSON.stringify(buildInfo, null, 2)}\n`, 'utf8');
console.log(`Assembled ${inventory.images.length} reviewed images into dist.`);
