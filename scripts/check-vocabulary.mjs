import { existsSync, readFileSync } from 'node:fs';
import { createHash, timingSafeEqual } from 'node:crypto';
import { homedir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const installed = path.join(homedir(), '.agents', 'skills', 'agent-global-memory', 'scripts');
const source = path.join(installed, 'vocabulary-dictionary.json');
const method = path.join(installed, 'private-emission-guard.mjs');
const lock = path.join(homedir(), '.agents', 'vocabulary-locks', 'job-2027.lock');

try {
  if (!existsSync(source)) {
    console.log('SKIP: private instruction source is unavailable for this user.');
    process.exit(0);
  }
  if (!existsSync(method) || !existsSync(lock)) throw new Error('Missing currency input.');
  const { vocabularySemanticProjection } = await import(pathToFileURL(method).href);
  const actual = createHash('sha256')
    .update('job-2027-vocabulary-currency-v1\n')
    .update(vocabularySemanticProjection(readFileSync(source, 'utf8')))
    .digest();
  const expected = readFileSync(lock, 'utf8').trim();
  if (!/^[a-f0-9]{64}$/.test(expected) || !timingSafeEqual(actual, Buffer.from(expected, 'hex'))) {
    throw new Error('Stale currency input.');
  }
  console.log('PASS: private instruction currency verified. Conversation use is not proven.');
} catch {
  console.error('FAIL: private instruction source exists but its currency lock is missing, invalid or stale.');
  process.exitCode = 1;
}
