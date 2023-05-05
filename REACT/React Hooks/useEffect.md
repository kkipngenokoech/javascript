# UseEffect

this is a react hook that allows you to perform side effects to your components.

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

