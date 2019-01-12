import React, { Component } from "react";
import TodoTask from './TodoTask';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  onClick = (e) => {
    e.preventDefault();
    let todo = document.getElementById("todoInput").value;
    this.props.addToDo(todo);
  }
  onFilterCompleted = () => {
    let completedList = this.state.todo.slice();
    completedList.forEach()
  }

  render() {
    //    const removeButton = <button id="removeBtn" type="button" onClick={this.onClickDelete} >x</button>
    const style = { "listStyleType": "none" };
    // const list = this.props.todo.map(todo => <li key={todo}><TodoTask todo={todo} date={"1/1/1"}></TodoTask>{removeButton}</li>);
    //    const list = this.props.todo.map((todo, index) => <li key={index}>{todo}{removeButton}</li>);
    const list = this.props.todo.map((todo, index) => <li key={index} style={style}><TodoTask todo={todo} date={"0"} index={index}></TodoTask></li>);
    return (
      <div>
        <form id="todo">
          <input type="text" placeholder="New Todo" id="todoInput"></input>
          <button id="addBttn" onClick={this.onClick}>New Todo</button>
          <button id="filterCompleted" onClick={this.onFilterCompleted}>Completed</button>
          {list}
        </form>
      </div>
    );
  }
}




export default Todo;
