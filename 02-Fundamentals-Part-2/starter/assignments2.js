// //Assiggnments
// const country = "Namibia";
// const continet = "Africa";
// const isIsland = false;
// let language;
// language = "English";
// const namPopulation = 13000000;
// let finPopulation = 6000000;
// const averagePopulation = 33000000;
// const capitalCiti = 'Windhoek';

// number1 of part 2
/* function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} people ant it's cpaital sity is ${capitalCity}`;
    return description;
}

const country1 = describeCountry('Namibia', '4 million', 'Windhoek');
console.log(country1);

const country2 = describeCountry('Finland', '6 million', 'Helsinki');
console.log(country2);

const country3 = describeCountry('SouthAfrica', '59.39 million', 'Cape Town');
console.log(country3); */

/* // number 2

function percentageOfWorld(population) {
    return (population / 7900) * 100;
}
const namPop = percentageOfWorld(4);
console.log(namPop);

const finPop = percentageOfWorld(6);
console.log(finPop);

const SouthPop = percentageOfWorld(60);
console.log(SouthPop);




// function expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const namPop2 = percentageOfWorld2(4);
console.log(namPop2);

const finPop2 = percentageOfWorld2(6);
console.log(finPop2);

const SouthPop2 = percentageOfWorld2(60);
console.log(SouthPop2); */

// number 3
/* //Arrow function
const percentageOfWorld3 = population => (population / 7900) * 100;

// const percentageOfWorld3 = (population) => {
//     return (population / 7900) * 100;
// }

const namPop3 = percentageOfWorld3(4);
console.log(namPop3);

const finPop3 = percentageOfWorld3(6);
console.log(finPop3);

const SouthPop3 = percentageOfWorld3(60);
console.log(SouthPop3); */

/* // number 4
// function percentageOfWorld(population) {
//     return (population / 7900) * 100;
// }

// calling functions in other functions

const describePopulation = (country, population) => {
    const popPercentage = percentageOfWorld(population);
    return `${country} has ${population} million people, which is about ${popPercentage}% of the world's population.`
}

console.log(describePopulation('Namibia', 4));
console.log(describePopulation('SouthAfrica', 60));
console.log(describePopulation('USA', 350)); */

/* // Coding challenge #1 part 2
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsScore = calcAverage(85, 54, 41);// was inside checkWinner function needs to be outisde
const koalasScore = calcAverage(23, 34, 27);// wasn't far off

const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No one wins`);
    }
}

checkWinner(dolphinsScore, koalasScore);// don't need to console.log this
// if not going to decalre these values somewhere else then the values just need to be already added up.



/////////////////////////////////////////////////////////////
// the way the teacher did it
const calcAverage2 = (a, b, c) => (a + b + c) / 3;

//test 1
const scoreDolphins = calcAverage2(44, 23, 71);
const scoreKoalas = calcAverage2(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

const checkWinner2 = function (avgDolphins2, avgKoalas2) {
    if (avgDolphins2 >= 2 * avgKoalas2) {
        console.log(`Dolphins win (${avgDolphins2} vs. ${avgKoalas2})`);
    } else if (avgKoalas2 >= 2 * avgDolphins2) {
        console.log(`Koalas win (${avgKoalas2} vs. ${avgDolphins2})`);
    } else {
        console.log(`No one wins`);
    }
}
checkWinner2(scoreDolphins, scoreKoalas);// don't need to console.log this
// the checkWinner is also completely independant so can also be doen like this
checkWinner2(576, 111); // don't need to console.log this */


/* // coding challeng #2 part2
const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
}

const bills = [125, 556, 44];
console.log(bills);

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];
console.log(tips);

const total = [
    bills[0] + tip1,
    bills[1] + tip2,
    bills[2] + tip3,
];
console.log(total); */

/* // Objects
const myCountry = {
    country: 'Namibia',
    capital: 'Windhoek',
    language: 'English',
    population: 4,
    neighbours: ['SouthAfrica', 'Zimbabwe', 'Botswana', 'Angola', 'Zambia']
};

myCountry.population = myCountry.population + 2;
myCountry['population'] = myCountry['population'] - 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
*/


/* // Object Methods
const myCountry = {
    country: 'Namibia',
    capital: 'Windhoek',
    language: 'English',
    population: 4,
    neighbours: ['SouthAfrica', 'Zimbabwe', 'Botswana', 'Angola', 'Zambia'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },

    checkIsland: function () {
        return `${this.country} ${this.neighbours ? 'is not an Island because it has neighbours' : 'is indeed an Island because it doesnt have neighbours'}.`
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsla()); */

/* // Coding Challenge#3 prt 2

const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

John.calcBMI();
Mark.calcBMI();

console.log(Mark.BMI, John.BMI);

if (Mark.BMI > John.BMI) {
    console.log(`${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s BMI (${John.BMI})!`)
} else if (John.BMI > Mark.BMI) {
    console.log(`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s ${Mark.BMI}!`);
} */

// Iteration: The for Loop
// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }


/* // Looping Arrays, Breaking and Continuing
const populations = [10, 1441, 332, 83];

function percentageOfWorld(population) {
    return (population / 7900) * 100;
}
const percentages = [];

for (let i = 0; i < populations.length; i++) {
    const prec = percentageOfWorld(populations[i]);
    percentages.push(prec);
}

console.log(percentages); */

/* // looping Backwards & Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
//Backwards
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
};

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------strarting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight rep ${rep}`);
    }
} */

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// };

/* // looping Backwards & Loops in Loops
const listOfNeighnours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighnours.length; i++) {
    for (let y = 0; y < listOfNeighnours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighnours[i][y]}`);
    };
}; */

/* // While Loops
// const populations = [10, 1441, 332, 83];
// const percentages2 = [];

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages2.push(perc);
// }
// console.log(percentages2);

function percentageOfWorld(population) {
    return (population / 7900) * 100;
}

const populations = [10, 1441, 332, 83];
const percentages3 = [];

let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld(populations[i]);
    percentages3.push(perc);
    i++;
};

console.log(percentages3); */