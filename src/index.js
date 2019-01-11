import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import TodoApp from './components/todoApp'
import { createStore } from "redux";
import { Provider } from "react-redux";
import todo from "./reducers";

const store = createStore(todo);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root'));
