'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const account1 = {
    owner: 'Jonas Schmedtmann', movements: [200, 450, -400, 3000, -650, -130, 70, 1300], interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis', movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30], interestRate: 1.5, pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith', movements: [430, 1000, 700, 50, 90], interestRate: 1, pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = (movement, sort = false) => {
    containerMovements.innerHTML = ''

    // sort 如果sort是true或者false我们如何display UI
    const movs = sort ? [...movement].sort((a, b) => a - b) : movement

    movs.forEach((mov, index) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `  
         <div class="movements__row">
          <div class="movements__type movements__type--${type}">${index + 1} ${type} </div>
          <div class="movements__value">${mov}€</div>
        </div>
          `

        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}

// UserNames
const createUsernames = (accs) => {
    accs.forEach((acc) => {
        acc.username = acc.owner.toLowerCase().split(' ').map((item) => {
            return item[0]
        }).join('')
    })
}
createUsernames(accounts)
console.log(accounts)


// calculate and show the account balance ---- using reduce method
const calcDisplayBalance = account => {
    const balance = account.movements.reduce((acc, currentValue) => acc + currentValue, 0)
    account.balance = balance
    labelBalance.textContent = `${balance} €`

}

const calcDisplaySummary = account => {
    const income = account.movements.filter(move => move > 0).reduce((acc, move) => acc + move, 0)
    labelSumIn.textContent = `${income} €`
    // return income
    const withdrawal = account.movements.filter(move => move < 0).reduce((acc, move) => acc + move, 0)
    labelSumOut.textContent = `${Math.abs(withdrawal)} €`
    // return withdrawal

    const interest = account.movements.filter(move => move > 0)
        .map(move => (move * account.interestRate) / 100)
        .filter(interest => interest >= 1)
        .reduce((acc, move) => acc + move, 0)
    labelSumInterest.textContent = `${interest}€`
}

// Event Handler

// Login function
let currentAccount;
const wrongHtml = `<div class="wrongMsg" style="text-align: center;font-size: x-large; position: absolute; bottom: 50%; left: 50%; transform: translateX(-50%)" > Wrong Password<div/>`
// update UI, 包裹三个function
const updateUI = (account) => {
    displayMovements(account.movements)
    // display balance
    calcDisplayBalance(account)
    //     display summary
    calcDisplaySummary(account)
}
btnLogin.addEventListener('click', (e) => {
    // Prevent form from submitting
    e.preventDefault()
    // console.log('login button is clicked...')
    currentAccount = accounts.find((acc) => {
        return acc.username === inputLoginUsername.value
    })
    console.log(currentAccount)

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        console.log('you got the right pin')
        //     Display UI and welcome message
        const owner = currentAccount.owner
        // labelWelcome.textContent = `Welcome Back, ${owner.slice(0, owner.indexOf(' '))}`  另一种让名字只有first name的办法
        labelWelcome.textContent = `Welcome Back, ${owner.split(' ')[0]}`
        containerApp.style.opacity = 100
        // Update the UI
        //     display movements
        updateUI(currentAccount)


        //     empty the username and password input after login
        inputLoginUsername.value = ''
        inputLoginPin.value = ''
        inputLoginPin.blur()
        inputLoginUsername.blur()
        document.querySelector('.wrongMsg').style.opacity = 0

        //
    } else {
        containerApp.style.opacity = 0
        containerApp.insertAdjacentHTML("beforebegin", wrongHtml)
    }
})

// Transfer money amount & button
btnTransfer.addEventListener('click', (e) => {
    e.preventDefault()
    const amount = Number(inputTransferAmount.value)
    const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value)
    console.log(amount, receiverAccount)
    // receiver's account got the new transaction
    if (currentAccount.balance >= amount && amount > 0 && receiverAccount && receiverAccount?.username !== currentAccount.username) {
        // Doing the transfer
        receiverAccount.movements.push(amount)
        currentAccount.movements.push(-amount)
        // calculate the new balance,summary, out, interest
        updateUI(currentAccount)
    }

    console.log(currentAccount.movements)


    // clear input value and blur the input
    inputTransferAmount.value = ''
    inputTransferTo.value = ''
    inputTransferAmount.blur()
    inputTransferTo.blur()
})
// Close the account
btnClose.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username)
        // Delete account
        accounts.splice(index, 1)
        // Hide UI
        containerApp.style.opacity = 0
        inputCloseUsername.value = inputClosePin.value = ''
        inputCloseUsername.blur()
        inputClosePin.blur()
    }
})

