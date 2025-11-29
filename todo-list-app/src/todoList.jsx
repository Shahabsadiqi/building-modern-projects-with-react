import { useSelector } from "react-redux";
import NewTodoItem from "./newTodoItem";
import TodoListItem from "./todoListItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.value);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoItem />
      <h3>Completed Todos</h3>
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
        />
      ))}
      <h3>Incompleted Todos</h3>
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
        />
      ))}
    </div>
  );
}
