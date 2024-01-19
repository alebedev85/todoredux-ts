import TodoItem from './TodoItem'
import { useAppSelector } from '../hooks/hooks'
import styles from '../App.module.scss'

export default function TodoList() {
  const todos = useAppSelector(state => state.todos.todos)

  return (
    <ul className={`${styles.list} list`}>
      {todos.map(todo =>
        <TodoItem key={todo.id} {...todo} />
      )}
    </ul>
  )
}

