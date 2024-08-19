'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
///////////////////////////////////////
// https://countries-api-836d.onrender.com/countries/
// const renderCountry = (data, className = '') => {
//   const html = `
//     <article class="country ${className}">
//            <img class="country__img" src=${data.flags?.svg} />
//            <div class="country__data">
//              <h3 class="country__name">${data.name}</h3>
//              <h4 class="country__region">${data.region}</h4>
//              <p class="country__row"><span>👫</span>${(
//                +data.population / 1000000
//              ).toFixed(1)}Mil People</p>
//              <p class="country__row"><span>🗣️</span>${
//                data.languages?.[0].name
//              }</p>
//              <p class="country__row"><span>💰</span>${
//                data.currencies?.[0].name
//              }</p>
//            </div>
//          </article>
//          `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
// };

// const getCountryDataAndNeighbour = country => {
//   const url = `https://restcountries.com/v2/name/${country}`;
//   const request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render Country
//     renderCountry(data, '');

//     // Get neighbour country
//     const neighbours = data.borders;
//     console.log(neighbours);
//     if (!neighbours) return;
//     // get each neighbour and fetch them
//     neighbours.forEach(country => {
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v2/alpha/${country}`);
//       request2.send();
//       request2.addEventListener('load', () => {
//         const data2 = JSON.parse(request2.responseText);
//         // console.log(data2);
//         renderCountry(data2, 'neighbour');
//         // console.log(data2);
//       });
//     });
//     // const request2 = new XMLHttpRequest();
//     // const nbUrl = `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`;
//     // request2.open('GET', nbUrl);
//     // request2.send();
//     // request2.addEventListener('load', () => {
//     //   const data2 = JSON.parse(this.responseText);
//     //   console.log(data2);
//     // });
//   });
// };

const apiKey = 'bdc_60d8ae8ad3164172b4796cee9df203d6';

// const whereAmI = (lat, lng) => {
//   fetch(
//     `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&key=${apiKey}`
//   )
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Something went wrong when communicating with the API');
//       }
//       return res.json();
//     })
//     .then(res => {
//       console.log(res, `Here is ${res.countryName}, ${res.city}`);
//       fetchData(res.countryName);
//     })
//     .catch(e => console.error('fetching countries error===>', e));
// };

// // getCountryDataAndNeighbour('Korea');
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(res => {
//     if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);

//     return res.json();
//   });
// };

const fetchData = country => {
  // country 1
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then(finalRes => {
      const [data] = finalRes;
      console.log('Main country data:', data); // 日志检查主国数据
      renderCountry(data, '');
      const neighbours = data.borders;
      // console.log('Neighbours:', neighbours); // 日志检查邻国代码
      if (!neighbours) throw new Error('There is no neighbours');

      return Promise.all(
        neighbours.map(nb => {
          return fetch(`https://restcountries.com/v2/alpha/${nb}`).then(res =>
            res.json()
          );
        })
      );
    })
    .then(neighbourDataArr => {
      neighbourDataArr.forEach(nbData => renderCountry(nbData, 'neighbour'));
    })
    .catch(err => {
      console.error('fetching countries failed', err);
      renderError(`something went wrong ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// const fetchData = country => {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(finalRes => {
//       const [data] = finalRes;
//       console.log('Main country data:', data); // 日志检查主国数据
//       renderCountry(data, '');
//       const neighbours = data.borders;
//       // console.log('Neighbours:', neighbours); // 日志检查邻国代码
//       if (!neighbours) return;

//       return Promise.all(
//         neighbours.map(nb => {
//           return fetch(`https://restcountries.com/v2/alpha/${nb}`).then(res =>
//             res.json()
//           );
//         })
//       );
//     })
//     .then(neighbourDataArr => {
//       neighbourDataArr.forEach(nbData => renderCountry(nbData, 'neighbour'));
//     })
//     .catch(err => {
//       console.error('fetching countries failed', err);
//       renderError(`something went wrong ${err}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const renderCountry = (data, className = '') => {
  const countryName = data.name;
  const region = data.region;
  const flag = data.flag;
  const language = data.languages[0].name;
  const currencies = data.currencies[0].name;
  const population = +data.population / 1000000 + 'Mil People';

  const html = `
     <article class="country ${className}">
    <img class="country__img" src=${flag} />
    <div class="country__data">
      <h3 class="country__name">${countryName}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row">
        <span>👫</span>${population} people
      </p>
      <p class="country__row">
        <span>🗣️</span>${language}
      </p>
      <p class="country__row">
        <span>💰</span>${currencies}
      </p>
    </div>
  </article>;
    `;
  countriesContainer.insertAdjacentHTML('afterend', html);
  countriesContainer.style.opacity = '1';
};

// btn.addEventListener(
//   'click',
//   whereAmI
//   // whereAmI(19.037, 72.873);
//   // whereAmI(-33.933, 18.474);
// );

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 3; i++) {
//     console.log(res);
//   }
// });
// console.log('TEST END');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('Youu WIN ');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(e => console.error(e));

// real world example: Promisifying setTimeout

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// 对比一下 call back hell和 用wait来实现
// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//             setTimeout(() => {
//                 console.log('4 second passed');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Promisifying the Geolocation API
// const whereAmI = () => {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&key=${apiKey}`
//       );
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Something went wrong when communicating with the API');
//       }
//       return res.json();
//     })
//     .then(res => {
//       console.log(res, `Here is ${res.countryName}, ${res.city}`);
//       fetchData(res.countryName);
//     })
//     .catch(e => console.error('fetching countries error===>', e));
// };

// // getCountryDataAndNeighbour('Korea');
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);

    return res.json();
  });
};
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => {
//     //     resolve(position);
//     //   },
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));
// btn.addEventListener(
//   'click',
//   whereAmI
//   // whereAmI(19.037, 72.873);
//   // whereAmI(-33.933, 18.474);
// );
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse Geocoding
    const resGeo = await fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&key=${apiKey}`
    );

    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    // Country Data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`
    );
    if (!res.ok) throw new Error('Problem getting location data');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}`;
  } catch (err) {
    // console.log(err);
    renderError(`something went wrong ${err}`);
    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(e => console.error(`2 :${e.message}`))
//   .finally(() => console.log('3:finished getting location'));
// 利用iffy来run async await
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (e) {
//     console.log(e.message);
//   }
// })();

const get3Countries = async (c1, c2, c3) => {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(
      data.map(item => {
        const [country] = item;
        return country.capital;
      })
    );
  } catch (err) {
    console.log(err);
  }
};

get3Countries('china', 'USA', 'Canada');

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/italy`),

    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  const [first] = res;
  console.log(first);
})();

const timeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('request took too long'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/china`), timeout(0.2)])
  .then(res => console.log(res[0]))
  .catch(e => console.log(e));

// Promise.allSettled (ES2020)
// takes an array, return all settled promises

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
]).then(res => console.log(res));

// Promise.any (ES2021)
//  -永远return第一个resolved promise
Promise.any([
  Promise.reject('Error'),
  Promise.reject('Error'),
  // Promise.resolve('Success2'),
  // Promise.resolve('Success1'),
])
  .then(res => console.log(res))
  .catch(e => console.log(e));
