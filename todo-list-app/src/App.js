import React, {useState , useEffect} from 'react'
import Form from './components/formsTodo';
import TodoList from './components/todoList';
import './App.css'

function App() {
  const [inputText , setInputText] = useState("");
  const [todos , setTodos]= useState([]);
  const [status , setStatus] = useState('all');
  const [filteredTodos , setFilteredTodos] = useState([]);
  const [DarkMode, setDarkMode] = useState(true);
      useEffect (() => {
         const FilteredTodosHandler = () => {
    switch (status)
    {
      case "completed" :
        setFilteredTodos (todos.filter (todo => todo.completed === true));
        break;
        case "uncompleted" :
          setFilteredTodos (todos.filter (todo => todo.completed === false));
          break;
          default:
          setFilteredTodos (todos);
          break;
        }
        
      }
      FilteredTodosHandler();

      }, [todos , status] )



      return (
   <div className=
   {`${DarkMode} ? 'App AppDM' : 'App' `}
   >
      
      <header>
        <h1 >The ToDo List</h1>
      </header>
      <Form
       todos={todos} 
       setTodos={setTodos} 
       inputText={inputText} 
       setInputText={setInputText}
       setStatus = {setStatus}
       
       />

      <TodoList 
      setTodos={setTodos} 
      todos={todos} 
      filteredTodos = {filteredTodos}
     

      />
    </div>
  );
}

export default App;
