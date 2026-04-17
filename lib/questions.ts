export type Category = 'React' | 'Next.js' | 'JavaScript' | 'Node.js / Express';
export type Difficulty = string;
export type Topic = string;

export interface Question {
  id: string;
  category: Category;
  title: string;
  topic: Topic;
  difficulty: Difficulty;
  estimatedMinutes: number;
  snippet?: {
    filename: string;
    code: string;
  };
  answerMarkdown: string;
}

import { beginnerNextjsQuestions } from './nextjs-questions';
import { beginnerJavaScriptQuestions } from './javascript-questions';
import { beginnerNodeExpressQuestions } from './nodejs-questions';

const mappedNextjs: Question[] = beginnerNextjsQuestions.map(q => ({
  id: `nextjs-${q.id}`,
  category: 'Next.js' as Category,
  title: q.question,
  topic: q.topic as Topic,
  difficulty: q.level as Difficulty,
  estimatedMinutes: 5,
  answerMarkdown: q.answer
}));

const mappedJs: Question[] = beginnerJavaScriptQuestions.map(q => ({
  id: `js-${q.id}`,
  category: 'JavaScript' as Category,
  title: q.question,
  topic: q.topic as Topic,
  difficulty: q.level as Difficulty,
  estimatedMinutes: 5,
  answerMarkdown: q.answer
}));

const mappedNode: Question[] = beginnerNodeExpressQuestions.map(q => ({
  id: `node-${q.id}`,
  category: 'Node.js / Express' as Category,
  title: q.question,
  topic: q.topic as Topic,
  difficulty: q.level as Difficulty,
  estimatedMinutes: 5,
  answerMarkdown: q.answer
}));

