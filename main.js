let year = document.querySelector('.year input');
let month = document.querySelector('.month input');
let day = document.querySelector('.day input');
let resultYear = document.querySelector('.result-year');
let resultMonth = document.querySelector('.result-month span');
let resultDay = document.querySelector('.result-day span');

// console.log(year, month, day)
// console.log(resultYear, resultMonth, resultDay)


let ageBirth = new Date("16 oct 1999");
console.log(ageBirth)

let nowDate = new Date()
console.log(nowDate)


console.log((nowDate - ageBirth) / 3600 / 60 / 24 / 365)