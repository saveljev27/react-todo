import { RiRefreshLine } from 'react-icons/ri'
import { TbTrashX } from 'react-icons/tb'
import styles from './TodosActions.module.css'
import Button from '../UI/Button'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <TbTrashX />
      </Button>
    </div>
  )
}

export default TodosActions
