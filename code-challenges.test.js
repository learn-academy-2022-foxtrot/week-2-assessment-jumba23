// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// ===================================== CHALLENGE #1 =================================================

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("isDivisibleByThree", () => {
  it("the function will take in an object and check if te number inside is divisible by 3", () => {
    const object1 = { number: 15 };
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 };
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 };
    // Expected output: "-7 is not divisible by three"
    expect(isDivisibleByThree({ number: 15 })).toEqual(
      "15 is divisible by three"
    );
    expect(isDivisibleByThree({ number: 0 })).toEqual(
      "0 is divisible by three"
    );
    expect(isDivisibleByThree({ number: -7 })).toEqual(
      "-7 is not divisible by three"
    );
  });
});

//ReferenceError: isDivisibleByThree is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================
// we need a function that will take one argument (in our case that is an object).
// have in mind that since the parameter is object, we need to do use (.)dot notation in order to access specific variable.
// we are going to need a conditional statement to check if the variable passed is divisible by 3. The division check will utilize mod operation
// since we have only two possible outcomes, one IF statement should suffice
// the return value will use template literals to utilize dynamic implementation (${expression/variable} as a place holder) and presentation of desired string (`string wrapped in backticks`). ***Saying string interpolation would not be incorrect statement per se, just not precise enough***.

const isDivisibleByThree = (object) => {
  if (object.number % 3 == 0) {
    return `${object.number} is divisible by three`;
  } else {
    return `${object.number} is not divisible by three`;
  }
};

// test passed

// ===================================== CHALLENGE #2 =================================================

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("allCaps", () => {
  it("The function takes in an array of words and returns an array with all the words capitalized", () => {
    const randomNouns1 = [
      "streetlamp",
      "potato",
      "teeth",
      "conclusion",
      "nephew",
    ];
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    expect(allCaps(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ]);
    expect(allCaps(randomNouns2)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
    ]);
  });
});

// ReferenceError: allCaps is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================
// we need a function that takes one parameter. In this scenario that is an array with string elements.
// we need to iterate through the array and check on each element. For this we are going to use .map function since it returns new array be default.
// out of every element (string) we need to access the very firs element (index of 0 of [0]) and call .toUpperCase method on that element/value alone
// final step is adding the rest of the characters using .slice method

const allCaps = (array) => {
  return array.map((e) => {
    return e[0].toUpperCase() + e.slice(1);
  });
};

//test passed

// ===================================== CHALLENGE #3 =================================================

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  it("The function that takes in a string and logs the index of the first vowel", () => {
    const vowelTester1 = "learn";
    // Expected output: 1
    const vowelTester2 = "academy";
    // Expected output: 0
    const vowelTester3 = "challenges";
    // Expected output: 2
    expect(firstVowel(vowelTester1)).toEqual(1);
    expect(firstVowel(vowelTester2)).toEqual(0);
    expect(firstVowel(vowelTester3)).toEqual(2);
  });
});

//ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================
// we need a function that takes in one parameter. In this case that will be a string
// we are going to assign the string to our local variable "stringArray" by using .split method
// once we have an array, we can utilize FOR loop and its index notation. The index notation (i) will be useful in determining the exact address/index of our string element
// a conditional statement (IF) will check each string element/character/value until it finds one of the vowels. At that point, for loop breaks and returns the index (i)

const firstVowel = (string) => {
  const stringArray = string.split("");
  for (i = 0; i < stringArray.length; i++) {
    if (
      stringArray[i] === "a" ||
      stringArray[i] === "e" ||
      stringArray[i] === "o" ||
      stringArray[i] === "u" ||
      stringArray[i] === "i"
    ) {
      return i;
    }
  }
};