// Loan feature
btnLoan.addEventListener('click', (e) => {
    e.preventDefault()
    const amount = Number(inputLoanAmount.value)
    amount > 0 && currentAccount.movements.some(movement => movement >= 0.1 * amount) && currentAccount.movements.push(amount) && updateUI(currentAccount);
    inputLoanAmount.value = ''
    inputLoanAmount.blur()
    // if (amount > 0 && currentAccount.movements.some(move => move >= amount * 0.1)) {
    //     currentAccount.movements.push(amount)
    // updateUI(currentAccount)
    // }
})

let isSort = false
btnSort.addEventListener('click', (e) => {
    e.preventDefault()
    displayMovements(currentAccount.movements, !isSort)
    isSort = !isSort
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*let arr = ['a','b','c', 'd', 'e']
const newArr = arr.slice(2,4)
console.log('newArr staring at position of 2',newArr)
// Slice
console.log( arr.slice(-2))
console.log( arr.slice(-1))
console.log( arr.slice(1,-1))
console.log(arr.slice()) // 复制一个array
console.log([...arr]) // 也是复制一个array

// Splice 用法和slice很相似，但是会改变原本array
// console.log(arr.splice(2))
arr.splice(-1)
console.log(arr.splice(1,2)) // 括号里第二个数就是你想从1号位删除几个
console.log(arr)

//Reverse
arr = ['a','b','c', 'd', 'e']
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse())
console.log(arr2)


// CONCAT 连接
const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr,...arr2])

