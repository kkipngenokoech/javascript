# HANDLING USER INPUTS

if we have rendered forms to users or something that requires the user to enter some inputs, we need a way to be able to capture this user inputs so that we can store them or before some action to it.

under this section we are going to learn how to handle this inputs.


## listening to submit events on forms

one thing we can do is listen to submit events on forms:

```javascript
...
<form onSubmit={event => {
    event.preventDefault()
    functionToActionEvent()
    }}>
    // your form logic goes in here...
</form>
...
```