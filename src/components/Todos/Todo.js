import { RiTodoFill } from 'react-icons/ri'
import { TbTrashX } from 'react-icons/tb'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toogleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toogleTodo(todo.id)}
      />
      <TbTrashX
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
