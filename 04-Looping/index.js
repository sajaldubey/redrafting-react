class App extends React.Component {
  render() {
    return (
      <>
        <h1>coming from index.js file</h1>
        <Friends
          name="Sajal"
          hobbies={["singing", "gaming", "keyboard collector"]}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
