/* Namespace Actions aka Action Types */
export const ADDTODO = "ADDTODO";




/* Todo Action Creators */
export const addToDo = (todo="aToDo") => ({ type: ADDTODO, todo});
