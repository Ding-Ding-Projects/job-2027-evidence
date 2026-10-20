import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { homedir } from 'node:os';
import path from 'node:path';

const argv = process.argv.slice(2);
const outgoing = argv[0] === '--outgoing';
const extra = outgoing ? argv.slice(1) : argv;
const options = new Map();
let valid = outgoing ? extra.length === 4 : extra.length === 0;
for (let index = 0; index < extra.length; index += 2) {
  const key = extra[index]; const value = extra[index + 1];
  if (!['--remote-name', '--remote-location'].includes(key) || options.has(key) || typeof value !== 'string' || !value || value.length > 4096) valid = false;
  options.set(key, value);
}
const location = options.get('--remote-location');
if (typeof location === 'string' && /^https?:/i.test(location)) {
  try { const parsed = new URL(location); if (parsed.username || parsed.password || parsed.search || parsed.hash) valid = false; } catch { valid = false; }
}
const runner = path.join(homedir(), '.agents', 'skills', 'agent-global-memory', 'scripts', 'run-publication-language-local.mjs');
if (!valid || !existsSync(runner)) {
  console.error('Publication policy tooling or destination input is unavailable; transmission remains blocked.');
  process.exitCode = 2;
} else {
  const args = [runner, '--root', process.cwd(), '--mode', outgoing ? 'outgoing' : 'index', ...extra];
  const result = spawnSync(process.execPath, args, { stdio: 'inherit', windowsHide: true });
  process.exitCode = result.status ?? 2;
}