//Join
console.log(letters.join('-'))*/
//
// const arr = [23, 11, 64]
// console.log(arr[0])
// console.log(arr.at(0))
//
// // getting last array element
// console.log(arr[arr.length - 1])
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1))
// console.log(arr.at(-2))
//
// console.log('jonas'.at())
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((item, index, array) => {
//     if (item > 0) {
//         console.log(`Movement: ${index + 1} you deposited ${item}`)
//     } else {
//         console.log(`Movement: ${index + 1} you withdrew ${Math.abs(item)}`)
//     }
// })
// 0:function(200)
// 1:function (450)

// for (const item of movements) {
//     console.log(item)
// }

/*const currencies = new Map([['USD', 'United States dollar'], ['EUR', 'Euro'], ['GBP', 'Pound sterling'],]);
currencies.forEach((value, key, map) => {
    console.log(`${key}:${value}`)
})

//set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach((value, _, set) => {
    console.log(`${value}:${value}`)
}*/

// map method creates a new array based on the old array
// filter original array that satisfies the condition.
// reduce the array to one single value(

// const arrData = [1, 2, 3, 4]
//
// //map
//
// const mapTest = arrData.map((item) => {
//     return item * 2
// })
//
// console.log('mapTest ====>', mapTest)
//
// const filterTest = arrData.filter((item) => {
//     return typeof item === 'number' && item >= 40
// })
//
// console.log(filterTest)
//
// const reduceTest = arrData.reduce((acc, currentValue) => {
//     return acc + currentValue
// })
// console.log(reduceTest)


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// const eurToUsd = 1.1
//
// const usd = movements.map(item => item * eurToUsd)
//
// console.log(usd)
//
// const movementsUSDfor = []
// for (const mov of movements) {
//     movementsUSDfor.push(mov * eurToUsd)
// }
// console.log(movementsUSDfor)
//
// const movementsDescriptions = movements.map((mov, index, array) => {
//     return `Movement ${index + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// })
//
// console.log(movementsDescriptions)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposit = movements.filter((mov) => mov > 0
// )
//
// console.log(deposit)
// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals)
//
// const withdrawalForOf = []
// for (const mov of movements) {
//     if (mov < 0) {
//         withdrawalForOf.push(mov)
//     }
// }
//
// console.log(withdrawalForOf)

// const reducedArray = movements.reduce((acc, currentValue, i, array) => {
//     console.log(`Iteration ${i}: ${acc}`)
//     return acc + currentValue
// }, 0)
// console.log(reducedArray)
//
// let acc = 0
// for (const mov of movements) {
//     acc = acc + mov
// }
// console.log(acc)
//用reduce method拿到最大的value
// const max = movements.reduce((acc, mov) => {
//     if (acc > mov)
//         return acc
//     else
//         return mov
// }, movements[0])
// console.log(max)

//pipeline
// const totalDepositsUSD = movements.filter(mov => mov > 0)
//     // .map(mov => mov * 1.1)
//     .map((mov, i, arr) => {
//         console.log(arr)
//         return mov * 1.1
//     })
//     .reduce((acc, currentValue) => acc + currentValue, 0)
// console.log(totalDepositsUSD)
//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// const firstWithdrawal = movements.find(move => move < 0)
// console.log(firstWithdrawal)
// console.log(movements.find(move => move > 450)) //这里就return了 3000. which is the first number thats bigger than 450.
//
// console.log(accounts)
//
// const account = accounts.find(account => account.owner.toLowerCase() === 'jessica davis')
// console.log(account)

// const thisAccount = []
// for (const account of accounts) {
//     // if (account.owner === 'Jessica Davis')
//     if (account.owner.includes('Davis'))
//         console.log(account)
// }
// console.log(thisAccount)
//
// const thisAccount = accounts.filter(account => account.owner === "Jessica Davis")
// console.log(thisAccount)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// console.log(movements)
// // console.log(movements.includes(-130))
// console.log(movements.some(item => item === -130))
// const anyDeposits = movements.some(move => move > 5000)
// console.log(anyDeposits)


//EVERY method
// const isZhengshu = movements.every(item => item % 3 === 0)
// console.log(isZhengshu)
// console.log(account4.movements.every(mov => mov > 0))
//
// // Separate callback function
// const deposit = move => move > 0
// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))
//
// //flat and flatMap
//
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
// console.log(arr.flat())
// const arrDeep = [[[1, 2,], 3], [4, [5, 6]], 7, 8]
// console.log(arrDeep.flat(3))
//
// // const accountMovements = accounts.map(item => item.movements)
// // console.log(accountMovements)
// //
// // const allMovements = accountMovements.flat()
// // const overallBalance = allMovements.reduce((acc, currentValue) => acc + currentValue, 0)
// // console.log(overallBalance)
//
// // flat
// const overallBalance = accounts.map(item => item.movements).flat().reduce((acc, cur) => acc + cur, 0)
// console.log(overallBalance)
//
// //Flatmap method
// const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => acc + cur, 0)
// console.log(overallBalance2)

// SORT

const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
// console.log(owners.sort())
// console.log(newOwners)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements)
//
// return < 0, then A,B (keep order)
// return > 0 , B, A(swtich order)

// Ascending
// movements.sort((a, b) => {
//     if (a > b) return 1
//     if (a < b) return -1
// })
// console.log(movements)
//
// // decsending
// movements.sort((a, b) => {
//     if (a < b) return 1
//     if (a > b) return -1
// })

// movements.sort((a, b) => a - b)
// console.log(movements)
// movements.sort((a, b) => b - a)
// console.log(movements)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// // empty arrays + fill method
// const x = new Array(7)
// console.log(x)
// x.fill(1, 3, 5) // 这里第二个parameter是start point，第三个是end position
// // fill method
// arr.fill(23, 2, 5)
// console.log(arr)
// // x.fill(1)
// // console.log(x)
//
// // Array.from
// const y = Array.from({length: 7}, () => 1)
// console.log(y)
//
// const z = Array.from({length: 7}, (number, index) => index + 1)
// console.log(z)
//
// const diceRoll = Array.from({length: 100}, () => Math.trunc(Math.random() * 6) + 1)
// console.log(diceRoll)
//
// const movementUI = Array.from(document.querySelectorAll('.movements__value'))
// console.log(movementUI)
//
// labelBalance.addEventListener('click', () => {
//     const movementUI = Array.from(document.querySelectorAll('.movements__value'), item => Number(item.textContent.replace('€', '')))
//     // console.log(movementUI.map))
//     console.log(movementUI)
//
//     const movementUI2 = [...document.querySelectorAll('.movements__value')]
//     const newMov = movementUI2.map(item => item.textContent.padEnd(25, '.'))
//     console.log(newMov)
// })

// 1. 所有deposit的数字
// const totalDeposit = accounts.flatMap(acc => acc.movements).filter(item => item > 0)
//
// const allDeposit = totalDeposit.reduce((acc, currentValue) => acc + currentValue, 0)
// console.log(allDeposit)
//
// // 2. how many deposits are at least more than 1000
//
// // const aThousand = totalDeposit.filter((item, i, arr) => item >= 1000).length
// // console.log(aThousand)
//
// const aThousand = totalDeposit.reduce((acc, cur) => cur >= 1000 ? acc + 1 : acc, 0)
// console.log(aThousand)
//
// // 3. create a new object contains the sum of the deposits and withdrawals
//
// const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
//     // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur
//     sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur
//     return sums
// }, {deposits: 0, withdrawals: 0})
//
// console.log(deposits, withdrawals)
//
// // 4. create a function that converts a string to titled case (all the words in the sentence should be capitalized.
//
// const convertTitleCase = (title) => {
//     const capitalize = str => str[0].toUpperCase() + str.slice(1)
//
//     const titleCase = title.toLowerCase().split(' ').map(item => {
//         const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', "with"]
//         return exceptions.includes(item) ? item : capitalize(item)
//     }).join(' ')
//     return capitalize(titleCase)
// }
//
// console.log(convertTitleCase('this is a nice title'))
// console.log(convertTitleCase('this is a LONG title but not too long'))
// console.log(convertTitleCase('and here is another title with an EXAMPLE'))

// const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', "with"]
// console.log(...exceptions)
