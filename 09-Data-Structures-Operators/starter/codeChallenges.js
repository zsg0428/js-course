const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//   3.1
//   Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.
//   Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

//   3.2 Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
const spellWord = function (str) {
  console.log(...str);
};
spellWord('Javascript');

// 4.1 Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = books[0].keywords;
console.log('=====>', mainKeyword, rest);

// 4.2  Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

const [bookPublisher, ...restOfTheBook] = [books[1].publisher, books[1]]; //这是我自己想出来的， 这个不对是因为rest里面又有了一次bookPublisher
console.log('bookPublisher==>', bookPublisher, 'rest of ===>', restOfTheBook);
const { publisher: bookPublisher1, ...restOfTheBook1 } = books[1]; // 这个是答案
console.log(
  'bookPublisher1==>',
  bookPublisher1,
  'rest of ===>',
  restOfTheBook1
);

//  4.3 Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

const printBookAuthorsCount = function (title, ...authors) {
  console.log(
    ` The book ${title}, has ${authors.length} authors, they are ${authors}`
  );
};
printBookAuthorsCount(
  'Algorithms',
  'Robert Sedgewick',
  'Kevin Wayne',
  'asdasdas',
  'mmm',
  'aaa'
);

// 5.1 Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

const hasExamplesInJava = function (books) {
  return books.programmingLanguage === 'Java' || 'no data available';
};

console.log(hasExamplesInJava(books[4]));

// 5.2 Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting

for (i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title} provides online content`);
}

// 6.1 There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

for (i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title} provides no data about its online content`);
}

// 7.1 Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
  console.log(books[i].edition);
}
// 7.2 Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

for (let i = 0; i < books.length; i++) {
  books[i].thirdParty.goodreads.rating < 4.2 && (books[i].highlighted = false);
  console.log(books[i].highlighted);
}
// 8.1 Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.
let pageSum = 0;
for (const page of books) {
  pageSum = pageSum + page.pages;
}
console.log(pageSum);
// 8.2 Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array. Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

const allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else if (typeof book.author === 'object') {
    allAuthors.push(...book.author);
  }
}
console.log('All===<>', allAuthors);
// 8.3 Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.
for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}.${author}`);
}

// 12.1 Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

// Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

const allKeywords = [];
for (const item of books) {
  allKeywords.push(...Object.values(item.keywords));
}
console.log('all=====>', allKeywords);

// 12.2
// The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.
const uniqueKeywords = new Set(allKeywords);
console.log('unique', uniqueKeywords);
// 12.3
// Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
uniqueKeywords.add('coding');
uniqueKeywords.add('science');

console.log('unique', uniqueKeywords);
// 12.4
// Delete 'business' from the uniqueKeywords set.
uniqueKeywords.delete('business');
// 12.5
// Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.

const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);
uniqueKeywords.clear();
console.log('unique===>', uniqueKeywords);

// 13.1 Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

// 13.2 Set a new key in bookMap called pages, and assign it with a number 464.
bookMap.set('page', 464);
// 13.3﻿ Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
const titleFromMap = bookMap.get('title');
const authorFromMap = bookMap.get('author');
console.log(`${titleFromMap} by ${authorFromMap}`);
console.log(bookMap);

// 13.4 Get the size of bookMap, and log it to the console.
console.log(bookMap.size);

// 13.5 Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

bookMap.has('author')
  ? console.log('The author of the book is known')
  : console.log('there is no author');

// 14.1 Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);
// 14.2 Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') {
    console.log(key);
  }
}

// 17.1Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

// Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

const logBookCategories = str => {
  const arr = str.split(';');
  // console.log(arr);
  for (const item of arr) {
    console.log('-----item----', item);
  }
};
logBookCategories(bookCategories);

// 17.2 Now, the opposite. Each book from the books array has the keywords property.

// Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.
// 先收集所有array 加进一个array
const getKeywordsAsString = books => {
  const emptyArr = [];
  // 转换成set
  // 转换成字符串，join by ;
  for (const item of books) {
    emptyArr.push(...item.keywords);
  }
  const newSet = new Set(emptyArr);
  const newArr = [...newSet];
  // console.log(newArr);

  const newStr = newArr.join(';');
  console.log('newStr ---->', newStr);
};
getKeywordsAsString(books);
// 17.3 Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

// Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

// Use the padEnd method.

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
const logBookChapters = arr => {
  // for of Loop 先遍历每个array的[0]
  // log的时候把[0]加上padEnd with _
  for (const [title, page] of arr) {
    console.log(`${title.padEnd(20, '_')} ${page}`);
  }
};

logBookChapters(bookChapters);

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  const getStr = (str)=>str.slice(0,3).toUpperCase()

const formatFlights = arr => {
  const splitedArr = arr.split('+');
  // console.log(splitedArr );
  for (const item of splitedArr) {
    // console.log(item);
    const splittedStr = item.split(';');
    const [type, from, to, time] = splittedStr;

    const output = `${type.includes('Delayed') ? '😍' : ''} ${type.slice(1).replace('_', ' ')}. from ${getStr(from)} to ${getStr(to)} (${time.replace(':',"h")})`.padStart(52 , ' ');
    
    // if (type.includes('Delayed')) {
    // type.replace('_', '');
    // }
    console.log(output);
  }
};

formatFlights(flights);
