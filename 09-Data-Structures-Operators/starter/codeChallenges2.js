document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textEle = document.querySelector('textarea');

const cbClickHandler = () => {
  const textValue = textEle.value;
  const row = textValue.split('\n');
  if (textValue.includes('_')) {
    for (const [index, item] of row.entries()) {
      const lowerCaseText = item.toLowerCase().trim();
      const [item1, item2] = lowerCaseText.split('_');
      const newItem2 = item2[0].toUpperCase() + item2.slice(1);
     
      console.log([item1, newItem2].join('').padEnd(20,' '), `${'❤️'.repeat(index + 1)}`);
    }
  } else {
    alert('your enter doesnt fit the format')
    console.log('your enter doesnt fit the format');
  }
};
const btn = document.querySelector('button');
btn.addEventListener('click', cbClickHandler);

// const cbClickHandler = ()=>{
//     const textValue = textEle.value
//     const lowerCaseText = textValue.toLowerCase().trim()
//     console.log(lowerCaseText);
//     const row = lowerCaseText.split('\n')
//     console.log(row);
// if(lowerCaseText.includes('_')){
//     for (const [index,item] of row.entries()) {
//         const [item1,item2]= item.split('_')
//         const newItem2 = item2[0].toUpperCase() + item2.slice(1)
//         console.log([item1,newItem2].join(''), `${'❤️'.repeat(index+1)}`)
//      }
// } else {
//     console.log('your enter is wrong');
// }

// }

// const [newtextEle,newtextEle2] = lowerCaseText.split('_')
// const textUpper = newtextEle2[0].toUpperCase() + newtextEle2.slice(1)
// console.log([newtextEle,textUpper].join(''));

// Make sure button can press and it shows the text

// convert it to camel case
//  everything to lower case first
//  split them
//  makes the second word first letter capitalized
// join them together with ''
//  repeat the icon by index
