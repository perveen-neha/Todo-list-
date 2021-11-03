import React from 'react';

const ToDo = ({text, todos, setTodos,todo}) => {

    const deleteHandler = () => {
            setTodos(todos.filter ((el) => el.id !== todo.id ));
            
    };

    const completeHandler =() => {
        setTodos (todos.map ((item => {
            if(item.id === todo.id)
            {
                return { ...item , completed: !item.completed}
            }
            return item;
        })));
    };

    return (
        <div className="todo">
            {/* <li  className={`todo-item ${todo.completed ? "completed" : ""} `}>{text} </li> */}
            <li style={{textDecoration: todo.completed ? "line-through" : "none" , opacity: todo.completed ? 0.5 : 1}} className="todo-item" >{text} </li>
            
            <button onClick={completeHandler} className="btn complete-btn">COMPLETE</button>
            <button onClick={deleteHandler} className="btn delete-btn">DELETE</button>
        </div>
    );
};

export default ToDo;