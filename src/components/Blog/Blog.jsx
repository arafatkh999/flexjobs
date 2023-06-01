import React from 'react';

const Blog = () => {
    return (
        <div className='mb-12'>
                            <section>
                            <div className="chat chat-start">
                <div className="chat-bubble">When should you use context API?</div>
                </div>
                <div className="chat chat-end">
                <div className="chat-bubble">The Context API in React is used to manage state that needs to be shared between components in a hierarchical manner. It allows you to avoid prop drilling, where you need to pass down props through several layers of components to reach a child component that needs the information. <br /> <br />

You should use Context API in React when: <br /> <br />

1. You have a need to share state between multiple components that are not directly related to each other in the component tree. <br />

2. You have a need to share state that is read-only (can only be changed by the component that created it) or if you want to prevent certain components from changing the state. <br />

3. You have a need to provide a global configuration or theme to your application. <br />

4. You want to avoid prop drilling and make your code cleaner and easier to maintain. <br />

<br /> However, it's important to note that using Context API for everything can lead to complex and difficult-to-maintain code. It's best to use it when it makes sense for your specific use case.</div>
                </div>
                            </section>

                            <section>
                            <div className="chat chat-start">
  <div className="chat-bubble">What is a custom hook?</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble">Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks. <br /><br />

A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components: <br /><br />

1. A custom hook does not require a specific signature. <br />
2. A software developer can choose what argument the custom hook has and what should the argument return. <br />
3. A custom hook always starts with the name ‘use’.</div>
</div>
                            </section>

                            <section>
                            <div className="chat chat-start">
  <div className="chat-bubble">What is useRef?</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble">In React, useRef is a hook that allows you to create a mutable reference that persists across re-renders of a component. useRef returns a mutable ref object which has a current property. You can set the current property to any value, and it will persist throughout the lifetime of the component. <br /><br />

One common use case for useRef is to reference DOM elements or other values that may change over time. Since the ref object persists across re-renders, it can be used to store a reference to a DOM element that needs to be accessed by multiple functions or event handlers.</div>
</div>
                            </section>

                            <section>
                            <div className="chat chat-start">
  <div className="chat-bubble"> What is useMemo?</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble">In React, useMemo is a hook that memoizes a function, allowing you to avoid unnecessary re-computations of its result. It takes two arguments: a function that returns a value, and an array of dependencies that trigger the re-computation when changed. <br /> <br />

The purpose of useMemo is to optimize performance by avoiding expensive calculations that may be needed by a component but only when certain dependencies have changed. By memoizing the function, React can avoid re-computing the value if the dependencies have not changed.</div>
</div>
                            </section>

        </div>

        
    );
};

export default Blog;