# REACT HOOKS

this allows  functional components to have statefu; logic and access to React lifecycle methods.

## lifecycle methods

these are special methodds built into react

they are used to operate on components throughout their duration in the DOM

the render method is one of them.

lifecycle methods can only be used in class components that is why we have not implemented render in any functional component.

### examples of lifecycle methods

1. creation of a component - ComponentDidMount
2. render of a component - render
3. update of a component - ComponentDidUpdate
4. Death of a component - ComponentWillUnmount

A component can be in different states of its 'life', and in react we can use those states to handle certain tasks

#### componenDidMount

this is ran when the component is added/inserted into the DOM

activities carried out include:

1. connecting to web apis or javascript frameworks
2. set Timers using setTimeout and setInterval
3. add event listeners

#### Render

the render state contains all the logic for our site/component that should be displayed in to the screen

#### ComponentDidUpdate

this method is not called in the initial render

This method is a great place to work and operate on the DOM when the component has updated. It is also useful to send network requests when specific conditions are met. For example, if a user changed accounts, we could now fetch the data for that new account during this lifecycle method.

#### ComponentWillUnmount

this lifecycle method will be called when the component is to be removed from the DOM

this normally involves cleanup tasks:

1. removing event listeners
2. cancelling network requests
3. other cleanup tasks

prior to hooks, stateful logic and lifecycle methods were only available to class components.

## built-in react hooks

1. useState
2. useEffect
3. useContext
4. useReducer
5. useCallback
6. useMemo
7. useRef

one can always make his/her own custom hooks

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

