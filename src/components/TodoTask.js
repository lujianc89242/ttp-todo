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

    onClickDelete = () => {
        this.setState({
            isComplete: !this.state.isComplete
        })
    }

    render() {
        const removeButton = <button id="removeBtn" type="button" onClick={this.onClickDelete} >x</button>;
        if (!this.state.isComplete) return (<div> {this.state.text} {this.state.date} {removeButton}</div>);
        else return (<div></div>);
        /*      
              return (
                  <div>
                      <div className="container">
                          {this.state.text} {this.state.date} {removeButton}
                      </div>
                  </div>
              );
              */
    }
}

export default TodoTask;