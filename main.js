console.log("the first war aginst javascript....");
// Exercise 1
let myName = "Max";
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
// (% = modulus operator) devide by the numbers, if the remain is 0 its even  if uneven there is always 1 leftover
const ages = [31, 38, 28]
let i = 0;

while (i < ages.length) {
    if (ages[i] % 2 === 0)
    console.log(ages[i]);
    i++;
}

for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 === 0)
    console.log(ages[i]);
    
}
// fix tmr
















let person = {
    name: "Peter",
    age: 26,
    height: 195,
    eyeColor: "blue"
};
console.log(person);

person["name"] = "John";
console.log(person.name);
let colors = ["red", "blue", "green", "purple"];
colors[4] = 1;
console.log(colors);



