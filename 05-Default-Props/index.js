class App extends React.Component {
  render() {
    return (
      <>
        <h1> This is default prop's App Component</h1>
        <Hello from="Sajal" />
        <Hello />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
