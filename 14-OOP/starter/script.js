'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // Instance methods --- NEVER do this, never create methods in your class
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('jonas', 1991);
// // 1. New {} is created
// // 2. function nis called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const matilda = new Person('matilda', 2000);
// const bitch = new Person('bitch', 6969);
// console.log(jonas, matilda, bitch);

// console.log(jonas instanceof Person);
// console.log(bitch instanceof Person);

// //  -----------------

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(Person.prototype);

// jonas.calcAge();
// bitch.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person)); // false
// // it should be called Person.prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
// 如果我们给原型设置了一个property，那么它只属于原型的own property，不属于实例的preoperty。但是实例的property可以利用。
// 通过上面几个就可以查询到
// -----

// 这个等于Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 4, 4, 2, 76, 3]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// 我们得知了所有array的method都存在于Array.prototype里
// 那么我们就加了一个自己的method叫unique,return所有的不重复的值
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

// ------

// class expression
// const personCl = class {

// }

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return this.birthYear + 1000;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there :)');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1933);
// console.log(jessica);
// console.log(PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// console.log(jessica.age);
// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizens
// // 3. Classes are executed in strict mode

// // ---------------

// // Functions that get and set values are getters and setters

// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey();
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1999);
// sarah.calcAge();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // 用了call就可以把this变成这里的this
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is this ${this.firstName}, I study ${this.course}`);
// };
// const mike = new Student('Mike', 2000, 'Computer Science');

// mike.introduce();
// mike.calcAge(); // 在Person.prototype里找到了calcAge（）这个method

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// Student.prototype.constructor = Student;

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return this.birthYear + 1000;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there :)');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName}, and study ${this.course}`);
//   }
//   calcAge() {
//     console.log(`I am ${2037 - this.birthYear} years old, but as a student i feel like more like ${2037- this.birthYear + 10}`);
//   }
// }

// const marth = new StudentCl('Marth Jones', 2012, 'Computer Science');

// marth.introduce();
// marth.calcAge();
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// console.log(jay);
// jay.calcAge();

// Public fields (instance properties)
// Private fields
// Public methods
// Private methods

class Account {
  // 1. Public fields (instances)
  locale = navigator.language;

  // 2. Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3. Public Methods
  // Public interface

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approveed`);
      return this;
    }
  }

  // 4. Private methods
  #approveLoan(val) {
    return true;
  }
}

const account1 = new Account('Jonas', 'EUR', 1111);

account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
// account1.#approveLoan(1000);

console.log(account1.getMovements());

console.log(account1);
// console.log(account1.#movements);

// Chaining
account1
  .deposit(300)
  .deposit(500)
  .withdraw(35)
  .requestLoan(25000)
  .withdraw(4000);

console.log(account1.getMovements());
