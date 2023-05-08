# REACT ROUTER

this is a popular library for routing in a react application  - it helps in determining which component should be rendered based on the current url

to use react router we are going to: `npm install react-router-dom`

we wrap our app.js with a browserrouter and the individual routes with routes:

```javascript
import { BrowserRouter, Routes, Route} from 'react-router-dom'
<BrowseRouter>
    <Routes>
        <Route path="url route to this component" element = "component to be displayed"/>
    </Routes>
</BrowseRouter>
```