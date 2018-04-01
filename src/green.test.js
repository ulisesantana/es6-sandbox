import * as assert from 'assert';

test('Green test', () => {
  assert.equal('1', true);
  assert.notStrictEqual(1, true);
  assert.deepStrictEqual({a: 2, b: 'meh'}, {a: 2, b: 'meh'});
  assert.notDeepStrictEqual({a: 2, b: 'meh'}, {a: '2', b: 'meh'});
});
