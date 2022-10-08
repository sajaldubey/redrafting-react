class Hello extends React.Component {
  static defaultProps = {
    from: "Secret Agent",
  };
  render() {
    return (
      <>
        <p>coming from Hello component</p>
        <p> this message is from {this.props.from}</p>
      </>
    );
  }
}
