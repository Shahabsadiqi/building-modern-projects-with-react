import "./App.css"
import { useState } from 'react'
import TodoList from './todoList'


function App() {
  const [complatedTodos, setComplatedTodos] = useState([
    { text: "a new cloths", isCompleted: true },
    { text: "a new shose", isCompleted: true }
  ]);
  const [inComplatedTodos, setinComplatedTodos] = useState([
    { text: "a new pate", isCompleted: false }
  ]);

  function MarkTodoAsCompleted(text){
    setinComplatedTodos(inComplatedTodos.filter(t => t.text !== text));
    setComplatedTodos([...complatedTodos, {...inComplatedTodos.find(t => t.text ===text), isCompleted : true}]);
  }

  function DeleteTodo(text){
    setComplatedTodos(complatedTodos.filter(t => t.text !== text));
  }

  function createTodo(text){
    setinComplatedTodos([...inComplatedTodos, {text, isCompleted : false}])
  }

  return (
    <>
      <TodoList complatedTodos={complatedTodos} 
      incompletedTodos={inComplatedTodos}
      onCompletedClicked={MarkTodoAsCompleted}
      onDeletedClicked={DeleteTodo} 
      onCreateClicked={createTodo}/>
    </>
  )
}

export default App
