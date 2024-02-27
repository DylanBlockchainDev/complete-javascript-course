/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);
*/

// DATA types 
/*  //Dynamic typing
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); */

/*// LET, CONST & VAR
// Let
let age = 30;
age = 31;

// Const
const birthYear = 1991;
birthYear = 1990; //can't work.
const job; // can't be empty

// Var
var job = 'programmer';
job = 'teacher';

lastName = "Katsch";
console.log(lastName); */

/* // maths Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

//concatenation
const firstName = 'Jonas';
const lastName = 'Bob';                   // { there is a better way
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // (25)x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 >= now - 2018); */

/* const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;

console.log(now - 1991 >= now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara, averageAge); */

/* // Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);


// Type Coercion
console.log('I am ' + 23 + ' years lod'); // the "+" converts to string. // <--same -->// console.log('I am ' + '23' + ' years lod'); when ever there is an "+"operation between a STRING and a NUMBER the NUMBER will be converted to a STRING. exept when the stings are numbers.
console.log('23' - '10' - 3); // the " - " symbol converts to number. // if change - into + it will convert to string.
console.log('23' / '2');  // * and / it's number type by default

let n = '1' + 1; // '11'
n = n - 1; // 11 - 1 = 10
console.log(n); */

/* // Truthy & Falsy values
// 5 falsy values: 0, '', undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('you should get a job!');
}

let height = 0;

if (height) {
    console.log('Yay hegiht is defined');
} else {
    console.log('height is undefined');
} */

/* // Equality operators
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What's your fav number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> false
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool num');
} else if (favourite === 9) {
    console.log('9 is also a cool num');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('why not 23?'); */

// // Logical Operators
// const hasDriversLicense = true;//A
// const hasGoodVision = true;//B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log('Sara is able to drive');
// // } else {
// //     console.log('someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sara is able to drive');
// } else {
//     console.log('someone else should drive...');
// }

/* // Switch Statements
const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
} */

// // Satements & Expressions
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger';
// }

// //Conditional Operator
// const age = 23;
// // age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

