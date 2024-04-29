// // Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// // Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
// let scoreDolphins = calcAverage(44, 23, 71); // avg score for Dolphins
// let scoreKoalas = calcAverage(65, 54, 49); // avg score for Koalas
// console.log(scoreDolphins, scoreKoalas);

// // scoreDolphinsData2 = calcAverage(85, 54, 41);
// // scoreKoalasData2 = calcAverage(23, 34, 27);
// // console.log(scoreDolphins, scoreKoalas);
// // Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
// /* function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins wins (${avgDolphins}: ${avgKoalas})`);
//     return `Dolphins wins (${avgDolphins}: ${avgKoalas})`
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas wins (${avgKoalas}: ${avgDolphins})`);
//     return `Koalas wins (${avgKoalas}: ${avgDolphins})`
//   }
//   else {
//     console.log("no team wins");
//     return "no team wins"
//   }
// } */

// function checkWinner(avgDolphins, avgKoalas) {
//   let winner;
//   if (avgDolphins >= avgKoalas * 2) {
//     winner = `Dolphins wins (${avgDolphins}: ${avgKoalas})`;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     winner = `Koalas wins (${avgKoalas}: ${avgDolphins})`;
//   } else {
//     winner = "no team wins";
//   }
//   return winner;
// }

// // Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// // Data 1
// const data1Winner = checkWinner(scoreDolphins, scoreKoalas);
// console.log(data1Winner);

// // const data2Winner = checkWinner (scoreDolphinsData2, scoreKoalasData2);
// // console.log(data2Winner);
// // Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// // TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// // TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// console.log(`==========================
// The new questions go below
// ==========================`);
// // challenge two
// // CHALLENGE #2
// // Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// // Your tasks:

// // Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// function calcTip(amount) {
//   if (amount >= 50 && amount <= 300) {
//     return amount * 0.15;
//   } else {
//     return amount * 0.2;
//   }
// }

// console.log("tips for 100 ===>", calcTip(100));
// // And now let's use arrays! So, create an array called bills containing the test data below.
// const bills = [125, 555, 44];
// // Create an array called tips containing the tip value for each bill, calculated from the function you created before.
// const tips = [];

// // for (let i =0; i<bills.length; i++){
// //   return tips.push(calcTip(bills[i]))
// // }
// //  console.log(tips);

// // BONUS: Create an array totals containing the total values, so the bill + tip.
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
// // TEST DATA: 125, 555, and 44.
// console.log(tips);
// console.log(totals);

// console.log(`this is a new challenge
// ------------------------------------`);

// // Let's go back to Mark and John comparing their BMIs!

// // This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// // Your tasks:

// // For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   `
// ${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`;
// }
// // console.log(
// //   `${mark.bmi} > ${john.bmi} ? "${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}) : 'idk'"`
// // );

// // Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// // Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// // TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; }
// Your tasks:

// Create an array called bills containing all 10 test bill values.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// Create empty arrays for the tips and the totals (tips and totals)
const tips = [];
const totals = [];

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
const calcTip = function (billsArray) {
  let eachTip;
  let totalBill;
  for (let i = 0; i < billsArray.length; i++) {
    eachTip =
      billsArray[i] >= 50 && billsArray[i] <= 300
        ? billsArray[i] * 0.15
        : billsArray[i] * 0.2;
    totalBill = eachTip + billsArray[i];
    tips.push(eachTip);
    totals.push(totalBill);
  }
};
calcTip(bills);
console.log('bills:',bills,"tips:", tips, "totals:", totals);
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / arr.length;
  return avg
};

const avgTotals = calcAverage(totals)
console.log('This is Avg total bills',avgTotals);

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.
