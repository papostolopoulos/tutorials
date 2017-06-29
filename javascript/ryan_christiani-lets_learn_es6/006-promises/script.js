'use strict';

let myPromise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve('Good to go!');
  }, 1000);

  setTimeout(()=> {
    reject('uh oh');
  }, 800);
});


myPromise
.then((res) => {
  console.log(res);
})
.catch((rej) => {
  console.log(rej);
});

//Promise all

let myPromise1 = new Promise((resolve, reject) => {
  // setTimeout(() => {
    resolve('Promise 1 good to go');
  // }, 1000);
});

let myPromise2 = new Promise((resolve, reject) => {
  // setTimeout(() => {
    resolve('Promise 2 good to go');
  // }, 1500);
});

Promise.all([myPromise1, myPromise2])
.then((data) => {
  console.log(data);
});

//fetch

// fetch('http://api.icndb.com/jokes/random/10')
// .then((res) => {
//   res.json()
//   .then((data) => {
//     console.log(data);
//   });
// })
// .catch((err) => {
//   console.log(err);
// })










fetch('http://api.icndb.com/jokes/random/10')
.then(function(res){
  res.json().then(function(res){
    console.log(res);
  })
})
