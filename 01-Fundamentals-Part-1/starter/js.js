/* const age = "18";
if (age === 18) {
  console.log("you just became an adult (strict)");
}

if (age == 18) {
  console.log("you just became an adult(loose)");
}

const favourite = Number(prompt("what's is your favourite number?"));
// console.log(typeof favourite, favourite)

if (favourite === 23) {
  console.log("23 is a cool number");
} else if(favourite === 7 ){
    console.log(`7 is also a cool number`);
} else {
    console.log(`Number is not 23 or7      `);
}


if(favourite !== 23){
    console.log(`why not is 23`);
} */

// boolean logic
/* const hasDriversLicense = true //a
const hasGoodVision = true //b

console.log(hasDriversLicense && hasGoodVision); //false
console.log(hasDriversLicense || hasGoodVision);//true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;

if(hasDriversLicense && hasGoodVision){
    console.log('Sarah should drive');
} else {
    console.log('someone else should drive');
}

if(hasDriversLicense || hasGoodVision){
    console.log('Sarah should drive');
} else {
    console.log('someone else should drive');
}

const isTired = false; //C 
console.log(hasDriversLicense || hasGoodVision || isTired); 

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah should drive');
} else {
    console.log('someone else should drive');
}
 */

// const day = "monday";
/* switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log('Write code examples');
    break
    case 'friday':
        console.log('record videos');
    break
    case'saturday':
    case 'sunday':
        console.log("enjoy the weekend");
        break
    default:
        console.log('not a valid day');
} */
const day = "saturday";
if(day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day ==='tuesday'){
    console.log("prepare theory videos");
} else if (day === 'wednesday' || day==='thursday'){
    console.log('Write code examples');
} else if ( day ==='friday'){
    console.log('record videos');
} else if ( day=== 'saturday' || day ==='sunday'){
    console.log("enjoy the weekend");
} else {
    console.log('not a valid day');
}


/* const a = 'dog'

switch(a){
    case 'cat':
    console.log('i dont like cat');
    break
    case 'dog':
        console.log('i like doooog');
        break
        default:
            console.log('this is not an option');
} */