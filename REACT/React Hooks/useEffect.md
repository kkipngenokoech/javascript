# UseEffect

this is a react hook that allows you to perform side effects to your components.

what ComponentDidMount, ComponentWillMount and ComponentDidUpdate did for class components is what we shall do with useEffect hook

some side effects are:

1. fetching data
2. directly updating DOM
3. timers

useEffects accepts two arguments:

1. a function that will be executed after every render - this function is the side effect itself
2. an optional array of dependencies which tells react when to rerun the effect
3. If the dependencies change between renders, React will re-run the effect. If the dependencies don't change, React will skip the effect. If the dependencies array is empty, the effect will only run once when the component mounts.

this use effect normally runs after the initial render.

then before you unmount/unrender it runs a function that will remove the properties added during the render.

## useEffect syntax

this is the syntax:

`useEffect(()=> {}, [])`

you write the code that will be executed in the curly braces

the array at the end is optional - it is used to list a dependency array

A dependency is any state, prop or context that is used within the useEffect callback, but you can also include state or props that are not. useEffect will trigger based on changes in the dependencies listed. 

options for depedency array:

1. leave it blank/empty - ComponentDidMount - the hook will run only one time when component mounts
2. add a dependecy to the array - ComponentDidUpdate - the hook will run every time the component dependecy updates
3. leave out the dependecy array - the useEffect hooks run anytime the component This way, the useEffect hook runs anytime the component is updated, AND right after the initial render. -  it combines bot ComponentDidMount and ComponentDidUpdate

the `return () => {}` statement we normally add in every other UseEffect hook is equivalent to ComponentWillUnmount