import { connect } from "react-redux";
import { addToDo } from "../actions";
import Todo from "./Todo";

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: () => {
        dispatch(addToDo("todo"));
    }
  };
};

const TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoApp;