// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022";
// console.log(cohort.split(""))

// a) Your answer: ['F', 'o', 'x', 't', 'r', 'o', 't', ' ','2', '0', '2', '2']
// b) Verify and explain: variable cohort holds a string value in its memory. When we call the method .split on "cohort", it is going to "convert" every element/character of the string into an individual array element. Including empty spaces.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`;
};
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: the function "greeter" produces no return. Missing the "return" before template literal.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2);
// console.log(multipliedByTwo)

// a) Your answer: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain: when we call the function assigned to the variable multipliedByTwo, .map method will return, by default, an array with the values of the initial array multiplied by two.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0);
// console.log(onlyOdds)

// a) Your answer: [11,13,14]
// b) Verify and explain: when we call the function assigned to the variable onlyOdds, .filter method will return, by default, an array with the values that satisfy/pass the conditional. The conditional checks if the number is odd. We are using mod operation to accomplish this.

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub",
// };
// console.log(myCodingSkills.languages[0]);

// a) Your answer: JavaScript
// b) Verify and explain: console.log will call the object myCodingSkills, and using dot notation, it will locate the variable - "languages". Once there, we are calling an element with index of "0", which holds the string value of JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    (this.student = name), (this.cohort = "Foxtrot"), (this.year = 2022);
  }
}
const learnStudent = new Learn("George");
console.log(learnStudent);

// a) Your answer: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }
// b) Verify and explain: at the point of declaring/assigning the class Learn, the constructor method takes in one parameter -"name", which is used to set the initial value of the field this.student. The method only declares the variable student(it's undefined at this point), while declaring and assigning variables for cohort and year . When we declare and assign our new variable learnStudent we pass in an argument "George" into our new object. Now, the only place this argument can go, as previously determined by the constructor method, is to be assigned to the variable student. At this point consol.log will print our new object with 3 variables and their assigned values.
