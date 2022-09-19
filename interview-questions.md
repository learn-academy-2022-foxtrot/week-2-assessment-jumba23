# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is used when declaring a function and holds the value we use inside the function. Usually, it is placed inside the parentheses. An argument is used when a function is called, right after the function's name and must be in the parentheses. The easiest way to express the difference between the two would be, arguments are the names and arguments are the values passed in a function.

Researched answer: Function parameters are the names of variables used in the function definition. Function arguments are the real values that are passed to the function and received by them. Due to js flexibility, not every function needs to have a parameter in order to take in an argument. In other words, if we were to consol.log(arguments) inside the function with no parameters, we get an object with the values we passed in the function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: Required parameters are function and current value of the parameter. Without these parameters the method would not run/iterate and would console an error. Optional parameters are index (which holds an index value of the current element) and arr (the array of the current element). Index parameter can be very useful when trying to allocate specific value or index.

Researched answer: Predefined parameters are Function and thisValue. The function is required parameter and it contains three parameters: currentValue(current element of iteration) is another REQUIRED, index (position of current array element) - optional, and array - optional.

3. What is the difference between map and filter?

Your answer: The difference between higher order function map and filter is in the return array they both produce by default. Filter will give us back only the elements that satisfy our criteria/condition. While map gives us every element back while performing desired instruction on each element.

Researched answer: Map creates a new array by transforming every element in an array individually, while filter creates a new array by removing elements that we do not want to be returned. Filter is used when we need some logical operation performed.

4. What is iteration?

Your answer: Iteration is a technique used to process a set of information in sequential, predetermined, order. It helps us get through large data sets with more speed and control. We can tailor desired outcome and write our code with less lines while letting the CPU do the heavy lifting of iterating. Some of the techniques used to iterate over data in JS are FOR and WHILE, and DO/WHILE loops or we can use higher order functions such as MAP, FILTER, FOREACH, REDUCE, SOME, etc

Researched answer: In computers science, or to be more specific in programming, iteration process refers to a sequence of instructions or code being repeated (iterated) until a specific criteria is met and result achieved. In programming, iteration is often referred to as ‘looping’, because when a program iterates it ‘loops’ to an earlier step.

5. What is the difference between a class and an object?

Your answer: The easiest way to describe the difference would be to say a class is a blueprint or template for creating objects. Objects can be created in more than one way and many times, while classes are only declared once and only using "class" keyword.

Researched answer: Object is an instance of a class. Object is a real world entity such as chair, tv, tree, bed, mouse, ball etc. Class is a group of similar objects. Object is a physical entity while class is a logical entity. When created an object allocates memory while a class does not.

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting in JS is a process that runs before any of our code is executed, or in other words, during the memory creation phase. At this stage JS engine "moves" variables and function toward the top of the global scope and initialize them by assigning values of "undefined". There are few points of distinction here: 1. When it comes to functions, an arrow function cannot be hoisted since they are assigned to a "const". 2. "var" variable, since its global scope, will be set to "undefined" while "let" and "const" are technically not hoisted in the sense "var" is. Also, the hoisting is applied inside every individual function right before their local execution context. Hoisting is the reason we can call a function before writing it out (except arrow functions). The call happens during global execution phase which comes after the memory creation phase.

Researched answer: Hoisting is a mechanism where variable and function declarations are moved to the top of their scope before code execution. Function declarations are hoisted over variable declarations but not over variable assignments. If a function is assigned to a variable (like arrow function) the hoisting does not apply. Only traditional function declaration works with hoisting. Like function name(){}.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A user story is a format for framing software features. As the “user” part suggests, user stories are written in first person singular and describe a feature as it is perceived by the app’s user. They can be written by CFO, CEO, software-dev team, PO, etc. It is basically a blueprint of the app's functionality. There are may useful and well established templates available online.

2. Spread operator: allows us to quickly copy all or part of an array or object into another array or object. They syntax is simple (...value). One thing useful to know here, the spread operator makes shallow copies. For example if array1 is copied into array2, any change to array1 will not be reflected in array2. If the simple assignment operator (array1 = array2) had been used then array2 would have been assigned by reference to array1. In most cases we do not want this, therefore, spread operator is dope.

3. React: is JS library (not framework) developed by Facebook. It is used for creating single-page web application, while utilizing virtual DOM and reducing the overall traffic to a bare minimum, and improving the overall user experience. For example, less time delay when clicking through things on a page. Netflix app is built using Reach library. One "down side" of react is that you have to figure which library you should use for a specific application, which can be a bit overwhelming since there are thousands of them sitting out there just waiting for you to grab them. React allows you to utilize JS for building front-end (through JSX) and back-end (node and express), which is seen as a big advantage.

4. React props: React props are basically like inputs we send to the specific component. Props stands for properties. They are passe from one component into another. We can deconstruct the props and use just the specific data we need fot that part of application/component. We are in control of which component will have access to a specific data through props.

5. DOM events: DOM is not part of JavaScript, but using DOM, JS can access to HTML or CSS of any given web page. It can also add behavior the HTML for handling front-end input events, such as clicks, mouse moves, etc. In essence is an API for HTML documents. It defines the structure of a document and the way we can access and manipulate it. It stands for Document Object Model.
