import { connect } from "react-redux";
import { addToDo, removeToDo } from "../actions";
import Todo from "./Todo";

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: (todo) => {
        dispatch(addToDo(todo));
    },
    removeToDo: () => {
        dispatch(removeToDo());
    }
   
  };
};

const TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoApp;