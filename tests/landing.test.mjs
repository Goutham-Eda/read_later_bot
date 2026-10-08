import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';

test('Telegram placeholder reveals the coming-soon message on every tap', async () => {
  let tap;
  const status = { hidden: true };
  const button = { addEventListener(event, handler) {
    assert.equal(event, 'click');
    tap = handler;
  } };
  runInNewContext(await readFile('main.js', 'utf8'), {
    document: { querySelector(selector) {
      if (selector === '.primary') return button;
      if (selector === '#bot-status') return status;
      throw new Error(`Unexpected selector: ${selector}`);
    } },
  });
  assert.equal(status.hidden, true);
  tap();
  assert.equal(status.hidden, false);
  tap();
  assert.equal(status.hidden, false);
});
