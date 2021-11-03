import React, {useState , useEffect} from 'react'
import Form from './components/formsTodo';
import TodoList from './components/todoList';
import './App.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap" rel="stylesheet"></link> */}

function App() {
  const [inputText , setInputText] = useState("");
  const [todos , setTodos]= useState([]);
  const [status , setStatus] = useState('all');
  const [filteredTodos , setFilteredTodos] = useState([]);
  const [darkMode , setDarkMode]=useState ('enable Dark Mode');

  
  // const FilteredTodosHandler = () => {
  //   switch (status)
  //   {
  //     case "completed" :
  //       setFilteredTodos (todos.filter (todo => todos.completed === true));
  //       break;
  //       case "uncompleted" :
  //         setFilteredTodos (todos.filter (todo => todos.completed === false));
  //         break;
  //         default :
  //         setFilteredTodos (todos);
  //         break;
  //       }
        
  //     }


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

      const darkmodeHandler = () =>{
          if({darkMode} === 'enable dark mode')
          setDarkMode('enable light mode');
          else
          setDarkMode('enable dark mode');
      }


      return (
    <div className="App">
      <div className="darkmode">
        <button onClick={darkmodeHandler} className="btn dark-btn">{darkMode} </button>
      </div>
      <header>
        <h1>The ToDo List</h1>
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
