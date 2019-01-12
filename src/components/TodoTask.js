import React, { Component } from "react";

class TodoTask extends Component {
    constructor(props) {
        super(props);

        let date = new Date();
        let timestamp = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

        this.state = {
            text: this.props.todo,
            isComplete: false,
            date: timestamp
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.state.text} {this.state.date}
                </div>
            </div>
        );
    }
}

export default TodoTask;