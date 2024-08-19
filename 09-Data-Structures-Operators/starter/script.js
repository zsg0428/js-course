'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]}, at ${time} to ${address}`
    );
  },
};

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ')
console.log(firstName,lastName);
const fullName = ['Mr', firstName.toUpperCase(), lastName].join(' ')
console.log(fullName);

const capitalizeName = (name)=>{
  const nameArr= name.split(' ')
  const newNameArr = []
  // console.log(nameArr);
  for (const item of nameArr){
    newNameArr.push(item[0].toUpperCase() + item.slice(1))
  }
console.log(newNameArr.join(' '));

}
const passenger = 'jessica ann smith davis'

capitalizeName(passenger)
capitalizeName('sjsalkj bbgbsjdk ooooa')

// padding
const message = 'go to gate 23!'
console.log(message.padStart(20,'+').padEnd(30, '+'));
console.log('Jonas'.padStart(20,'+').padEnd(30,'+'));
console.log('Jonas'.padEnd(25,'+'));

const maskCredit = (number)=>{
 const str = number + '' 
 const lastFourDig = str.slice(-4)
 return lastFourDig.padStart(str.length,'*')

}

console.log( maskCredit(4524242423))
console.log( maskCredit(999113))
console.log( maskCredit('999113554'))

// Repeat
const message2 = 'Bad weather... All depatures delayed..'
console.log(message2.repeat(5));
const planesInLine = (number)=>{
  console.log(`There are ${number} planes in line ${'🦽'.repeat(number)}`);
}

planesInLine(5)
planesInLine(8)


// maskCredit('2352352351312541512512315')
// MAP
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2)
// const arr = [1,2]
// rest.set(arr,'Test')
// rest.set(document.querySelector('h1') , 'Heading')

// console.log(rest);
// console.log(rest.size);
// // rest.clear
// console.log(rest.get(arr))

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet);
// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Risotto');
// // orderSet.clear
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// const newStaffArr = [...staffUnique];
// console.log(newStaffArr);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('Dempsey').size);
// restaurant.orderDelivery ({
//   time:'22:30',
//   address:'Via del sole, 21',
//   mainIndex:2,
//   starterIndex:2
// })

// restaurant.orderDelivery({
//   address:'Via del sole, 21',
// starterIndex:3,
// time:"ssss"
// })
// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// // console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14,
// };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {fri:{open : o,close :c}} = openingHours
// console.log(o,c);

// // restaurant.numGuest = 0
// const guests = restaurant.numGuest || 10
// console.log(guests);

// // Nullish: null and undefined ( NOT 0 or '')
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const item of menu) console.log(item);
// for ( const [i, ele] of menu.entries()) {
//   console.log(`${i + 1}:${ele}`);
// }
