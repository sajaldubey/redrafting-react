class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Slot Machine APP</h1>
                <Machine />
                <Machine />
                <Machine />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))