function Pet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1> Adopt Me</h1>
      <Pet name="jimmy" animal="Dog" breed="Havanesse" />
      <Pet />
      <Pet />
    </div>
  );
}
// const container = document.getElementById("root")
// const root = ReactDOM.createRoot(container)
// root.render(<App />)

ReactDOM.render(<App />, document.getElementById("root"));
