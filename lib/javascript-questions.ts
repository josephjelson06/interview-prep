export const beginnerJavaScriptQuestions = [
  {
    id: 1,
    topic: "Basics",
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used to make web pages interactive and dynamic. It runs in the browser and on servers through runtimes like Node.js.",
    level: "Basic"
  },
  {
    id: 2,
    topic: "Basics",
    question: "What is the difference between JavaScript and Java?",
    answer: "JavaScript and Java are different languages with different use cases. JavaScript is mainly used for web development, while Java is a general-purpose language often used for backend, enterprise, and Android development.",
    level: "Basic"
  },
  {
    id: 3,
    topic: "Basics",
    question: "Where does JavaScript run?",
    answer: "JavaScript runs in the browser and can also run on servers using environments like Node.js. In the browser, it powers interactivity on web pages.",
    level: "Basic"
  },
  {
    id: 4,
    topic: "Basics",
    question: "What is the role of JavaScript in web development?",
    answer: "JavaScript handles behavior, logic, and interactivity in web applications. It works together with HTML and CSS to create complete user experiences.",
    level: "Basic"
  },
  {
    id: 5,
    topic: "Basics",
    question: "What are the three core web technologies?",
    answer: "The three core web technologies are HTML, CSS, and JavaScript. HTML provides structure, CSS provides styling, and JavaScript provides behavior.",
    level: "Basic"
  },
  {
    id: 6,
    topic: "Basics",
    question: "What is a variable?",
    answer: "A variable is a named container for storing data. It lets you keep and reuse values in your program.",
    level: "Basic"
  },

  {
    id: 7,
    topic: "Variables",
    question: "What is the difference between var, let, and const?",
    answer: "var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, and const is block-scoped and cannot be reassigned. Today, let and const are preferred over var.",
    level: "Basic"
  },
  {
    id: 8,
    topic: "Variables",
    question: "Why is var less commonly used now?",
    answer: "var has function scope and hoisting behavior that can lead to confusion and bugs. let and const provide cleaner block-scoped behavior.",
    level: "Basic"
  },
  {
    id: 9,
    topic: "Variables",
    question: "Can const objects or arrays be changed?",
    answer: "The const binding cannot be reassigned, but the contents of an object or array can still be modified. const protects the variable reference, not the internal data.",
    level: "Basic"
  },
  {
    id: 10,
    topic: "Variables",
    question: "What is block scope?",
    answer: "Block scope means a variable is only accessible inside the block where it was declared, such as inside an if statement or loop. let and const are block-scoped.",
    level: "Basic"
  },
  {
    id: 11,
    topic: "Variables",
    question: "What is hoisting?",
    answer: "Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during compilation. This is why variables and functions can sometimes be used before they appear in the code.",
    level: "Basic"
  },
  {
    id: 12,
    topic: "Variables",
    question: "What is temporal dead zone?",
    answer: "The temporal dead zone is the period between entering a scope and the actual initialization of a let or const variable. Accessing it in that period causes an error.",
    level: "Basic"
  },

  {
    id: 13,
    topic: "Data Types",
    question: "What are the primitive data types in JavaScript?",
    answer: "The primitive types include string, number, boolean, null, undefined, symbol, bigint, and in modern JavaScript, these are the basic value types used for simple data.",
    level: "Basic"
  },
  {
    id: 14,
    topic: "Data Types",
    question: "What is the difference between null and undefined?",
    answer: "undefined usually means a value has not been assigned yet, while null is an intentional empty value. They are both different ways of representing absence.",
    level: "Basic"
  },
  {
    id: 15,
    topic: "Data Types",
    question: "What is the difference between primitive and reference types?",
    answer: "Primitive values store the actual value directly, while reference types like objects and arrays store a reference to the data. This affects how copying and comparison work.",
    level: "Basic"
  },
  {
    id: 16,
    topic: "Data Types",
    question: "What is NaN?",
    answer: "NaN means Not-a-Number, and it represents an invalid numeric result. It is still of type number in JavaScript.",
    level: "Basic"
  },
  {
    id: 17,
    topic: "Data Types",
    question: "How do you check the type of a value?",
    answer: "You can use the typeof operator for many values. For arrays, null, and objects, you often need additional checks because typeof has limitations.",
    level: "Basic"
  },
  {
    id: 18,
    topic: "Data Types",
    question: "What is the difference between == and ===?",
    answer: "== compares values after type coercion, while === compares both value and type. In most cases, === is the safer and preferred choice.",
    level: "Basic"
  },

  {
    id: 19,
    topic: "Functions",
    question: "What is a function?",
    answer: "A function is a reusable block of code that performs a task. Functions help break a program into smaller, manageable pieces.",
    level: "Basic"
  },
  {
    id: 20,
    topic: "Functions",
    question: "What is the difference between function declarations and function expressions?",
    answer: "A function declaration is defined with the function keyword and is hoisted, while a function expression is assigned to a variable and is not available before initialization. Both are common ways to define functions.",
    level: "Basic"
  },
  {
    id: 21,
    topic: "Functions",
    question: "What is an arrow function?",
    answer: "An arrow function is a shorter function syntax introduced in ES6. It is often used for small callbacks and has lexical this behavior.",
    level: "Basic"
  },
  {
    id: 22,
    topic: "Functions",
    question: "What are parameters and arguments?",
    answer: "Parameters are the named values in a function definition, and arguments are the actual values passed when the function is called. They work together to give a function input.",
    level: "Basic"
  },
  {
    id: 23,
    topic: "Functions",
    question: "What is a return statement?",
    answer: "A return statement sends a value back from a function. It also ends the function execution at that point.",
    level: "Basic"
  },
  {
    id: 24,
    topic: "Functions",
    question: "What is the purpose of callbacks?",
    answer: "A callback is a function passed into another function to be executed later. Callbacks are common in event handling, array methods, and asynchronous code.",
    level: "Basic"
  },

  {
    id: 25,
    topic: "Objects",
    question: "What is an object in JavaScript?",
    answer: "An object is a collection of key-value pairs used to store related data and behavior. Objects are one of the most important data structures in JavaScript.",
    level: "Basic"
  },
  {
    id: 26,
    topic: "Objects",
    question: "How do you access object properties?",
    answer: "You can use dot notation or bracket notation. Dot notation is cleaner, while bracket notation is useful when the property name is dynamic.",
    level: "Basic"
  },
  {
    id: 27,
    topic: "Objects",
    question: "How do you add or update a property in an object?",
    answer: "You assign a value to the property name using dot or bracket notation. If the property exists, it is updated; otherwise, it is added.",
    level: "Basic"
  },
  {
    id: 28,
    topic: "Objects",
    question: "What is object destructuring?",
    answer: "Object destructuring lets you extract properties from an object into variables more easily. It makes code shorter and easier to read.",
    level: "Basic"
  },
  {
    id: 29,
    topic: "Objects",
    question: "What is the difference between shallow copy and deep copy?",
    answer: "A shallow copy copies only the first level, while nested objects still share references. A deep copy clones all nested levels so the new object is fully independent.",
    level: "Basic"
  },
  {
    id: 30,
    topic: "Objects",
    question: "What is JSON?",
    answer: "JSON is a text format used for storing and exchanging data. It looks similar to JavaScript objects but is a string-based data format.",
    level: "Basic"
  },

  {
    id: 31,
    topic: "Arrays",
    question: "What is an array?",
    answer: "An array is an ordered list of values. It is used when you need to store multiple items in a single variable.",
    level: "Basic"
  },
  {
    id: 32,
    topic: "Arrays",
    question: "How do you access array elements?",
    answer: "You access array elements using their index, starting from 0. For example, the first element is at index 0.",
    level: "Basic"
  },
  {
    id: 33,
    topic: "Arrays",
    question: "What does the push method do?",
    answer: "push adds one or more items to the end of an array. It changes the original array.",
    level: "Basic"
  },
  {
    id: 34,
    topic: "Arrays",
    question: "What does the pop method do?",
    answer: "pop removes the last item from an array and returns it. It also changes the original array.",
    level: "Basic"
  },
  {
    id: 35,
    topic: "Arrays",
    question: "What is the map method?",
    answer: "map creates a new array by transforming each item in the original array. It is widely used for rendering lists and transforming data.",
    level: "Basic"
  },
  {
    id: 36,
    topic: "Arrays",
    question: "What is the difference between map and forEach?",
    answer: "map returns a new array, while forEach is used for side effects and does not return a transformed array. Use map when you need a result array.",
    level: "Basic"
  },

  {
    id: 37,
    topic: "Control Flow",
    question: "What is an if statement?",
    answer: "An if statement lets your code choose between different paths based on a condition. It is one of the main building blocks of control flow.",
    level: "Basic"
  },
  {
    id: 38,
    topic: "Control Flow",
    question: "What is a loop?",
    answer: "A loop repeats a block of code while a condition is true or for each item in a collection. Loops help automate repetitive tasks.",
    level: "Basic"
  },
  {
    id: 39,
    topic: "Control Flow",
    question: "What is the difference between for, while, and for...of?",
    answer: "for is good when you know the number of iterations, while repeats while a condition stays true, and for...of is often used to iterate over iterable values like arrays. Each is useful in different situations.",
    level: "Basic"
  },
  {
    id: 40,
    topic: "Control Flow",
    question: "What is the switch statement used for?",
    answer: "switch is used when one value needs to be compared against multiple possible cases. It can make certain conditional logic easier to read than many if else statements.",
    level: "Basic"
  },
  {
    id: 41,
    topic: "Control Flow",
    question: "What is a ternary operator?",
    answer: "The ternary operator is a short form of if else written as condition ? valueIfTrue : valueIfFalse. It is useful for simple inline conditions.",
    level: "Basic"
  },
  {
    id: 42,
    topic: "Control Flow",
    question: "What is short-circuit evaluation?",
    answer: "Short-circuit evaluation means JavaScript stops evaluating an expression as soon as the result is known. This is often seen with && and || operators.",
    level: "Basic"
  },

  {
    id: 43,
    topic: "Scope and Closures",
    question: "What is scope in JavaScript?",
    answer: "Scope is the area where a variable can be accessed. JavaScript uses global scope, function scope, and block scope.",
    level: "Basic"
  },
  {
    id: 44,
    topic: "Scope and Closures",
    question: "What is a closure?",
    answer: "A closure is when a function remembers variables from its outer scope even after the outer function has finished running. Closures are a core JavaScript concept used everywhere.",
    level: "Basic"
  },
  {
    id: 45,
    topic: "Scope and Closures",
    question: "Why are closures useful?",
    answer: "Closures let you keep private state and build reusable functions with preserved data. They are useful in callbacks, factories, and many patterns in frontend development.",
    level: "Basic"
  },
  {
    id: 46,
    topic: "Scope and Closures",
    question: "What is lexical scope?",
    answer: "Lexical scope means scope is determined by where code is written in the source file. Inner functions can access variables from outer functions because of that structure.",
    level: "Basic"
  },

  {
    id: 47,
    topic: "Async Basics",
    question: "What is asynchronous programming?",
    answer: "Asynchronous programming lets code continue running while waiting for slower tasks like network requests or timers. It helps keep applications responsive.",
    level: "Basic"
  },
  {
    id: 48,
    topic: "Async Basics",
    question: "What is a promise?",
    answer: "A promise is an object that represents the eventual result of an asynchronous operation. It can be pending, fulfilled, or rejected.",
    level: "Basic"
  },
  {
    id: 49,
    topic: "Async Basics",
    question: "What do async and await do?",
    answer: "async marks a function as asynchronous, and await pauses execution inside it until a promise resolves. They make asynchronous code easier to read.",
    level: "Basic"
  },
  {
    id: 50,
    topic: "Async Basics",
    question: "What is setTimeout used for?",
    answer: "setTimeout runs a function after a delay. It is commonly used for timers, debouncing, and delayed UI behavior.",
    level: "Basic"
  }
];

export const beginnerJavaScriptMeta = {
  total: 50,
  levels: ["Basic"],
  topics: [
    "Basics",
    "Variables",
    "Data Types",
    "Functions",
    "Objects",
    "Arrays",
    "Control Flow",
    "Scope and Closures",
    "Async Basics"
  ]
};
