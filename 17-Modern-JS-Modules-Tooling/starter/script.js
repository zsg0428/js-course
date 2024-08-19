//  Importing modules
import 'core-js/actual';
import {
  totalPrice as price,
  tq,
  shippingCost,
  addToCart,
} from './shoppingCart.js'; // name import
console.log('Importing Modules');
addToCart('bread', 5);
console.log(shippingCost);
console.log(price);
console.log(tq);

import * as ShoppingCart from './shoppingCart.js'; // everything import
// Just like a class
ShoppingCart.addToCart('bread', 5);

import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');
/** *
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
  // 会return一个promise，因为我们用的是async function，async function会永远return一个promise
};

// Not very clean
// lastPost.then(last=>console.log(last))

// Clean version -- top level await
const lastPost = await getLastPost();
console.log(lastPost);
*/

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart(shipping cost is ${shippingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.cart);

// // Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart(shipping cost is ${shippingCost})`
//     );
// }

// // Import

// const { addToCart } = require('./shoppingCart.js');

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash';
import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);

// cloneDeep from lodash

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} , ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

import 'regenerator-runtime/runtime';
