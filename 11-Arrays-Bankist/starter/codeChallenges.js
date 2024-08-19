// create a functio that accepts arrays
// adult >= 3, else is puppy
//

// const checkDogs = (dogsJulia, dogsKate) => {
//     const newDogsJulia = dogsJulia.slice(1, -2)
//     newDogsJulia.forEach((dog, index) => {
//         if (dog >= 3) {
//             console.log(`Dog number ${index + 1} is an adult and it is ${dog} years old`)
//         } else {
//             console.log(`Dog number ${index + 1} is still a puppy 👽`)
//         }
//     })
//     dogsKate.forEach((dog, index) => {
//         if (dog >= 3) {
//             console.log(`Dog number ${index + 1} is an adult and it is ${dog} years old`)
//         } else {
//             console.log(`Dog number ${index + 1} is still a puppy 👽`)
//         }
//     })
// }
//
//
// const juliaData1 = [3, 5, 2, 12, 7]
// const kateData1 = [4, 1, 15, 8, 3]
// const juliaData2 = [9, 16, 6, 8, 3]
// const kateData2 = [10, 5, 6, 1, 4]
// checkDogs(juliaData1, kateData1)
// console.log('--------Data2---------')
// checkDogs(juliaData2, kateData2)

// checkDogs()

// const calcAverageHumanAge = (ages) => {
//     const humanAge = ages.map(age => {
//         if (age <= 2) {
//             return age * 2
//         } else {
//             return age * 4 + 16
//         }
//     })
//     const adultDogs = humanAge.filter(age => age >= 18)
//     const avgAge = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length
//     return avgAge
// }


//     return ages.map((age) => {
//         if (age <= 2) {
//             const humanAge = age * 2
//             return humanAge
//         } else {
//             const humanAge = age * 4 + 16
//             return humanAge
//         }
//     }).filter((age) => age >= 18).reduce((acc, age, i, array) => (acc + age)) / ages.map((age) => {
//         if (age <= 2) {
//             const humanAge = age * 2
//             return humanAge
//         } else {
//             const humanAge = age * 4 + 16
//             return humanAge
//         }
//     }).filter((age) => age >= 18).length
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))
//

// const calcAverageHumanAge = (ages) => {
//     return ages.map(age => {
//         if (age <= 2) {
//             return age * 2
//         } else {
//             return age * 4 + 16
//         }
//     }).filter(age => age >= 18)
//         .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
// }
//
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))

const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']},
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

dogs.forEach(item => item.recommendedFood = Math.trunc(item.weight ** 0.75 * 28))
console.log(dogs)

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

const sarahDog = dogs.find(item => item.owners.includes('Sarah')) // sarah's dog it is an object
console.log(sarahDog)
if (sarahDog.curFood > 0.9 * sarahDog.recommendedFood && sarahDog.curFood < 1.1 * sarahDog.recommendedFood) console.log('Eating an okay amount')
else if (sarahDog.curFood > sarahDog.recommendedFood) console.log('eating too much')
else if (sarahDog.curFood < sarahDog.recommendedFood) console.log('eating too little')
// returned eating too much

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

const ownersEatOk = dogs.map(item => {
    if (item.curFood > 0.9 * item.recommendedFood && item.curFood < 1.1 * item.recommendedFood)
        return item.owners
}).filter(item => item !== undefined).flat()

const ownersEatTooMuch = dogs.map(item => {
    if (item.curFood > item.recommendedFood && !(item.curFood > 0.9 * item.recommendedFood && item.curFood < 1.1 * item.recommendedFood))
        return item.owners
}).filter(item => item !== undefined).flat()

const ownersEatTooLittle = dogs.map(item => {
    if (item.curFood < item.recommendedFood && !(item.curFood > 0.9 * item.recommendedFood && item.curFood < 1.1 * item.recommendedFood))
        return item.owners
}).filter(item => item !== undefined).flat()

console.log('eatOK ===>', ownersEatOk)
console.log('eatTooMuch ==>', ownersEatTooMuch)
console.log('eatTooLittle==>', ownersEatTooLittle)

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too much`)

// Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)

console.log(dogs.some(item => item.curFood === item.recommendedFood)) // false
console.log(dogs.some(item => item.curFood > 0.9 * item.recommendedFood && item.curFood < 1.1 * item.recommendedFood)) // true

// Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
const dogsEatOk = dogs.filter(item => item.curFood > 0.9 * item.recommendedFood && item.curFood < 1.1 * item.recommendedFood)
console.log(dogsEatOk)
// Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)

const copyDogs = dogs.slice()


copyDogs.sort((a, b) => a.recommendedFood - b.recommendedFood)
console.log(copyDogs)

