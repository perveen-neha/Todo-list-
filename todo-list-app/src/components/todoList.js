import React from 'react';
import ToDo from './Todo'

const TodoList = ({todos , setTodos , filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                  {       filteredTodos.map((todo) => (
                    <ToDo setTodos= {setTodos} todos={todos} key={todo.id} text= {todo.text}  todo={todo} />
                ))}
            </ul>
        </div>
    );
};
 
export default TodoList;