export const coreQuestions: Question[] = [
  {
    id: "q-1-jsx-key",
    category: 'React',
    title: "What is the purpose of the 'key' prop in React lists?",
    topic: "JSX",
    difficulty: "Junior",
    estimatedMinutes: 5,
    snippet: {
      filename: "List.jsx",
      code: "items.map((item) => (\n  <ListItem key={item.id} data={item} />\n))"
    },
    answerMarkdown: "The `key` prop is a special string attribute you need to include when creating lists of elements.\n\nReact uses keys to identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. It is highly recommended to use unique IDs from your data as keys. Avoid using the array index as a key as it can lead to bugs with state and performance issues if the list order changes."
  },
  {
    id: "q-2-state-lifting",
    category: 'React',
    title: "How do you share state between two sibling components that aren't directly connected?",
    topic: "State & Props",
    difficulty: "Intermediate",
    estimatedMinutes: 7,
    snippet: {
      filename: "ParentComponent.jsx",
      code: "function Parent() {\n  const [shared, setShared] = useState('');\n\n  return (\n    <>\n      <ChildA value={shared} onChange={setShared} />\n      <ChildB value={shared} />\n    </>\n  );\n}"
    },
    answerMarkdown: "To share state between two sibling components, you use a technique called **Lifting State Up**.\n\nYou move the state to the closest common parent of both components. The parent holds the state and a function to update it. It passes the state down to one child as a prop, and passes the update function down to the other child as a prop. This establish a single source of truth for the shared data."
  },
  {
    id: "q-3-events-pooling",
    category: 'React',
    title: "SyntheticEvent Pooling in React 16 vs 17+",
    topic: "Events",
    difficulty: "Senior",
    estimatedMinutes: 8,
    answerMarkdown: "In React 16 and earlier, SyntheticEvents were **pooled**. This meant that the SyntheticEvent object would be reused and all properties would be nullified after the event callback has been invoked. You had to call `e.persist()` if you needed to access the event asynchronously.\n\nStarting with React 17, **event pooling has been removed**. You can now read event fields in asynchronous operations without needing to call `e.persist()`. This change was made to improve developer experience and reduce confusion, as modern browsers are fast enough to garbage collect event objects without performance hits."
  },
  {
    id: "q-4-hooks-useeffect",
    category: 'React',
    title: "Explain the dependency array in useEffect and what happens if you omit it.",
    topic: "Hooks",
    difficulty: "Junior",
    estimatedMinutes: 5,
    answerMarkdown: "The dependency array is the second optional argument in `useEffect`. It tells React when to re-run the effect.\n\n- **If provided (e.g., `[props.id]`):** The effect runs only when one of the dependencies has changed since the last render.\n- **If empty (`[]`):** The effect runs only once after the initial render (mounting phase).\n- **If omitted entirely:** The effect runs after *every* render of the component. This can lead to severe performance issues or infinite loops if the effect updates state without condition."
  },
  {
    id: "q-5-virtual-dom",
    category: 'React',
    title: "Explain the Virtual DOM and how React uses it for rendering.",
    topic: "Architecture",
    difficulty: "Intermediate",
    estimatedMinutes: 10,
    answerMarkdown: "The Virtual DOM is a lightweight, in-memory representation of the actual Real DOM. React uses it to optimize updates to the browser's DOM.\n\nWhen state or props change, React creates a new Virtual DOM tree. It then compares this new tree with the previous Virtual DOM tree (a process called **Reconciliation** or diffing). Next, it calculates the minimum number of changes required to update the Real DOM. Finally, it batches these changes and applies them to the Real DOM all at once, which is much more efficient than updating the DOM immediately on every change."
  },
  {
    id: "q-6-components-unmount",
    category: 'React',
    title: "How do you execute code when a component unmounts using Hooks?",
    topic: "Hooks",
    difficulty: "Junior",
    estimatedMinutes: 4,
    snippet: {
      filename: "TimerComponent.jsx",
      code: "useEffect(() => {\n  const timerId = setInterval(() => tick(), 1000);\n  \n  return () => {\n    clearInterval(timerId);\n  };\n}, []);"
    },
    answerMarkdown: "You execute cleanup code by returning a function from your `useEffect` callback.\n\nReact will run this cleanup function before the component unmounts from the DOM, and also before running the effect again on subsequent renders (if dependencies changed). This is commonly used for clearing intervals, removing event listeners, or canceling network requests to prevent memory leaks."
  },
  {
    id: "q-7-usememo-vs-usecallback",
    category: 'React',
    title: "What is the difference between useMemo and useCallback?",
    topic: "Performance",
    difficulty: "Intermediate",
    estimatedMinutes: 6,
    answerMarkdown: "Both `useMemo` and `useCallback` are used for performance optimization regarding memoization, but they memoize different things:\n\n- **`useMemo`** memoizes the **result** of a given function. It only recalculates the value when its dependencies change. Used for expensive calculations.\n- **`useCallback`** memoizes the **function itself**. It returns the same function instance across renders unless its dependencies change. Commonly used when passing callbacks to optimized child components (like `React.memo`) to prevent unnecessary re-renders."
  },
  {
    id: "q-8-react-memo",
    category: 'React',
    title: "When should you use React.memo?",
    topic: "Performance",
    difficulty: "Intermediate",
    estimatedMinutes: 7,
    answerMarkdown: "`React.memo` is a higher-order component that memoizes a rendered React component.\n\nYou should use it when a component renders often with the exact same props and its rendering logic is relatively expensive. `React.memo` does a shallow comparison of the previous and next props. If they are the same, it skips re-rendering the component and reuses the previous rendered result.\n\n**Do not use it prematurely:** Memoization comes with a small performance cost (comparisons). Using it on lightweight components or components whose props always change (like complex unmemoized objects or functions) will actually harm performance."
  },
  {
    id: "q-9-context-api",
    category: 'React',
    title: "What are the limitations of the React Context API for state management?",
    topic: "Architecture",
    difficulty: "Senior",
    estimatedMinutes: 9,
    answerMarkdown: "While excellent for dependency injection (theming, locale, auth state), Context API has limitations for high-frequency or complex state changes:\n\n1. **Over-rendering:** Any change to the Context value forces a re-render of *all* consuming components, regardless of whether they need the specific part of the state that changed. This requires careful structuring (splitting contexts).\n2. **Boilerplate and Complexity for Async:** Context doesn't naturally handle asynchronous logic, caching, or optimistic updates without significant boilerplate or combining with hooks like `useReducer`.\n3. **No DevTools Extension Integration:** Unlike Redux or Zustand, Context doesn't have powerful out-of-the-box devtools for time-travel debugging."
  },
  {
    id: "q-10-fragments",
    category: 'React',
    title: "What is a React Fragment and why use it over a <div>?",
    topic: "JSX",
    difficulty: "Junior",
    estimatedMinutes: 3,
    snippet: {
      filename: "FragmentUsage.jsx",
      code: "return (\n  <>\n    <td>Column 1</td>\n    <td>Column 2</td>\n  </>\n);"
    },
    answerMarkdown: "A `<React.Fragment>` (or the shorthand `<></>`) allows you to group a list of children without adding an extra node to the DOM.\n\nYou use it over a `<div>` because:\n1. **Cleaner DOM:** It keeps the overall DOM tree flat and smaller, improving performance.\n2. **CSS Layouts:** Using a `<div>` wrapper can break CSS layouts that depend on strict parent-child relationships (e.g., Flexbox, CSS Grid, or HTML validation rules like `<tr>` must only contain `<td>`)."
  }
];

export const curriculumQuestions: Question[] = [
  ...coreQuestions,
  ...mappedNextjs,
  ...mappedJs,
  ...mappedNode
];
