class App extends React.Component{
    render(){
        return(
            <NumPicker to="Sajal" count={3} />
        );
    }

}

ReactDOM.render(<App/>, document.getElementById("root"));