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
// const lastname2 = names.pop();
// const lastname2 = names.slice(-1); other methods to target the last item on a array
// console.log(lastname2);

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
// console.log(twoParameters(13, 2));
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
    for (let i = 1; i < exercise15Array.length; i++) {
        if (exercise15Array[i] < min)
            min = exercise15Array[i];
    }
    console.log("the smallest number is",min);

}

lowest(exercise15Array[i]);
// for (let = 1;) not (let = 0;) otherwise it just comepare the first number to the same number which doesnt make sense
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
// 
// Exercise 18
const myColor = ["Red", "Green", "White", "Black"];
function arrayToString() {
    return myColor.join(" ");
    
}
console.log(arrayToString(myColor));
// The join() method comb all elements of the array into a single string
// separated by the specified separator (in this case, a space " ").
// 
// Exercise 19
let x = 34423
function reverseNumber() {
    let reverseNum = 0;
    while (x != 0) {
        reverseNum = reverseNum * 10 + (x % 10); //0*10+(34423 % 10)=>3 // 3*10+(3442 % 10)=>30+2=32 // 32*10+(344 % 10)=>320+4= 324 // 324*10+(34 % 10)=> 3240+4=3244 // 3244*10+(3 % 10)=> 32440+3= 32440 FINAL RESULT afterwards it goes into math.floor 3/10= 0(,3) x(now 0) != 0 so it returns the result
        x = Math.floor(x / 10); //34423/10=3442(,3removed) when it reach last number it end on 0(.3) then goes into while loop (0 != 0) = wrong and go to the return to print the reverse number result
    }
    return reverseNum;
}
console.log(reverseNumber(x));
// 
// math.floor takes the number after the dot away after the / 10 example: 54321 / 10 = 5432.1 takes it away 
// 
// Exercise 20

const wm = "webmaster";
function reverseWebmaster(str) {
    return str.split("").sort().join("");
}

console.log(reverseWebmaster(wm));
// str is placeholder for whatever string you pass into the function
// split('') method breaks string into an array of individual characters
// sort() – Arrange Characters in Order
// join('') joins all elements together in 1 string without seperation
// return send final result back
// 
// Exercise 21
function longestWord(string) {
    const array = string.split(" ");
    let longest = 0;
    let index = 0;
    for (i = 0; i < array.length; i++){
        if (array[i].length > longest) {
            longest = array[i].length;
            index = i;
        }
    }
    console.log(array[index]);
}
longestWord("Web Development Tutorial");
//split (" ") split array of words example: "Web Development Tutorial" ==> ["Web", "Development", "Tutorial"]
// longest used to track the longest word found so far / index used to store the position of the word in the array
//  loop checks each for its length, if a word > than longest than gonna replace old longest tillt eh end and the index will hold the position of the word in the array







// 
// Exercise 22

function replaceA(string) {
    console.log("replaceA: ", string.replaceAll("a", "1"));
}
replaceA("Javascript");
// string parameter method, replaceAll("a", "1") replaces all occurrences of the letter "a" in the string with the number "1"
// 
// Exercise 23
function capitalize(string) {
  let capitalized = ""; // Initialize an empty string to store the result
  for (let i = 0; i < string.length; i++) { // Loop through each character in the string
    if (i === 0) { // Check if it's the first character of the string
      capitalized = string[i].toUpperCase(); // Capitalize the first character
    } else if (string[i - 1] === " ") { // Check if the previous character was a space
      capitalized = capitalized + string[i].toUpperCase(); // Capitalize the current character
    } else {
      capitalized += string[i]; // Otherwise, add the character as is
    }
  }
  console.log("capitalized: ", capitalized); // Print the result
}
capitalize("prince of persia"); // Call the function
// 
// 
// Exercise 24
function findEvenNumbers(even) {
    const evenNum = [];
    for (let i = 0; i < even; i++){
        if (i % 2 === 0)
            evenNum.push(i);
    }
   
console.log(even, evenNum);

}
findEvenNumbers(15);
// An empty array named evenNum is created. This will store all the even numbers we find.
// for loop to iterate through the number that gonna get added, inside loop % operator checks if current number i is even, if i is even its added to the evenNum array using the push() method
// 
// Exercise 25

function findOddNumbers(a, b) {
    const OddNum = []; // Array to store odd numbers
    for (let i = a; i < b; i++){ // Loop from a to b
        if (i % 2 === 1) // Check if the number is odd
            OddNum.push(i); // Add the odd number to the array
    }
    console.log(OddNum);
}
findOddNumbers(1, 13);
// 
// 
// 

// Exercise 26
var dupArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function findDuplicate() {
    const duplicates = [];
    for (let i = 0; i < dupArray.length; i++)
        for (let j = i + 1; j < dupArray.length; j++) {
            if (dupArray[i] === dupArray[j]) {
                duplicates.push(dupArray[i]);
            }
            
    }
console.log(duplicates);
}
findDuplicate(dupArray);











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

// unction highest() {
//     max = exercise16Array[0]
//     for (let i = 0; i < exercise16Array.length; i++) {
//         if (exercise16Array[i] > max)
//             max = exercise16Array[i];
//     }
//     console.log("the highest number is", max);
// }
// highest(exercise16Array[i]);

// const highArr = [1, 2, 6, 98, 64, 322, 545675, 72322377]
// function findHighest() {
//     max = highArr[0];
//     for (let i = 0; i < highArr.length; i++){
//         if (highArr[i] > max)
//             max = highArr[i];
//     }
//     console.log(max);
// }
// findHighest(highArr[i]);

// const lowArr = [65, 6756, 4353, 22, 423, 121]
// function findLowArr() {
//     min = lowArr[0];
//     for (let i = 0; i < lowArr.length; i++){
//         if (lowArr[i] < min)
//             min = lowArr[i];
//     }
//     console.log(min);
// }
// findLowArr(lowArr[i]);
// let y = 7732890192883092;
// function reverseIt() {
//     let reverseItNum = 0;
//     while (y != 0) {
//         reverseItNum = reverseItNum * 10 + (y % 10);
//         y = Math.floor(y / 10);
//     }
//     return reverseItNum;
// }
// console.log(reverseIt(y));
