import * as assert from 'assert';

function createArray(length,cb){
  const loop = (len,arr) => {
    arr.push(cb());
    return len <= 1 ? arr : loop(--len, arr);
  };

  return loop(length, []);
}

function createArrayOfNumbers(length){
  return createArray(length, () => +((Math.random()*10)**10).toFixed(0));
}

suite('const features', () => {
  test('const with primitives values', () => {
    const a = 'meh';
    assert.throws(() => a = 2, TypeError);
  });

  test('const with Arrays', () => {
    const arr = [];

    assert.throws(() => arr = [1,2,3], TypeError);
    createArrayOfNumbers(5).map(val => arr.push(val));
    assert.equal(arr.length, 5);
  });

  test('const with Objects', function() {
    this.skip();
  });
});
