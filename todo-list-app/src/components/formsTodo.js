import React from "react";
import TodoList from "./todoList";

const Form = (props) => {
  // here i can write Javascript code and function
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    props.setInputText("");
  };

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <div className="input">
        <input
          value={props.inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button onClick={submitTodoHandler} className="submit">
         +
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">all</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
