'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2024-05-20T14:43:26.374Z',
        '2024-05-25T18:49:59.371Z',
        '2024-05-30T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))
    const daysPassed = calcDaysPassed(new Date(), date)
    console.log(daysPassed)

    if (daysPassed === 0) return 'Today'
    if (daysPassed === 1) return 'Yesterday'
    if (daysPassed <= 7) return `${daysPassed} days ago`

    // const day = `${date.getDate()}`.padStart(2, 0)
    // const month = `${date.getMonth() + 1}`.padStart(2, 0)
    // const year = date.getFullYear()
    // return `${day}/${month}/${year} `
    return new Intl.DateTimeFormat(locale).format(date)
}

const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {style: 'currency', currency: currency}).format(value)

}
const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const date = new Date(acc.movementsDates[i])
        const displayDate = formatMovementDate(date, acc.locale)

        const formattedMov = formatCur(mov, acc.locale, acc.currency)

        const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency)

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency)

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)
};

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
    const tick = () => {
        const min = String(parseInt(time / 60)).padStart(2, 0)
        const sec = String(time % 60).padStart(2, 0)

        //In each call, print the remianing time to UI
        labelTimer.textContent = `${min}:${sec}`


        //when 0 seconds, stop timer and log out user
        if (time === 0) {
            clearInterval(timer)
            labelWelcome.textContent = ' Log in to get started'
            containerApp.style.opacity = 0
        }
        //Decrease one second
        time = time - 1
    }
    // Set time to 5 minutes
    let time = 300

//     Call the timer every second
    tick()
    const timer = setInterval(tick, 1000)
    return timer

}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// Fake login
// currentAccount = account1
// updateUI(currentAccount)
// containerApp.style.opacity = 100
// Experimenting API
// const now = new Date()
// const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     day: 'numeric',
//     month: 'long', // 'numeric', '2-digit'
//     year: 'numeric', //'2 digit'
//     weekday: 'long', //' short'
// }
//
// const locale = navigator.language
// console.log(locale)
//
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)


//  day/month/year

btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === +(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;

        // Create current date and time
        const now = new Date()
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'numeric', // 'numeric', '2-digit'
            year: 'numeric', //'2 digit'
            // weekday: 'long', //' short'
        }

        // const locale = navigator.language
        // console.log(locale)

        labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)
        // const day = `${now.getDate()}`.padStart(2, 0)
        // const month = `${now.getMonth() + 1}`.padStart(2, 0)
        // const year = now.getFullYear()
        // const hour = `${now.getHours()}`.padStart(2, 0)
        // const min = `${now.getMinutes()}`.padStart(2, 0)
        // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        if (timer) clearInterval(timer)
        timer = startLogOutTimer()
        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = +(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Add transfer date
        currentAccount.movementsDates.push(new Date().toISOString())
        receiverAcc.movementsDates.push(new Date().toISOString())

        // Update UI
        updateUI(currentAccount);

        // Reset the timer
        clearInterval(timer)
        timer = startLogOutTimer()
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Math.floor((inputLoanAmount.value))

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        setTimeout(function () {
            currentAccount.movements.push(amount);
            currentAccount.movementsDates.push(new Date().toISOString())

            // Update UI
            updateUI(currentAccount)
        }, 2500)

        // reset the timer
        clearInterval(timer)
        timer = startLogOutTimer()
    }

    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        +(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        console.log(index);
        // .indexOf(23)

        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23 === 23.0)
// //Base 10 - 0 to 9 , 1/10 = 0.1.  3/10 = 3.3333
// //Binary base 2 = 0 to 1
// console.log(1 / 10)
// console.log(0.1 + 0.2 === 0.3)
//
// // Conversion
// console.log(Number('23'))
// console.log(+('23'))
// console.log(+'23')
//
// //Parsing
// // parseInt
// console.log(Number.parseInt('30px', 10)) // 30
// console.log(Number.parseInt('e30px')) // NaN
//
// // parseFloat
// console.log(Number.parseInt('2.5rem'))
//
// console.log(Number.isNaN(20)) // false
// console.log(Number.isNaN('20'))// false
// console.log(Number.isNaN(+'20X'))//true
// console.log(Number.isNaN(23 / 0))// false
//
// console.log(Number.isFinite(20)) // true
// console.log(Number.isFinite('20')) // false
// console.log(Number.isFinite(+'20X'))// false
// console.log(Number.isFinite(23 / 0))// false
//
// console.log(Number.isInteger(23))
// console.log(Number.isInteger(23.2))
//
// console.log(Math.sqrt(25))
// console.log(25 ** (1 / 2))
// console.log(8 ** (1 / 3))
//
// console.log(Math.max(5, 18, 23, 11, 2))
// console.log(Math.max(5, 18, '23', 11, 2))
// console.log(Math.min(5, 18, 23, 11, 2))
// console.log(Math.PI * Number.parseFloat('10px') ** 2)
//
//
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min
// // 0...1 -> 0 ... max-min --> min... max
// console.log(randomInt(1, 16))
//
// // rounding integers
//
// console.log(Math.trunc(23.3))
// console.log(Math.round(23.8))
//
// // ceil --> round up
// console.log(Math.ceil(23.1))
// console.log(Math.ceil('23.8'))
//
// // floor --> round down
// console.log(Math.floor(23.8))
//
// // floor vs trunc when negative numbers
// console.log(Math.trunc(-23.8)) // -23
// console.log(Math.floor(-23.8)) // -24
//
//
// console.log(Math.ceil('23.8'))
// console.log(Math.floor('23.8'))
// console.log(Math.trunc('23.8'))
//
//
// // Rounding decimals
// console.log((2.7).toFixed(0)) // return a string '3'
// console.log((2.7).toFixed(3))
// console.log((2.7315).toFixed(2))
// console.log(+(2.345).toFixed(2))


