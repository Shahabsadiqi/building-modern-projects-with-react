import { useDispatch } from "react-redux";
import { markTodoAsComplete, deleteTodo } from "./todoSlice";

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        // Pass the todo text to the deleteTodo action
        <button onClick={() => dispatch(deleteTodo({ text: todo.text }))}>Delete</button>
      ) : (
        // Pass the todo text to the markTodoAsComplete action
        <button onClick={() => dispatch(markTodoAsComplete({ text: todo.text }))}>Mark as Completed</button>
      )}
    </div>
  );
}
