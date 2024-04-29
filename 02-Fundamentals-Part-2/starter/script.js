// const friends = [
//     "Michael",
//     'steven',
//     'Peter'
// ];

// console.log(friends);
// // const years = new Array (199, 299292, 203, 'mic ')
// // console.log(years);

// console.log(friends[2]);
// // console.log(years[0]);

// // console.log(years.length);
// // console.log(years[years.length-1]);

// friends[friends.length-1] = 'bob'
// friends[friends.length] = 'bob'
// friends.push('ma')
// console.log(friends);

// function ageCalc (birthyear) {
//     return  2024 - birthyear

// }

// myAge = ageCalc(1996)
// console.log(`my age is ${myAge}`);
// const firstName = 'Dempsey'
// const age = myAge
// const dempseyArray = [age, firstName, friends, 'Zhang', 'recruiter']
// console.log(dempseyArray);
// console.log(dempseyArray.length);

// // Exercise
// function ageCalc (birthyear) {
//     return  2024 - birthyear

// }

// const years = [1990, 1967, 2022, 2010, 2018]
// age1 = ageCalc(years[0])
// age2 = ageCalc(years[years.length-1])
// age3 = ageCalc(years[2])
// console.log('age1====>',age1,age2,age3);

// console.log(`He is ${ageCalc(years[years.length-1])} years old`)

// const ages = [ageCalc(years[0]),ageCalc(years[years.length-1]),ageCalc(years[2])]
// console.log(ages);

//  add elements
const friends = ["jay", "jack", "dempsey"];
friends.push("new friend");
console.log(friends);
friends.unshift("John");
console.log(friends);
// remove elements

const popped = friends.pop();
console.log(friends);
console.log(popped);
friends.shift();
console.log(friends);
friends.push("23");
console.log(friends.indexOf("dempsey"), friends.indexOf("liu"));
console.log(friends.includes("dempsey"));
console.log(friends.includes(23)); /// 这里沿用了strict equal 意思是如果你includes里查询的是数字而不是'23'的话，那么就return false

if (friends.includes("ma")) {
  console.log("you have a friend called dempsey");
} else {
  console.log("you don't have a frienmd call bob");
}

console.log(`---------------------
new line
------------------------`);

const dempsey = {
  firstName: "Dempsey",
  lastName: "Zhang",
  age: 2024 - 1996,
  job: "recruiter",
  friends: ["Michael", "steven", "Peter"],
};

console.log(dempsey);

//  ------

console.log(dempsey.lastName);
console.log(dempsey["lastName"]);

const nameKey = "Name";
console.log(dempsey["first" + nameKey]);
console.log(dempsey["last" + nameKey]);

// const interestedIn = prompt('What do you want to know about Dempsey? Choose between firstName, lastName, age, job, and friends')

// if(dempsey[interestedIn]){
//     console.log(dempsey[interestedIn]);
// } else {
//     console.log('Wrong request,Choose between firstName, lastName, age, job, and friends');
// }

dempsey.location = "Toronto";
dempsey["twitter"] = "@zsg258852";
console.log(dempsey);

// challenges
// dempsey has 3 friends, and his best friend is called Michael
console.log(
  `${dempsey.firstName} has ${dempsey.friends.length} friends, and his best friend is called ${dempsey.friends[0]} `
);
// console.log(`${dempsey['firstName']} has ${dempsey['friends.length']} friends, and his best friend is called ${dempsey['friends'[0]]} `);

console.log(`---------------------
new line
------------------------`);
const dempseyNew = {
  firstName: "Dempsey",
  lastName: "Zhang",
  birthYear: 1996,
  job: "recruiter",
  friends: ["Michael", "steven", "Peter"],
  hasDriversLicense: false,

  //   calcAge: function (birthYear) {
  //     return 2024 - birthYear;
  //   },

  // calcAge: function () {
  //     console.log(this,'this');
  //     return 2024 - this.birthYear;
  //   }
  // };
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  driverLicenseTest: function () {
    if (this.hasDriversLicense === true) {
      this.driversLicense = "has a driver's liencese";
      return this.driversLicense;
    } else {
      this.driversLicense = "he aint got one";
      return this.driversLicense;
    }
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}--years old ${
      this.job
    }, and he ${this.driverLicenseTest(this.hasDriversLicense)}`;
  },
};
dempseyNew.calcAge();
dempseyNew.car = "benz";
console.log(dempseyNew);

console.log(dempseyNew.age);
// console.log(dempseyNew.calcAge());
// console.log(dempseyNew['calcAge'](dempseyNew['birthYear']));

// challenge写一下 Dempsey is a xx-year old recruiter, and he has a drivers licences
dempseyNew.driverLicenseTest();
console.log(
  `${dempseyNew.firstName} is a ${dempseyNew.calcAge(
    dempseyNew.age
  )}-year old ${dempseyNew.job}, and he ${dempseyNew.driversLicense}`
);

console.log(dempseyNew.getSummary());

console.log(`-------------------new--------- line`);

//for loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`'lifiting weights repetition ${rep}`);
// }

// const jonasArray = [
//   "Jonas",
//   "scmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", " Steven"],
//   true,
// ];

// let jonasType = [];
// for (let i = 0; i < jonasArray.length; i++) {
//   // console.log(jonasArray[i],typeof(jonasArray[i]));
//   // jonasType[i] = typeof jonasArray[i]
//   jonasType.push(typeof jonasArray[i]);
// }

// console.log(jonasType);

// const years = [1991, 2007, 1969, 2000];
// const ages = [];

// console.log(years);

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }
// console.log(ages);
// // continue and break

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break ;
//   console.log(jonasArray[i], typeof jonasArray[i]);

// }

const jonasArray = [
  "Jonas",
  "scmedtmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", " Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------- Starting exerices ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight reptition ${rep}❤️`);
  }
}
