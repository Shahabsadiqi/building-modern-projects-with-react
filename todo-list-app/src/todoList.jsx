import NewTodoItem from "./newTodoItem";
import TodoListItem from "./todoListItem";

export default function TodoList({complatedTodos , incompletedTodos , onCompletedClicked , onDeletedClicked, onCreateClicked }){
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoItem onCreateClicked={onCreateClicked}/>
      <h3>Completed Todos</h3>
      {complatedTodos.map((todo , index) => (
        <TodoListItem todo={todo} key={index} onDeletedClicked={onDeletedClicked} />
      ))}
      <h3>Incompleted Todos</h3>
      {incompletedTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} onCompletedClicked={onCompletedClicked}/>
      ))}
    </div>
  )
}