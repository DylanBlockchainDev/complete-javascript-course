// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* //prob 1:
// we work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest & lowest temp
// - how to compute max and min temperatures?
// - what is a sensor error? And ehat to do?

// 2) Breaking up into sub-problems
// - how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// prob 2:
// Function should now recieve w arrays of temps

// 1) Understanding the problem
// - whit 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); */

/* // Debugging

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) Fix
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  //B) Find
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) Identify
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identify
console.log(amplitudeBug); */

// Coding challenge
// const printForecast = function (arr) {
//   const temps = arr.sort((a, b) => a - b);
//   let str = "";
//   //   console.log(temps);

//   for (let i = 0; i < temps.length; i++) {
//     str += `... ${temps[i]}c in ${i + 1}days `;
//     // console.log(`...${temps[i]}c in ${i + 1}days`);
//   }
//   console.log(str);
// };
// // printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);
// printForecast([17, 21, 23]);

// need to make it sort the temps from lest to greatest /
// how to make the sorted temps of the array be displayed in that order without knowing the length of the array. /
// increment the number of days wit one more with everytemp.
