// my real age
const myAge = 32;
// the early two years
let earlyYears = 2;

earlyYears *= 10.5;
// age substracting the first two years
let laterYears = myAge - 2;

// calculate the number of dog years accounted for  by my later years
laterYears *= 4;
console.log(earlyYears, laterYears);
// add earlyYears and laterYears to get my age in dog years
const myAgeInDogYears = earlyYears + laterYears;
// convert my name to lower cases
const myName = "Daniel".toLowerCase();
// use string interpolation.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

