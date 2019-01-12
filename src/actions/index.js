/* Namespace Actions aka Action Types */
export const ADDTODO = "ADDTODO";
export const REMOVETODO = "REMOVETODO";

/* Todo Action Creators */
export const addToDo = (todo) => ({ type: ADDTODO, todo});
export const removeToDo = () => ({ type: REMOVETODO });

