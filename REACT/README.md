# REACT

when you export a component as  a default, you are going to import it using the name you used to export it  but if not, you will need to wrap the component using curly brackets

If you export multiple components, you have to import them inside of curly brackets.

## class components and functional components

there are two ways of defining components in react:

1. class 
2. function

functional component is the latest preferred component declaration method.

with functional components :

1. we don't have to immport and extend 'Component' from React
2. we don't need a constructor
3. we don't need a render function, we just use a return function

## props

unlike class components, we don't pass props as an argument to the constructor, but instead pass it as an argument to the component itself.

to access this passed props, we are going to `props.functions`.

```javascript
function Component(props) {
    return (
        <div>
            {props.title}
        </div>
    )
}
export default Component

// in app.js

function App (){
    return (
        <div>
            <Component title="Hello Multiverse"/>
        </div>
    )
}
```

to create a react application, you use `npx create-react-app reactApp`

this will create a couple of react application files, two of the most important ones are:

1. index.js - this is the entry point to our application

## states

state in react is what we use to handle values that can change over time, states in react are immmutable and so we cannot/never change state directly, that's why we use functions: `const [update, setUpdate] = useState()`

states are pretty useful elements in react applications.

