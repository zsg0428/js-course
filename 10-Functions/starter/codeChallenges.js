// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         let answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write your answers)`))
//         if (typeof answer === 'number' && answer < this.answers.length && answer >= 0) {
//             this.answers[answer]++
//             // console.log(this.answers)
//         } else {
//             console.log('you should enter something between 0-3')
//         }
//         this.displayResults('string')
//         this.displayResults()
//     },
//     displayResults(type ='array'){
//         if( type === 'array'){
//             console.log(this.answers)
//         } else if( type === 'string'){
//             console.log(`poll results are ${this.answers.join(', ')}`)
//         }
//     }
//
// };
//
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
//
// const data1= [5, 2, 3]
// const data2= [1, 5, 3, 9, 6, 1]
//
// poll.displayResults.call({answers:data1},'array')
// poll.displayResults.call({answers:data1},'string')
// poll.displayResults.call({answers:data2},'string')
// poll.displayResults.call({answers:data2},'array')


(function(){
    const header = document.querySelector('h1')
    header.style.color='red'
    document.querySelector('body').addEventListener('click',()=>{
        header.style.color= 'blue'
    })
})()

