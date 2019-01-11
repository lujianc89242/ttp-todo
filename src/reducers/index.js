import { ADDTODO } from "../actions";

// initialize default state
const initialState = {
  todo: []
};

// create reducer function

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
        let todo = document.getElementById("todoInput").value;
        console.log(todo);

      return Object.assign({}, state, {
        todo:[
            ...state.todo,
            todo
        ]  
      });
    
    default:
      return state;
  }
};