// console.log(5 % 2)
// console.log(5 / 2) // 5= 2*2+1
//
// console.log(8 % 3)
// console.log(8 / 3) // 8 = 2*3 + 2
//
// console.log(6 % 2)
//
//
// const isEven = n => n % 2 === 0
//
// console.log(isEven(5))
//
//
// labelBalance.addEventListener('click', () => {
//     document.querySelectorAll('.movements__row').forEach((row, i) => {
//         if (i % 2 === 0) row.style.backgroundColor = 'orangered'
//         if (i % 3 === 0) row.style.backgroundColor = 'blue'
//     })
//
//
// })

// Numeric separator
// const diameter = 287_460_000_000
// console.log(diameter)
//
// const priceCents = 345_99
// console.log(priceCents)
//
// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
//
// const PI = 3.141_5926
// console.log(PI)
//
// console.log(Number('230_000')) // not working, shows NaN

// console.log(2 ** 53 - 1) // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
//
// console.log(489719718972987031751035789275829357328957295235n)
// console.log(BigInt(4897197189729870317510))
//
// console.log(10000n + 10000n)
// console.log(392385923859238527899n * 1000000n)
// const huge = 2100125890523905723057n // BigInt
// const num = 23 // normal
//
// // console.log(huge * num) // TypeError: Cannot mix BigInt and other types, use explicit conversions
// console.log(huge * BigInt(num))
//
// // Exceptions
// console.log(20n > 15)
// console.log(20n === 20)
// console.log(typeof 20n)
// console.log(20n == '20')
//
//
// console.log(huge + 'is REALLy BIG')
//
// // Divisions
// console.log(11n / 3n)
// console.log(11 / 3)

//Date and time

//1. create a date
//
// const now = new Date()
// console.log(now)
//
// console.log(new Date('Fri May 31 2024 13:58:04'))
// console.log(new Date('December 24, 2015'))
// console.log(new Date(account1.movementsDates[0]))
//
// console.log(new Date(2037, 10, 19, 14, 23, 3))
// console.log(new Date(2037, 10, 31, 14, 23, 3))
//
//
// console.log(new Date(0))
//
// console.log(new Date(3 * 24 * 60 * 60 * 1000))


// working with dates.
// const future = new Date(2037, 10, 19, 14, 23)
// console.log(future.getFullYear())
// console.log(future.getMonth())
// console.log(future.getDate())
// console.log(future.getDay())
// console.log(future.getHours())
// console.log(future.getMinutes())
// console.log(future.getSeconds())
// console.log(future.toISOString()) // ISO string follows international standard
// console.log(future.getTime()) // 2142271380000
// console.log(new Date(2142271380000))
//
// console.log(Date.now())
//
// future.setFullYear(2040)
// console.log(future)

// const future = new Date(2037, 10, 19, 14, 23)
//
// console.log(Number(+future))
//
// const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4, 10, 8))
// console.log(days1)

// const num = 3884764.23
// const options = {
//     style: 'currency',
//     unit: 'mile-per-hour',
//     currency: 'EUR',
//     useGrouping: false,
// }
// console.log('US:', new Intl.NumberFormat('en-US', options).format(num))
// console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num))
// console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num))
// console.log('China:', new Intl.NumberFormat('zh', options).format(num))
// console.log('broser:', new Intl.NumberFormat(navigator.language).format(num))


//  setTimeOut
const ingredients = ['olives', 'spinach']

const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, ...ingredients)
console.log('waiting...')

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)

// setInterval

const clock = setInterval(() => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    console.log(`${hours}:${minutes}:${seconds}`)
}, 1000)

clearInterval(clock)