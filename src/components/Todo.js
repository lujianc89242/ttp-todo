import React, {Component} from "react";
import TodoTask from './TodoTask';

class Todo extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  onClick = (e) => {
    e.preventDefault();
    let todo = document.getElementById("todoInput").value;
    this.props.addToDo(todo);
  }

  render(){
    const removeButton = <button id="removeBtn" type="button">x</button>
    const list = this.props.todo.map(todo => <li key={todo}>{todo}{removeButton}</li>);
    return(
      <div>
        <form id="todo">
            <input type="text" placeholder="New Todo" id="todoInput"></input>
            <button id="addBttn" onClick={this.onClick}>New Todo</button>
            {list}
        </form>
      </div>
    );
  }
}




export default Todo;
