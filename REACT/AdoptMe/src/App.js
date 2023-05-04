const Pet = () => {
    return React.containerElement
}


const App = () => {
        return React.CreateElement(
            "div",
            {},
            React.CreateElement("h1", {}, "Adopt Me")
        )
    }
const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.CreateElement(App))
