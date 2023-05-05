# REACT DEV TOOLS

React has some really great tools to enhance your developer experience.

## NODE_ENV = development

React already has a lot of developer conveniences built into it out of the box. What's better is that they automatically strip it out when you compile your code for production.

So how do you get the debugging conveniences then? Well, if you're using Vite.js, it will compile your development server with an environment variable of NODE_ENV=development and then when you run vite build it will automatically change that to NODE_ENV=production which is how all the extra weight gets stripped out.

## STRICT MODE

React has a new strict mode. If you wrap your app in `<React.StrictMode></React.StrictMode>` it will give you additional warnings about things you shouldn't be doing. I'm not teaching you anything that would trip warnings from React.StrictMode but it's good to keep your team in line and not using legacy features or things that will be soon be deprecated.

## DEV TOOLS

They let you do several things like explore your React app like a DOM tree, modify state and props on the fly to test things out, tease out performance problems, and programtically manipulate components

