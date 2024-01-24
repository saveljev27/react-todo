import Todo from './Todo'
import styles from './TodoList.module.css'
function TodoList({ todos, deleteTodo, toogleTodo, completedTodos }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toogleTodo={toogleTodo}
        />
      ))}
      {todos.length == 0 ? (
        <p>No active tasks</p>
      ) : (
        <p>Active tasks: {todos.length}</p>
      )}
      {completedTodos > 0 && (
        <p>{`You have completed: ${completedTodos} ${
          completedTodos > 1 ? 'tasks' : 'task'
        }`}</p>
      )}
    </div>
  )
}

export default TodoList
