'use strict';

const appleBunches = [2, 4, 3, 5];

const eaten = appleBunches.map((bunch) =>
  'I ate ' + bunch + ' apples\n'
);

eaten.forEach((eatenBunch) => {
  console.log(eatenBunch);
});
