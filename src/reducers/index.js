import { ADDTODO, REMOVETODO } from "../actions";

// initialize default state
const initialState = {
  todo: []
};

// create reducer function

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return Object.assign({}, state, {
        todo: [
          ...state.todo,
          {todo: action.todo, isCompleted: false}
        ]
      });
    case REMOVETODO:
      this.setState({
        isComplete: !this.state.isComplete
      })
    default:
      return state;
  }
};