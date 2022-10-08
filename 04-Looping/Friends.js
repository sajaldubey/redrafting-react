class Friends extends React.Component {
  // object destructuring
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h1>coming from Friends component</h1>
        <p>{name}'s hobies are -</p>
        <ul>
          {hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}
