/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import "./App.css"
import data from './data.json'
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";


function App() {

  // permite inicializar y cambiar una determinada informacion o state relacionada al componetne
  // primer parametro: el elemento a utilizar, segundo parametro es el setter de dicho elemento
  const [todos, setTodos] = useState(data); // el valor pasado por paramtero es el valor por defecto que se le da al state (a todos)
  
  const onComplete = (id) => {
    console.log("task", id);   
    // con ...todo se crea una copia del objeto original y en segunda instancia se va a actualizar el valor de la propiedad completed cuyo valor es true
    
    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo}; 
    }))
  }

  const onDeleteItem = (id) => {
    console.log("delete", id);   

    // filtramos los todo que tengan un id distinto al pasado por parametro 
    setTodos([...todos].filter(todo => todo.id !== Number(id)))
  }

  const addTodo = (newTodo) => {
    console.log("new todo", newTodo);
    let newItem = {id: +new Date(), task: newTodo, completed: false};
    setTodos([...todos, newItem]) // se le pasa una copia de todos los todos que hay + el extra que se agrega  
  }

  return (
    <div className="container">
      <TodoAdd addTodo = {addTodo}/>
      <TodoList todos = {todos} onComplete = {onComplete} onDeleteItem = {onDeleteItem} />
    </div>
  );
}

export default App;
