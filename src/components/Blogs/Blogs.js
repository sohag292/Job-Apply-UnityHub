import React from 'react'

export default function Blogs() {
  return (
    <div className='container'>
      <h1 className='text-center pt-5 mb-4'>Blogs</h1>
      <h3>1. When should you use context API?</h3>
      <p>Ans: The Context API in React is used to share data between components without having to pass props through every level of the component tree. It allows  to create a context object that holds the data you want to share, and any component can access that data by "subscribing" to the context using the useContext hook. This makes your code more efficient and easier to manage.</p>  
      <h3>2. What is a custom hook?</h3>
      <p>Ans: A custom hook is a function in React that allows you to reuse common logic across multiple components in your application. It helps to avoid code duplication, create reusable and composable code, and make your codebase more maintainable. </p> 
      <h3>3. What is useRef?</h3>
      <p>Ans: useRef is a hook in React that allows functional components to store mutable values that persist across component renderings. It provides an object with a current property that can be used to store and access a mutable value. This value can be updated without causing a component re-render.</p> 
      <h3>4. What is useMemo?</h3>
      <p>Ans: useMemo is a hook in React that optimizes the performance of functional components by memoizing the results of expensive calculations. It works by computing a memoized value only when one of its dependencies changes. This helps avoid the unnecessary repetition of expensive calculations on each component render, making your code more efficient. </p> 

    </div>
  )
}
