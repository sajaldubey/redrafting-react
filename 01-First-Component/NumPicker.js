function getNum(){
    return Math.floor(Math.random() * 10);
}

class NumPicker extends React.Component{
    render(){
        console.log(this.props.to);
        console.log(this.props.count);
        let bangs = this.props.count;
        return (
            <div>
                <p>{this.props.to}</p>
                <h1>Your number is {getNum()}</h1>
                <p>{bangs}</p>
            </div>
        );
    }
}
