// //Assiggnments
// const country = "Namibia";
// const continet = "Africa";
// const isIsland = false;
// let language;
// language = "English";
// const namPopulation = 13000000;
// let finPopulation = 6000000;
// const averagePopulation = 33000000;

// const { resolveDomainOperation } = require("@moralisweb3/common-evm-utils");

// // Conditional Operator
// namPopulation >= averagePopulation ? console.log('above') :
//     console.log('below');

// const POP = namPopulation >= averagePopulation ? 'above' : 'below';
// console.log(POP);

// console.log(`POP is ${namPopulation >= averagePopulation ? 'above' : 'below'} the average population`);

// Switch Statemants
/* const language = '';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
} */

// // Logical Operators 
// const speaksEnglish = true;
// const lessThan50mil = true;

// if (speaksEnglish && lessThan50mil) {
//     console.log(`Sara should live in Namibia`);
// } else {
//     console.log(`Namibia does not meet your criteria`);
// }

// // Equality operators ==  ===
// const numNeighbours = Number(prompt(`How many neighbours does your country have?`));
// //console.log(numNeighbours);

// if (numNeighbours === 1) {
//     console.log(`only 1 border`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border`);
// } else {
//     console.log(`No borders`)
// }

// // type convertion and coercion
// const a = '9' - '5';
// const b = '19' - '13' + '17';
// const c = '19' - '13' + 17;
// const d = '123' < 57;
// const e = 5 + 6 + '4' + 9 - 4 - 2;

// console.log(a, b, c, d, e);

// if & else statements
// if (namPopulation > averagePopulation) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${averagePopulation - namPopulation} million below average`)
// }

// const description =
//     country + ' ' + "is in" + ' ' + continet + ' ' + "and it's" + ' ' + namPopulation + ' ' + "people speaks" + ' ' + language;

// const description2 = `${country} is in ${continet} and it's ${namPopulation} people speaks ${language}`;

// console.log(description2);
// console.log(description);

// console.log(typeof country);
// console.log(typeof isIsland);
// console.log(typeof namPopulation);
// console.log(typeof language);

// namPopulation = namPopulation / 2;
// namPopulation++;
// console.log(namPopulation);

// console.log(namPopulation > finPopulation);
// console.log(namPopulation < averagePopulation);
// // let const var - changed a few let decaleration to const & assigned a value to language 

/* // coding challenge
//data set 1
// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

// data set 2
const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;
console.log(markBmi, johnBmi);

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI); // first data set was true // second data set was false */

// strings and template literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

// console.log(jonas);
// console.log(jonasNew);


/* // IF & ELSE Statements
const age = 15;

if (age >= 18) {
    console.log('Sara can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}
// --------------------------------------------------

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 19;
} else {
    century = 20;
}
console.log(century); */

/* // Coding Challenge #2
//data set 1
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

// // data set 2
// const markMass = 95;
// const markHeight = 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

let higherBMI;
if (markBmi > johnBmi) {
    higherBMI = `Mark's BMI(${markBmi}) is higher than John's BMI(${johnBmi})!`;
} else {
    higherBMI = `John's BMI(${johnBmi}) is higher than Mark's BMI(${markBmi})!`;
}

console.log(higherBMI); */

// Coding challenge #3

/* const DolphinsAveScore = (97 + 112 + 101) / 3;
const KoalasAveScore = (109 + 95 + 106) / 3;
const scoreMin = 100;

console.log(DolphinsAveScore);
console.log(KoalasAveScore);

if (DolphinsAveScore > KoalasAveScore && DolphinsAveScore >= scoreMin) {
    console.log(`The Dolphins have a higher AveScore so they win!`);
}

else if (KoalasAveScore > DolphinsAveScore && KoalasAveScore >= scoreMin) {
    console.log(`The Koalas have a higher AveScore so they win!`);
}

else if (DolphinsAveScore === KoalasAveScore && DolphinsAveScore, KoalasAveScore >= scoreMin) {
    console.log(`It's a draw!!!`);
}
// everything below is extra
else if (DolphinsAveScore > KoalasAveScore) {
    console.log(`The Dolphins have a higher AveScore but is less than the scoreMin`);
}

else if (KoalasAveScore > DolphinsAveScore) {
    console.log(`The Koalas have a higher AveScore but is less than the scoreMin`);
}

else {
    console.log(`they draw but is not equal to scoreMin`);
} */


//conding challenge #4
// const bill = 275;
// const tip = 15;

// // bill >= 50 && bill <= 300 ? `${tip}` : `${20}`;

// // console.log(`the bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? `${(tip * bill) / 100}` : `${(20 * bill) / 100}`}, and the total value was ${` ${bill >= 50 && bill <= 300 ? `${(tip * bill) / 100}` : `${(20 * bill) / 100}`} + ${bill}`} `);} MY TRY WAS WRONG OVERAL BUT IT WAS CLOSE, JUST DIDN'T KNOW i HAD TO DO THE CALULATION INSIDE OD THE TIP VARIABLE.

// // THE RIGHT WAY
// const bill2 = 275;
// const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
// //console.log(tip2);

// console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total was ${bill2 + tip2}`);


// const password = "redruby123";
// console.log((password === "redruby123") ? 'Success' : 'Fail');


// let body = document.querySelector('body');
// let choice = 'dark';
// choice === 'dark' ? body.classList.add('darkMode') : null;

// const age = 11;
// const TorF = (age > 10) ? 'true' : 'false';
// console.log(TorF);

// let message2 = 1 > 10 ? 'condition is true' : 'condition is false';
// console.log(message2);

// console.log(message2 = 1 > 10 ? 'condition is true' : 'condition is false')

let time = '12:00';
const MOorEv = time < '12:00' ? 'Good Morning' : 'Good Evening';
console.log(MOorEv);