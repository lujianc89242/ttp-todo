import React, {Component} from "react";

class TodoTask extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: '',
            isComplete: false,
            date: ''
        }
    }

    render(){
        const list = this.props.todo.map(todo => <li key={todo}>{todo}</li>);
        
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TodoTask;