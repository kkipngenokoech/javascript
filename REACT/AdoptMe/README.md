# Adopt Me
## [index](./index.html)

## script section


we make an component called App.

react functional components must return a markup - `returned by React.CreateElement`

## props

these are variables that are passed from a parent component to a child component 

you pass props as an argument.

so to access the props in the child component you: `props.AttributeName`

to pass this props in the parent component where you call the component you: `<ChildComponent props.AttributeName = "attribute value" />`
## npm 

npm allows you to bring in code from the npm registry which is a bunch of open source modules that people have written so you can use them in your project.

to start an npm project in your react project you run `npm init`

for the questions you will be asked, just hit enter all up to the last one because you can always edit the [package.json](./package.json)

## prettier

this is a tool that helps you write clean code, you don't need to worry about the intedation of the code, you just run `prettier --write <path to your component>` and it will output/ write/ intend your code well.

to install prettier globally you `npm install --global prettier`

So that our tool can know this is a Prettier project, we're going to create a file called `.prettierrc` and put {} in it. This lets everyone know this is a Prettier project that uses the default configuration. You can put other configs here if you hold strong formatting opinions.

## EsLint

this is a tool that is used to enforce certain javascript code and quality

to install eslint you: `npm install --save-dev eslint` it is a development dependency tool.

to configure eslint you then need to create a `.eslintrc` file in your project level directory. inside this file you are going to write the quality of javascript code you need to be enforced.

## npm scripts

sometimes it is hard to run/remember all this commands ie `prettier --write <path to your component>`, to automate this you can write scripts for it in the [package.json](./package.json)

```javascript
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\""
},
```

this you will just be running `npm run format` and prettier will do its thing. don't forget to install prettier for development only: `npm install -D prettier` or `npm install --save-dev prettier`

With npm scripts, you can pass additional parameters to the command if you want. Just add a -- and then put whatever else you want to tack on after that. For example, if I wanted to get the debug output from ESLint, I could run npm run lint -- --debug which would translate to eslint **/*.js --debug.

## vite

Vite is a build tool for modern web applications that offers fast development server and build times. It was created to solve the slow development server and build times of the traditional bundlers like Webpack, Rollup, and Parcel.

Vite supports various web development frameworks and libraries like React, Vue.js, Svelte, and vanilla JavaScript. It also supports TypeScript, SCSS, and Less out of the box.

`npm install -D vite@3.1.4 @vitejs/plugin-react@2.1.0`  

this command  will istall two things:

1. vite is the main Vite package that you'll use to run the development server and build your application.
2. @vitejs/plugin-react is a Vite plugin that provides integration with React. It enables features like JSX, hot module replacement, and code splitting for React applications

The -D flag tells npm to install these packages as dev dependencies, which means they will be used for development and not for production.

`<script type="module" src="./App.js"></script>`
We need to add module to the script tag so that the browser knows it's working with modern browser technology that allows you in development mode to use modules directly. Instead of having to reload the whole bundle every time, your browser can just reload the JS that has changed. It allows the browser to crawl the dependency graph itself which means Vite can run lightning fast in dev mode. It will still package it up for production so we can support a range of browsers.

## install react

`npm install react react-dom`

## scripts

dev will start the devlopment server, typically on http://localhost:5173/. build will prepare static files to be deployed (to somewhere like GitHub Pages, Vercel, Netlify, AWS S3, etc.) preview lets you preview your production build locally.

## JSX

it translates html tags you write in your javascript to React.createElement calls

