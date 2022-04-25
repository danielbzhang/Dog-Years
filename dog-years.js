// my real age
var myAge = 32;
// the early two years
var earlyYears = 2;

earlyYears *= 10.5;
// age substracting the first two years
laterYears = myAge - 2;

// calculate the number of dog years accounted for  by my later years
laterYears *= 4;
console.log(earlyYears, laterYears);
// add earlyYears and laterYears to get my age in dog years
var myAgeInDogYears = earlyYears + laterYears;
// convert my name to lower cases
var myName = 'Daniel'.toLowerCase();
// use string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
