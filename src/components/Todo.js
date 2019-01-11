import React, {Component} from "react";

class Todo extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  onClick = (e) => {
    e.preventDefault();
    let todo = document.getElementById("todoInput").value;
    this.props.addToDo();
    
  }

  render(){

    return(
      <div>
        <form id="todo">
            <input type="text" placeholder="New Todo" id="todoInput"></input>
            <button id="addBttn" onClick={this.onClick}>New Todo</button>
        </form>
      </div>
    );
  }
}

/*
const Todo = ({ addToDo }) => (
    <div>
       <form id="todo">
            <input type="text" placeholder="New Todo" id="todoInput"></input>
            <button id="addBttn" onClick={addToDo} type="button">New Todo</button>
        </form>
    </div>
  );
*/


export default Todo;
