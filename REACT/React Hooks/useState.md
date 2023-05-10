# Use State ()

this hook enables us to add state in functional components.

`const [state, updateState] = useState()`

Additionally, setting the state calls a re-render. That’s the reason we see the new state when clicking the button. If it wouldn’t trigger a re-render then we would still see the old state. Our component will update after setting the state