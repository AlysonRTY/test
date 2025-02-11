console.log("the first war aginst javascript....");
// Exercise 1
const myName = "Max";
console.log(myName);
// 
//  Exercise 2
const age = 26;
console.log(age);
// 
// Exercise 3
const juliaAge = 32;
const ageDiff = (age - juliaAge);
console.log(ageDiff);
// 
// Exercise 4
if (age > 21) {
    agegap = "You are older than 21";
} else {
    agegap = "You are younger than 21";
}

console.log(agegap);
// 
// Exercise 5
if (age < juliaAge) {
    agegap2 = "Julia is older than you"
} else if (age == juliaAge) {
    agegap2 = "You have the same age as Julia"
} else {
    agegap2 = "Julia is younger than you"
}
console.log(agegap2);
// 
//  Exercise 6
const names = ["Raúl", "Emily", "Lucas", "Jost", "Muayad", "Ali", "Fernando"]
console.log(names[0]);
console.log(names[6]);
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//  if i smaller than names.length i++ (+1 each for each loop) {clg names[i]}
// 
// Exercise 7
//  "const i = 0 didnt work, cant assign to const variable"
const ages = [31, 38, 26];
let i = 0;

while (i < ages.length) {
    // if (ages[i] % 2 === 0) conditional to only show even numbers
    console.log(ages[i]);
    i++;
}

for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 === 0)
    console.log(ages[i]);
    
}
// (% = modulus operator) devide by the numbers, if the remain is 0 its even if uneven there is always 1 leftover
// 
// Exercise 8
let summary = 0;

for (let i = 0; i < ages.length; i++) {
    summary += ages[i];
}
console.log(summary);
// let summary = 0; create a variable that gonna set to 0 and gonna add up with the array numbers 
//  (+= operator is short version of summary = summary + ages[i])
//  clg(summary); needs to be outside loop to only print the final result (if inside gonna print out the result after every loop)
// 
// Exercise 9
const randomNumbers = [1, 2, 8, 3, 2];
let randomNumbersSum = 0;


for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0)
        randomNumbersSum += randomNumbers[i];
}
console.log(randomNumbersSum);
// first found the even numbers with the % modulus operator
// then added them together with the += oprator randomNumbersSum (0) 
//  0 + 2 = 2 + 8 = 10 + 2 = 12 
// 
// Exercise 10
let result10 = 0;

for (let i = 1; i < randomNumbers.length; i+=2) {
    result10 += randomNumbers[i];
}
console.log(result10);
//  the let i = 1 let the loop start at the position 1 array(number 2) and not at position 0 (number 1)
// i += 2 increments the loop counter i by 2 after each loop = skips every non even index element
//  in the end just add the result 10 which is 0 + the even index number:
// 0 + 2 = 2 + 3 = 5 clg(result10) outside so it just prints the final result and not every result after each loop
// 
// Exercise 11 FUNCTIONS


function multiplication() {
    const numb1 = 7;
    const numb2 = 13;
    const result = numb1 * numb2;
    console.log(result);
}
multiplication();
// has no parameters because () is empty // returns nothing except when you call the function; result 91
// 
// Exercise 12

function multiplication2() {
    const numb1 = 3;
    const numb2 = 8;
    return numb1 * numb2;


}
const result = multiplication2();
console.log(result);
// no parameters so always multiplies the same 2 numbers
// main program calls the function with const result and prints it with clg(result); (24)
// 
// Exercise 13

function twoParameters(x, y) {
    return x * y;
}
let answer1 = twoParameters(2, 3);
console.log(answer1);

let answer2 = twoParameters(7, 7);
console.log(answer2);

let answer3 = twoParameters(13, 3);
console.log(answer3);
// wrote function with two parameters (x, y) added return which multiplies the 2 numbers
//  called the answers in the main program (6, 49, 39)
// 
// Exercise 14

// function triangle(a, b, c) {
//     const Equilateral = "Equilateral";
//     const Isosceles = "Isosceles";
//     const Scalene = "Scalene";
//     if (a == b == c) {
//         return Equilateral;
//     }
//     else if (a == b != c) {
//         return Isosceles;
//     }
//     else {
//         return Scalene;
//     }
// }
// let answer4 = triangle(12, 12, 12);
// console.log(answer4);
// let answer5 = triangle(3, 2, 1)
// console.log(answer5);
// first try realized its not working 

function triangle(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral"
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles"
    } else {
        return "Scalene"
    }
}
let answer4 = triangle(5, 5, 5);
console.log(answer4);
let answer5 = triangle(5, 5, 7)
console.log(answer5);
let answer6 = triangle(3, 4, 5);
console.log(answer6);
// Equilateral Triangle: All three sides are equal (side1 === side2 && side2 === side3)
// Isosceles Triangle: Two sides are equal (side1 === side2 || side1 === side3 || side2 === side3)
// Scalene Triangle: All sides are different
// 
// Exercise 15

const exercise15Array = [13, 56, 74, 73, 90, 70, 33]
function lowest() {
    min = exercise15Array[0]
    for (let i = 0; i < exercise15Array.length; i++) {
        if (exercise15Array[i] < min)
            min = exercise15Array[i];
    }
    console.log("the smallest number is",min);

}

lowest(exercise15Array[i]);
// create fuction to search for lowest number in array
// start with declaring min as exercise15Array[0] that means min start as number 13
// then we created a for loop that runs as long as we have numbers left cuz of the i++
// in the while loop we add a condition 
// if the current number (exercise15Array[i]) is smaller than the min, min = exercise15Array[i])
// console.log(min); and call for the fuction "lowest(exercise15Array[i]"
// 
// Exercise 16
const exercise16Array = [13, 516, 743, 77, 9, 1370, 323, 17]

function highest() {
    max = exercise16Array[0]
    for (let i = 0; i < exercise16Array.length; i++) {
        if (exercise16Array[i] > max)
            max = exercise16Array[i];
    }
    console.log("the highest number is", max);
}
highest(exercise16Array[i]);
// same thing except thaz in the if condition we change the "<" to ">" to get the highest number and not the smaller
// 
// Exercise 17

const array17 = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
const index = 1;

function findArrayIndex(array17, index) {
    console.log(array17.at(index) ?? "index is undefined");
}
findArrayIndex(array17, 15);
// Array.at() method allows you to access an element in an array at a specific index, works similiar to (arr[index])
//  supports negative indices, modern addition to javascript



















// let person = {
//     name: "Peter",
//     age: 26,
//     height: 195,
//     eyeColor: "blue"
// };
// console.log(person);

// person["name"] = "John";
// console.log(person.name);
// let colors = ["red", "blue", "green", "purple"];
// colors[4] = 1;
// console.log(colors);


// const loopingArray = [231, 312, 221, 134, 64, 342]
// for (let i = 0; i < loopingArray.length; i++) {
//     summary += loopingArray[i];

// }
// console.log(summary);

// function idkidk(a, b) {
//     let result = a * b;
//     console.log(result);
// }
// idkidk(2, 3)
// idkidk(5, 9)
// idkidk(8, 90)
// function loopinglow() {
//     let low = loopingArray[0];
//     for (let i = 0; i < loopingArray.length; i++){
//         if (loopingArray[i] < low)
//             low = loopingArray[i];
//     }
//     console.log(low);
// }
// loopinglow(loopingArray[i]);

// function xy(x, y) {
//     let result = x / y;
//     console.log(result);
// }
// xy(7283231232, 9)

// const loopArray = [7, 23, 5, 3, 1]
// for (let i = 0; i < loopArray.length; i++){
//     summary += loopArray[i];
// console.log(result);
// }


