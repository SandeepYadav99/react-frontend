import React, { Component } from "react";


class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        fetch("http://localhost:5000")
            .then(resp => resp.json())
            .then(data => {
                this.setState({ msg: data.message });
            })
    }

    onChangeHandlerNum2(e) {
        this.setState({ num2: e.target.value });
    }

    onChangeHandlerNum1(e) {
        this.setState({ num1: e.target.value });
    }

    apiCall() {
        var operationEndpoint = "http://localhost:5000/operation/sub";
        if (this.state.num1 && this.state.num2) {
            var obj = { num1: this.state.num1, num2: this.state.num2 };
            fetch(operationEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
                .then(resp => resp.json())
                .then(data => {
                    this.setState({ result: data.result });
                })
        } else {
            console.log("empty field pass");
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Home</h1>
                {this.state.msg ? <p>{this.state.msg}</p> : null}
                {this.state.result ? <h1>Result: {this.state.result}</h1> : null}

                <input type="number" name="num1" onChange={this.onChangeHandlerNum1.bind(this)} />
                <input type="number" name="num1" onChange={this.onChangeHandlerNum2.bind(this)} />
                <button onClick={this.apiCall.bind(this)}>
                    Submit
                </button>


            </React.Fragment>
        )
    }
}

export default Home;
