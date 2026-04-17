export const beginnerNextjsQuestions = [
  {
    id: 1,
    topic: "Introduction",
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building web applications. It adds production-focused features like routing, rendering options, image optimization, and metadata handling on top of React.",
    level: "Basic"
  },
  {
    id: 2,
    topic: "Introduction",
    question: "Why do developers use Next.js instead of plain React?",
    answer: "Developers use Next.js when they want built-in routing, rendering support, better SEO options, and a more complete application structure. It reduces the amount of setup needed for common app features.",
    level: "Basic"
  },
  {
    id: 3,
    topic: "Introduction",
    question: "What is the App Router in Next.js?",
    answer: "The App Router is Next.js’s modern routing system based on folders and files. It is the recommended approach for new applications and supports layouts, nested routes, and server/client components.",
    level: "Basic"
  },
  {
    id: 4,
    topic: "Introduction",
    question: "What does file-system based routing mean in Next.js?",
    answer: "It means the folder and file structure inside the app determines the URLs in the browser. You create routes by adding folders and page files instead of writing route definitions manually.",
    level: "Basic"
  },
  {
    id: 5,
    topic: "Introduction",
    question: "What problem does Next.js solve for React apps?",
    answer: "Next.js solves common application needs like routing, rendering strategy, SEO, and performance optimizations. It gives React apps a structured way to scale beyond a simple client-side interface.",
    level: "Basic"
  },
  {
    id: 6,
    topic: "Introduction",
    question: "What is the difference between the App Router and the Pages Router?",
    answer: "The App Router is the newer routing model built around layouts and server components, while the Pages Router is the older file-based routing system. New projects typically use the App Router, though both can exist in the same app.",
    level: "Basic"
  },

  {
    id: 7,
    topic: "Routing",
    question: "How do you create a page in Next.js?",
    answer: "You create a page file inside a route folder. In the App Router, a page is usually defined with a page.js or page.tsx file inside a route segment.",
    level: "Basic"
  },
  {
    id: 8,
    topic: "Routing",
    question: "What is a layout in Next.js?",
    answer: "A layout is a shared UI wrapper for a route segment and its children. It is useful for keeping common elements like navigation and headers consistent across pages.",
    level: "Basic"
  },
  {
    id: 9,
    topic: "Routing",
    question: "Why are layouts useful?",
    answer: "Layouts prevent repeated UI code and help preserve a consistent structure across related pages. They are especially useful for dashboards, documentation sites, and multi-page apps.",
    level: "Basic"
  },
  {
    id: 10,
    topic: "Routing",
    question: "How do nested routes work in Next.js?",
    answer: "Nested routes are created by nesting folders inside route segments. This allows complex page structures to be modeled naturally in the project tree.",
    level: "Basic"
  },
  {
    id: 11,
    topic: "Routing",
    question: "How do you navigate between pages in Next.js?",
    answer: "You use the Link component for client-side navigation. It lets users move between pages without a full browser reload.",
    level: "Basic"
  },
  {
    id: 12,
    topic: "Routing",
    question: "Why should you use Link instead of a normal anchor tag?",
    answer: "Link enables Next.js navigation features like client-side transitions and prefetching. A normal anchor tag causes a full page reload and does not use Next.js navigation optimizations.",
    level: "Basic"
  },

  {
    id: 13,
    topic: "Rendering",
    question: "What are the main rendering options in Next.js?",
    answer: "Next.js supports server-side rendering, static site generation, and client-side rendering. The framework lets you choose the right strategy based on the page’s needs.",
    level: "Basic"
  },
  {
    id: 14,
    topic: "Rendering",
    question: "What is server-side rendering (SSR)?",
    answer: "SSR means the page HTML is generated on each request. This is useful when content needs to be fresh or personalized on the server.",
    level: "Basic"
  },
  {
    id: 15,
    topic: "Rendering",
    question: "What is static site generation (SSG)?",
    answer: "SSG means the page is pre-rendered into static HTML ahead of time. This usually gives very fast page loads for content that does not change often.",
    level: "Basic"
  },
  {
    id: 16,
    topic: "Rendering",
    question: "What is client-side rendering (CSR)?",
    answer: "CSR means the browser renders the UI after the initial page loads, usually with JavaScript. It is useful when most of the UI depends on client-side interaction.",
    level: "Basic"
  },
  {
    id: 17,
    topic: "Rendering",
    question: "When would you choose SSR over SSG?",
    answer: "Choose SSR when the content must be generated for each request, such as personalized dashboards or live data pages. Choose SSG when the content is mostly stable and can be generated ahead of time.",
    level: "Basic"
  },
  {
    id: 18,
    topic: "Rendering",
    question: "What is automatic static optimization in Next.js?",
    answer: "Automatic static optimization means Next.js can pre-render a page to static HTML when it can. If a page uses server-side data fetching patterns that require per-request rendering, Next.js switches to dynamic rendering.",
    level: "Basic"
  },

  {
    id: 19,
    topic: "Server and Client Components",
    question: "What are Server Components in Next.js?",
    answer: "Server Components render on the server and help reduce client-side JavaScript for parts of the UI. They are useful for fetching data and rendering content that does not need browser-only behavior.",
    level: "Basic"
  },
  {
    id: 20,
    topic: "Server and Client Components",
    question: "What are Client Components in Next.js?",
    answer: "Client Components run in the browser and are used for interactive UI like click handlers, state, and browser APIs. You mark them with the use client directive when needed.",
    level: "Basic"
  },
  {
    id: 21,
    topic: "Server and Client Components",
    question: "When should you use a Client Component?",
    answer: "Use a Client Component when you need interactivity, local state, effects, or browser-only features. If the component is mostly static, a Server Component is usually a better fit.",
    level: "Basic"
  },
  {
    id: 22,
    topic: "Server and Client Components",
    question: "When should you use a Server Component?",
    answer: "Use a Server Component when you want to render content on the server, fetch data efficiently, or reduce the amount of client JavaScript. It is a strong default for non-interactive UI.",
    level: "Basic"
  },
  {
    id: 23,
    topic: "Server and Client Components",
    question: "Can Server Components and Client Components work together?",
    answer: "Yes, Next.js is designed to compose them together. A Server Component can render a Client Component inside it when the UI needs a mix of server and browser behavior.",
    level: "Basic"
  },
  {
    id: 24,
    topic: "Server and Client Components",
    question: "Why is the client component boundary important?",
    answer: "The boundary matters because only Client Components can use browser-only features and hooks like useState or useEffect. Keeping the boundary small can improve performance.",
    level: "Basic"
  },

  {
    id: 25,
    topic: "Data and Metadata",
    question: "How do you add metadata in Next.js?",
    answer: "You can define metadata in a layout or page using the metadata object or generateMetadata function. This helps manage titles, descriptions, and social preview details.",
    level: "Basic"
  },
  {
    id: 26,
    topic: "Data and Metadata",
    question: "Why is metadata important?",
    answer: "Metadata improves SEO and makes shared links look better on social platforms. It helps search engines and users understand the page quickly.",
    level: "Basic"
  },
  {
    id: 27,
    topic: "Data and Metadata",
    question: "What is generateMetadata used for?",
    answer: "generateMetadata is used when metadata needs to be computed dynamically. It is useful when page titles or descriptions depend on route data or fetched data.",
    level: "Basic"
  },
  {
    id: 28,
    topic: "Data and Metadata",
    question: "What is the role of the metadata object?",
    answer: "The metadata object lets you define page or layout metadata in a structured way. It is the simplest option when the values are known ahead of time.",
    level: "Basic"
  },
  {
    id: 29,
    topic: "Data and Metadata",
    question: "What is data fetching in Next.js?",
    answer: "Data fetching is how a page gets the information it needs to render. In Next.js, this can happen on the server, on the client, or ahead of time depending on the rendering strategy.",
    level: "Basic"
  },
  {
    id: 30,
    topic: "Data and Metadata",
    question: "Why does Next.js make data fetching easier?",
    answer: "Next.js ties data fetching to the rendering model, so you can load data in a way that matches the page’s needs. That makes it easier to build fast and SEO-friendly pages.",
    level: "Basic"
  },

  {
    id: 31,
    topic: "Components",
    question: "What is the Image component in Next.js?",
    answer: "The Image component extends the standard img element with automatic image optimization. It helps improve loading behavior and performance for images.",
    level: "Basic"
  },
  {
    id: 32,
    topic: "Components",
    question: "Why is the Next.js Image component useful?",
    answer: "It helps with optimized image delivery, which can improve user experience and page performance. It is especially useful when you want images to load efficiently across devices.",
    level: "Basic"
  },
  {
    id: 33,
    topic: "Components",
    question: "What is the Link component in Next.js?",
    answer: "The Link component is the built-in way to navigate between routes in Next.js. It supports optimized client-side transitions.",
    level: "Basic"
  },
  {
    id: 34,
    topic: "Components",
    question: "What is the purpose of the 'use client' directive?",
    answer: "The use client directive marks a file as a Client Component. It tells Next.js that the component should run in the browser and support client-side interactivity.",
    level: "Basic"
  },
  {
    id: 35,
    topic: "Components",
    question: "What is the purpose of a root layout?",
    answer: "A root layout provides the shared structure for the application, such as the html and body elements and common UI wrappers. It is the top-level layout for the app.",
    level: "Basic"
  },
  {
    id: 36,
    topic: "Components",
    question: "Why do Next.js apps often feel more organized than plain React apps?",
    answer: "Next.js encourages a clear folder structure for routes, layouts, and components. That structure makes large projects easier to maintain and reason about.",
    level: "Basic"
  },

  {
    id: 37,
    topic: "API and Server Logic",
    question: "What are Route Handlers in Next.js?",
    answer: "Route Handlers let you create server-side endpoints inside the App Router using route files. They are used for handling requests and returning responses from the server.",
    level: "Basic"
  },
  {
    id: 38,
    topic: "API and Server Logic",
    question: "Are Route Handlers the same as API Routes?",
    answer: "They serve a similar purpose, but Route Handlers are the newer App Router approach. API Routes belong to the older Pages Router model.",
    level: "Basic"
  },
  {
    id: 39,
    topic: "API and Server Logic",
    question: "Why are Route Handlers useful?",
    answer: "They give you a straightforward way to handle server logic inside the app structure. They are useful for forms, data endpoints, and lightweight backend behavior.",
    level: "Basic"
  },
  {
    id: 40,
    topic: "API and Server Logic",
    question: "Can a Next.js app include backend-like behavior?",
    answer: "Yes, Next.js can include server-side logic through server components, route handlers, and server actions. That is part of why it is often described as a full-stack framework.",
    level: "Basic"
  },

  {
    id: 41,
    topic: "Practical Basics",
    question: "What is prefetching in Next.js navigation?",
    answer: "Prefetching means Next.js may load route data in advance so navigation feels faster. It helps make transitions smoother when users move between pages.",
    level: "Basic"
  },
  {
    id: 42,
    topic: "Practical Basics",
    question: "Why is Next.js good for SEO?",
    answer: "Next.js can render content on the server or ahead of time, which makes it easier for search engines to read page content. Its metadata support also helps search visibility and sharing.",
    level: "Basic"
  },
  {
    id: 43,
    topic: "Practical Basics",
    question: "What is a route segment?",
    answer: "A route segment is one part of the folder-based route structure. It helps Next.js map the file system to nested URLs and layouts.",
    level: "Basic"
  },
  {
    id: 44,
    topic: "Practical Basics",
    question: "What is the main benefit of nested layouts?",
    answer: "Nested layouts let you share UI for only part of the app instead of the entire site. That makes it easier to build different sections with their own structure.",
    level: "Basic"
  },
  {
    id: 45,
    topic: "Practical Basics",
    question: "What is hydration in a Next.js app?",
    answer: "Hydration is the process where client-side JavaScript attaches interactivity to already-rendered HTML. It is what makes static or server-rendered pages interactive in the browser.",
    level: "Basic"
  },
  {
    id: 46,
    topic: "Practical Basics",
    question: "What is the benefit of rendering HTML on the server first?",
    answer: "It helps users see content quickly and can improve SEO and perceived performance. The page can show useful content before client-side JavaScript finishes loading.",
    level: "Basic"
  },

  {
    id: 47,
    topic: "Practical Basics",
    question: "How does Next.js help with performance?",
    answer: "Next.js improves performance through server rendering, static generation, route prefetching, image optimization, and smart bundling. These features reduce the amount of work the browser has to do.",
    level: "Basic"
  },
  {
    id: 48,
    topic: "Practical Basics",
    question: "What should you use for interactive UI in Next.js?",
    answer: "You should use Client Components for interactive UI such as forms, buttons, and stateful widgets. These components can use React hooks and browser APIs.",
    level: "Basic"
  },
  {
    id: 49,
    topic: "Practical Basics",
    question: "What should you use for mostly static content in Next.js?",
    answer: "You should generally use Server Components for mostly static or data-driven content that does not need browser interactivity. This can reduce client-side JavaScript and keep the app efficient.",
    level: "Basic"
  },
  {
    id: 50,
    topic: "Practical Basics",
    question: "What is the best first mental model for Next.js?",
    answer: "Think of Next.js as React plus a strong application framework around routing, rendering, and optimization. If React is the UI layer, Next.js adds the structure that helps ship real production apps.",
    level: "Basic"
  }
];

export const beginnerNextjsMeta = {
  total: 50,
  levels: ["Basic"],
  topics: [
    "Introduction",
    "Routing",
    "Rendering",
    "Server and Client Components",
    "Data and Metadata",
    "Components",
    "API and Server Logic",
    "Practical Basics"
  ]
};
