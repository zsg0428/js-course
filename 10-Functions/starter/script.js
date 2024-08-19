'use strict';
// const bookings = []
// const createBooking = function(
//     flightNum,
//     numPassengers = 1,
//     price = 199* numPassengers
// ){

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
//     // console.log(bookings);
// }

// createBooking('LH123')
// createBooking('LH123', 2, 800)
// createBooking('LH123', 2)
// createBooking('LH123', 5)
// createBooking('LH123', undefined, 1000)

// const flight = 'LH234'
// const jonas = {
//     name:'Jonas Schmedtmann',
//     passport: 24739479284
// }
// const checkIn = (flightNum,passenger) =>{
//     flightNum = 'LH999'
//     passenger.name = 'Mr.' + passenger.name
//
//     // passenger.passport === 24739479284 ? alert('check in') : alert('Wrong Passport')
// }
//
// checkIn(flight,jonas)
// console.log(flight,jonas);
//
// // Is the same as doing..
// const flightNum = flight   // 这等于是复制粘贴了一个新的paramative
// const passenger = jonas    // 但是这个等于复制了一个reference，但是还是同一个object，所以修改数据也是基于旧的object在修改。
// passenger.name = 'dempsey'
// console.log(jonas); // 这里虽然我们是复制粘贴了jonas的object，然后修改新的passenger object。但是当你改了之后，你jonas的object也改了。这就是reference
//
// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random( )* 100000)
// }
//
// newPassport(jonas)
// checkIn(flight,jonas)
// console.log(jonas);


// const oneWord = function (str){
//     return str.replace(/ /g, '').toLowerCase()
// }
//
// const upperFirstWord = function (str) {
//     const [first, ...others]= str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }
//
// const transformer = function(str, fn) {
//     console.log(`Original String: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`)
//     console.log(`Transformed by: ${fn.name}`)
// }
//
// transformer('Javascript is the best', upperFirstWord)
// transformer('Javascript is the best', oneWord)
//
// const high5 = function (name){
//     console.log('❤️', name)
// }
//
// const names= ['Jonas','Martha','Adam']
//     names.forEach(high5)

// const greet = function(greeting){
//     return function (name){
//         console.log(`${greeting} ${name}`)
//     }
// }
//
// const greeterHey = greet('Hey')
// greeterHey('Jonas')
// greeterHey('Steven')
// greet('Hello')('Dempsey')
//
// const greetNew = (greeting) =>{
//     return (name)=>{
//        console.log ('from Arrow function',`${greeting},${name}`)
//     }
// }
//
// greetNew('Hello')('Mavis')

// const lufthanasa = {
//     airline:'Lufthansa',
//     iataCode:'LH',
//     bookings:[],
//     book(flightNum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//         this.bookings.push({flight:`${this.iataCode}${flightNum}`,name})
//     }
// }
//
// lufthanasa.book(239,'Dempsey')
// lufthanasa.book(666,'Zhang')
// console.log(lufthanasa)
//
// const eurowings = {
//     airline:'Eurowings',
//     iataCode:'EW',
//     bookings:[]
//
// }
// const book = lufthanasa.book
// // Does not work
// // book(23, 'Sarah Williams')
//
// // call bind, apply
// // Call Method.
// book.call(eurowings, 23, 'Sarah WIlliams')
// console.log(eurowings)
//
// book.call(lufthanasa,239,'Mary Cooper')
// console.log(lufthanasa)
//
// const swiss = {
//     airline:'Swiss',
//     iataCode:'LX',
//     bookings:[]
// }
//
// book.call(swiss, 23999,'Dempsey Zhang')
// console.log(swiss)
//
// //Apply method
// const flightData = [583, 'George Cooper']
// book.apply(swiss,flightData)
// console.log(swiss)
//
// book.apply(swiss,[999,'Test'])
// console.log(swiss)
//
// book.call(swiss, ...flightData)
//
// //Bind Method
// const bookEW = book.bind(eurowings)
// bookEW(1999,'Steven Williams')
// console.log(eurowings)
//
// const bookLH = book.bind(lufthanasa)
// const bookLX = book.bind(swiss)
//
// const bookEW23 = book.bind(eurowings,23)
// bookEW23('Dempsey Zhang')
// bookEW23('Martha Cooper')
// console.log(eurowings)
//
// // With Event Listeners
// lufthanasa.planes = 300
// lufthanasa.buyPlane = function(){
//     console.log(this)
//     this.planes++
//     console.log(this.planes)
// }
// document.querySelector('.buy').addEventListener('click',lufthanasa.buyPlane.bind(lufthanasa))
//
// //Partial Application
// const addTax = (rate,value) =>{
//     return value + value*rate
// }
// console.log(addTax(0.1,200))
// const addVAT = addTax.bind(null,0.23)
// // addVAT = value=> value + value *0.23
// console.log(addVAT(100))
// console.log(addVAT(23))
//
// const taxCalc = function(rate){
//     return function(value){
//        return value + value * rate
//     }
// }

// const addVAT2 = taxCalc(0.23)
// console.log(addVAT2(100))
// console.log(addVAT2(23))

// const runOnce = function(){
//     console.log('this will never run again')
//     const isPrivate = 23
// }
// runOnce();
//
// // IIFE
// (function(){
//     console.log('This will never run again')
// })()

// (()=>console.log('this will never run again'))()

// const secureBooking = function(){
//     let passengersCount = 0;
//     return function(){
//         passengersCount++
//         console.log(`${passengersCount} passengers`)
//     }
// }
//
// const booker = secureBooking()
// booker()
// booker()
// booker()
// console.dir(booker)


// Example 1
let f
const g = function () {
    const a = 23
    f = function (){
        console.log(a*2)
    }
}
const h = function(){
    const b = 777
    f = function (){
        console.log(b*2)
    }
}
g()
f()
console.dir(f)

//Re-assigning f function
h()
f()
console.dir(f)

//Example 2
const boardPassengers = function(n, wait){
    const perGroup = n/3

    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup}`)
    },wait * 1000)
    console.log(`Will start boarding in ${wait} seconds`)
}
const perGroup = 1000
boardPassengers(180,3)