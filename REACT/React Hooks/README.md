# REACT HOOKS

this allows  functional components to have statefu; logic and access to React lifecycle methods.

prior to hooks, stateful logic and lifecycle methods were only available to class components.

## built-in react hooks

1. useState
2. useEffect
3. useContext
4. useReducer
5. useCallback
6. useMemo
7. useRef

## USE STATE

this is used to create and update state values

`const [count, setCount] = useState(0)`

count is a variable that holds the current value of the state

setCount is a variable that is used to update the state

useState creates the state resources and sets the value of the state to zero.

`setCount(1)`

this then is used to update the state of the application.

useState returns an array with two values.

the current value of that state and a function to update that state. We're using a feature of JavaScript called destructuring to get both of those things out of the array.


