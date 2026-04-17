export const beginnerNodeExpressQuestions = [
  {
    id: 1,
    topic: "Node.js Basics",
    question: "What is Node.js?",
    answer: "Node.js is a JavaScript runtime environment that lets you run JavaScript outside the browser. It is commonly used to build servers, APIs, command-line tools, and backend applications.",
    level: "Basic"
  },
  {
    id: 2,
    topic: "Node.js Basics",
    question: "Why do developers use Node.js?",
    answer: "Developers use Node.js to build fast JavaScript applications on the server. It is especially useful when you want to use the same language on both the frontend and backend.",
    level: "Basic"
  },
  {
    id: 3,
    topic: "Node.js Basics",
    question: "Is Node.js a programming language?",
    answer: "No, Node.js is not a programming language. JavaScript is the language, and Node.js is the runtime that executes JavaScript outside the browser.",
    level: "Basic"
  },
  {
    id: 4,
    topic: "Node.js Basics",
    question: "What is the difference between Node.js and the browser runtime?",
    answer: "The browser runtime gives JavaScript access to DOM and browser APIs, while Node.js gives JavaScript access to server-side APIs like the file system, network sockets, and process management. They both run JavaScript, but in different environments.",
    level: "Basic"
  },
  {
    id: 5,
    topic: "Node.js Basics",
    question: "What kinds of apps are built with Node.js?",
    answer: "Node.js is used for web servers, APIs, real-time apps, tools, automation scripts, and microservices. It is a common choice for backend JavaScript development.",
    level: "Basic"
  },
  {
    id: 6,
    topic: "Node.js Basics",
    question: "What is an asynchronous event-driven model?",
    answer: "It means Node.js can handle many operations without blocking the main execution flow. This makes it efficient for I/O-heavy applications such as APIs and network services.",
    level: "Basic"
  },

  {
    id: 7,
    topic: "Node.js Basics",
    question: "What is the event loop in Node.js?",
    answer: "The event loop is the mechanism that lets Node.js handle asynchronous work efficiently. It keeps checking for completed tasks and runs their callbacks when they are ready.",
    level: "Basic"
  },
  {
    id: 8,
    topic: "Node.js Basics",
    question: "Why is Node.js good for I/O-heavy tasks?",
    answer: "Node.js is good for I/O-heavy tasks because it does not block the main thread while waiting on network or file operations. That allows it to handle many concurrent requests efficiently.",
    level: "Basic"
  },
  {
    id: 9,
    topic: "Node.js Basics",
    question: "What is a non-blocking operation?",
    answer: "A non-blocking operation lets the program keep running while waiting for a task to finish. This is important in Node.js for keeping servers responsive.",
    level: "Basic"
  },
  {
    id: 10,
    topic: "Node.js Basics",
    question: "What is the process object in Node.js?",
    answer: "The process object gives information about the current Node.js process and lets you interact with it. It is often used for environment variables, exit codes, and runtime information.",
    level: "Basic"
  },
  {
    id: 11,
    topic: "Node.js Basics",
    question: "What is the purpose of process.env?",
    answer: "process.env stores environment variables for the running Node.js process. It is commonly used for configuration values like ports, API keys, and environment names.",
    level: "Basic"
  },
  {
    id: 12,
    topic: "Node.js Basics",
    question: "What is npm?",
    answer: "npm is the package manager for Node.js. It helps you install, update, and manage third-party libraries used in your project.",
    level: "Basic"
  },

  {
    id: 13,
    topic: "Modules and Packages",
    question: "What is a module in Node.js?",
    answer: "A module is a reusable piece of code that can be imported into other files. Modules help keep Node.js applications organized and maintainable.",
    level: "Basic"
  },
  {
    id: 14,
    topic: "Modules and Packages",
    question: "What is the difference between CommonJS and ES Modules?",
    answer: "CommonJS uses require and module.exports, while ES Modules use import and export. Both are module systems, but ES Modules are the modern JavaScript standard.",
    level: "Basic"
  },
  {
    id: 15,
    topic: "Modules and Packages",
    question: "What does require do?",
    answer: "require loads a module into your file so you can use its exported values. It is the traditional module import method in Node.js.",
    level: "Basic"
  },
  {
    id: 16,
    topic: "Modules and Packages",
    question: "What does module.exports do?",
    answer: "module.exports defines what a file makes available to other files. It is how you export functions, objects, or values in CommonJS.",
    level: "Basic"
  },
  {
    id: 17,
    topic: "Modules and Packages",
    question: "What is package.json used for?",
    answer: "package.json stores project metadata, scripts, dependencies, and configuration information. It is one of the most important files in a Node.js project.",
    level: "Basic"
  },
  {
    id: 18,
    topic: "Modules and Packages",
    question: "What is the difference between dependencies and devDependencies?",
    answer: "dependencies are packages needed to run the app in production, while devDependencies are packages used during development, such as testing or build tools. This helps keep production installs focused.",
    level: "Basic"
  },

  {
    id: 19,
    topic: "HTTP Basics",
    question: "What is Express?",
    answer: "Express is a minimal and flexible web application framework for Node.js. It is used to build web servers and APIs with routing and middleware.",
    level: "Basic"
  },
  {
    id: 20,
    topic: "HTTP Basics",
    question: "Why do developers use Express with Node.js?",
    answer: "Developers use Express to simplify server-side development. It gives a clean way to handle routes, requests, responses, and middleware without writing everything from scratch.",
    level: "Basic"
  },
  {
    id: 21,
    topic: "HTTP Basics",
    question: "What is HTTP?",
    answer: "HTTP is the protocol used for communication between clients and servers on the web. It defines how requests and responses are structured.",
    level: "Basic"
  },
  {
    id: 22,
    topic: "HTTP Basics",
    question: "What is the difference between a request and a response?",
    answer: "A request is sent by the client to ask for data or perform an action, and a response is what the server sends back. Together they form the core request-response cycle.",
    level: "Basic"
  },
  {
    id: 23,
    topic: "HTTP Basics",
    question: "What is a route in Express?",
    answer: "A route defines what the server should do when it receives a request for a specific path and HTTP method. It connects URLs to server logic.",
    level: "Basic"
  },
  {
    id: 24,
    topic: "HTTP Basics",
    question: "What are HTTP methods?",
    answer: "HTTP methods describe the action the client wants to perform, such as GET, POST, PUT, PATCH, and DELETE. Each method usually maps to a different kind of operation.",
    level: "Basic"
  },

  {
    id: 25,
    topic: "HTTP Basics",
    question: "What does GET do?",
    answer: "GET is used to request data from a server. It should not normally change server state.",
    level: "Basic"
  },
  {
    id: 26,
    topic: "HTTP Basics",
    question: "What does POST do?",
    answer: "POST is used to send data to the server, usually to create something new. It often carries data in the request body.",
    level: "Basic"
  },
  {
    id: 27,
    topic: "HTTP Basics",
    question: "What does PUT or PATCH do?",
    answer: "PUT is commonly used to replace a resource, while PATCH is used to update part of a resource. Both are used for updating data on the server.",
    level: "Basic"
  },
  {
    id: 28,
    topic: "HTTP Basics",
    question: "What does DELETE do?",
    answer: "DELETE is used to remove a resource from the server. It is the standard HTTP method for deletion operations.",
    level: "Basic"
  },
  {
    id: 29,
    topic: "HTTP Basics",
    question: "What are status codes?",
    answer: "Status codes are numeric responses that tell the client whether a request succeeded or failed. Common examples are 200, 201, 400, 401, 404, and 500.",
    level: "Basic"
  },
  {
    id: 30,
    topic: "HTTP Basics",
    question: "What is the difference between res.send and res.json?",
    answer: "res.send can send a variety of response types, while res.json sends JSON data specifically. In API development, res.json is often the preferred choice for structured data.",
    level: "Basic"
  },

  {
    id: 31,
    topic: "Express Middleware",
    question: "What is middleware in Express?",
    answer: "Middleware is a function that runs during the request-response cycle and can access the request, response, and next function. It is used for logging, authentication, validation, and many other tasks.",
    level: "Basic"
  },
  {
    id: 32,
    topic: "Express Middleware",
    question: "Why is middleware important in Express?",
    answer: "Middleware helps keep route handlers small and reusable. It makes it easier to separate concerns like parsing, auth, logging, and error handling.",
    level: "Basic"
  },
  {
    id: 33,
    topic: "Express Middleware",
    question: "What does next() do in middleware?",
    answer: "next() passes control to the next middleware function or route handler. If you do not call next() or send a response, the request may hang.",
    level: "Basic"
  },
  {
    id: 34,
    topic: "Express Middleware",
    question: "What is application-level middleware?",
    answer: "Application-level middleware is attached to the Express app and runs for matching requests. It is often used for common logic that applies to many routes.",
    level: "Basic"
  },
  {
    id: 35,
    topic: "Express Middleware",
    question: "What is route-level middleware?",
    answer: "Route-level middleware is attached to specific routes or route groups. It is useful when only certain endpoints need custom logic.",
    level: "Basic"
  },
  {
    id: 36,
    topic: "Express Middleware",
    question: "What is error-handling middleware?",
    answer: "Error-handling middleware catches errors and formats the response in one place. In Express, it has a special signature that includes four parameters.",
    level: "Basic"
  },

  {
    id: 37,
    topic: "Express Setup",
    question: "How do you create a basic Express server?",
    answer: "You import Express, create an app, define routes, and start listening on a port. This gives you a working HTTP server for your application.",
    level: "Basic"
  },
  {
    id: 38,
    topic: "Express Setup",
    question: "What does app.listen do?",
    answer: "app.listen starts the server and makes it accept incoming requests on a specific port. Without it, your Express app will not be reachable from the browser or client.",
    level: "Basic"
  },
  {
    id: 39,
    topic: "Express Setup",
    question: "What is app.use used for?",
    answer: "app.use registers middleware or mounts middleware on a path. It is one of the most commonly used methods in Express applications.",
    level: "Basic"
  },
  {
    id: 40,
    topic: "Express Setup",
    question: "What is the purpose of express.json()?",
    answer: "express.json() parses incoming JSON request bodies and makes the data available on req.body. It is commonly used in APIs that receive JSON from clients.",
    level: "Basic"
  },
  {
    id: 41,
    topic: "Express Setup",
    question: "What is the purpose of express.urlencoded()?",
    answer: "express.urlencoded() parses form submissions that use URL-encoded payloads. It is useful when handling HTML form data.",
    level: "Basic"
  },
  {
    id: 42,
    topic: "Express Setup",
    question: "Why should the port come from an environment variable?",
    answer: "Using an environment variable makes the app easier to configure across environments like local development, testing, and production. It keeps deployment settings flexible.",
    level: "Basic"
  },

  {
    id: 43,
    topic: "Request and Response",
    question: "What is req.body?",
    answer: "req.body contains data sent by the client in the request body. It is commonly used for POST, PUT, and PATCH requests.",
    level: "Basic"
  },
  {
    id: 44,
    topic: "Request and Response",
    question: "What is req.params?",
    answer: "req.params contains route parameters from the URL. It is useful when a route needs to work with values such as an id in the path.",
    level: "Basic"
  },
  {
    id: 45,
    topic: "Request and Response",
    question: "What is req.query?",
    answer: "req.query contains query string values from the URL. It is often used for filtering, searching, and pagination.",
    level: "Basic"
  },
  {
    id: 46,
    topic: "Request and Response",
    question: "What is res.status used for?",
    answer: "res.status sets the HTTP status code for the response. It is usually chained before sending the response body.",
    level: "Basic"
  },
  {
    id: 47,
    topic: "Request and Response",
    question: "What is res.sendStatus used for?",
    answer: "res.sendStatus sends a response with just the status code and its default message. It is a quick way to respond for simple cases like 404 or 204.",
    level: "Basic"
  },
  {
    id: 48,
    topic: "Request and Response",
    question: "What is the difference between req.params and req.query?",
    answer: "req.params is part of the route path, while req.query comes after the question mark in the URL. Params are usually for identifying resources, and query values are usually for filtering or optional inputs.",
    level: "Basic"
  },

  {
    id: 49,
    topic: "Practical Basics",
    question: "What is CORS?",
    answer: "CORS is a browser security mechanism that controls whether one origin can access resources from another origin. It is commonly encountered when a frontend app talks to a separate backend server.",
    level: "Basic"
  },
  {
    id: 50,
    topic: "Practical Basics",
    question: "What is the best first mental model for Node.js and Express?",
    answer: "Think of Node.js as the server-side JavaScript runtime and Express as the framework that makes building HTTP servers and APIs easier. Node.js provides the runtime and core APIs, while Express organizes routes and middleware.",
    level: "Basic"
  }
];

export const beginnerNodeExpressMeta = {
  total: 50,
  levels: ["Basic"],
  topics: [
    "Node.js Basics",
    "Modules and Packages",
    "HTTP Basics",
    "Express Middleware",
    "Express Setup",
    "Request and Response",
    "Practical Basics"
  ]
};
