import * as assert from 'assert';


test('Differences between var and let scope', () => {
  var glass = 'Beer';

  function getDrink(drink) {
    if (drink) {
      var glass = 'Bourbon';
    }
    return glass
  }

  assert.equal(getDrink(false), undefined);
  assert.equal(getDrink(true), 'Bourbon');


  function getDrink2(drink) {
    if (drink) {
      return 'Bourbon';
    }
    return glass
  }

  assert.equal(getDrink2(false), 'Beer'); // Without the declaration inside the function it's scope is outside the function
  assert.equal(getDrink2(true), 'Bourbon');

  let snack = 'Twix'; // let assignment's scope is limited to the actual scope and deeper


  function getSnack(peanutsLover) {
    if (peanutsLover) {
      let snack = 'Sneakers'; // Unless you redeclare the variable
    }
    return snack
  }

  assert.equal(getSnack(false), 'Twix');
  assert.equal(getSnack(true), 'Twix'); // But as I said above, Its assignment's scope is limited to the actual scope and deeper
  // so the assignment inside the if is useless unless you add a return inside the if.


  function getSnack2(peanutsLover) {
    if (peanutsLover) {
      let snack = 'Sneakers';
      return snack; // like this
    }
    return snack
  }

  assert.equal(getSnack2(false), 'Twix');
  assert.equal(getSnack2(true), 'Sneakers');
});
