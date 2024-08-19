'use strict';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

budget[0].value = 10000;
const spendLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendLimits.jay = 200;
// console.log(spendLimits);
// refactor functions

const getLimit = (limits, user) => limits?.[user] ?? 0;
// pure function --- no side effects anymore
const addExpense = function (state, limit, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();
  user = user.toLowerCase();

  return value <= getLimit(limit, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendLimits, 500, 'Pizza🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendLimits,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendLimits, 'Stuff', 'Jay');
console.log(newBudget1);
console.log(newBudget3);

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });

//   // for (const entry of newBudget3)
//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// };

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendLimits);
console.log(finalBudget);

// console.log(budget);

//  Impure
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    // .map(entry => entry.description.slice(-2))
    // .join('/');
    .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '')
    .slice(2);
  console.log(bigExpenses);
  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
console.log(budget);

logBigExpenses(finalBudget, 500);
