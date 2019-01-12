import React, { Component } from "react";
import TodoTask from './TodoTask';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCompleted: false 
    }
  }

  onClick = (e) => {
    e.preventDefault();
    let todo = document.getElementById("todoInput").value;
    this.props.addToDo(todo);
  }
  onFilterCompleted = (e) => {
    e.preventDefault();
    this.setState({filterCompleted: !this.state.filterCompleted});
  }


  render() {
    //    const removeButton = <button id="removeBtn" type="button" onClick={this.onClickDelete} >x</button>
    const style = { "listStyleType": "none" };
    // const list = this.props.todo.map(todo => <li key={todo}><TodoTask todo={todo} date={"1/1/1"}></TodoTask>{removeButton}</li>);
    //    const list = this.props.todo.map((todo, index) => <li key={index}>{todo}{removeButton}</li>);
    let list;
    if (!this.state.filterCompleted)
      list = this.props.todo.map((todo, index) => <li key={index} style={style} ><TodoTask todo={todo} date={"0"} index={index} filtercompleted={false}></TodoTask></li>);
    else 
      list = this.props.todo.map((todo, index) => <li key={index} style={style} ><TodoTask todo={todo} date={"0"} index={index} filtercompleted={true}></TodoTask></li>);

    return (
      <div>
        <form id="todo">
          <h1>TODO</h1>
          <input type="text" placeholder="New Todo" id="todoInput"></input>
          <button id="addBttn" onClick={this.onClick}>New Todo</button>
          <button id="filterCompleted" onClick={this.onFilterCompleted}> {this.state.filterCompleted && "In Progress"} {!this.state.filterCompleted && "Completed"}</button>
          <h1>Filter: {!this.state.filterCompleted && "In progress"} {this.state.filterCompleted && "Completed"}</h1>
          {list}
        </form>
      </div>
    );
  }
}




export default Todo;
