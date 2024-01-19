import type { ToDo } from '../store/types';
import { useAppDispatch } from '../hooks/hooks';
import { deleteToDo, toggleTodoComplete } from '../store/todoSlice'

import styles from '../App.module.scss'

export default function TodoItem({ id, text, completed }:ToDo) {
  const dispatch = useAppDispatch()

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({id}))} />
      <span className={styles.text}>{text}</span>
      <span className={styles.delete} onClick={() => dispatch(deleteToDo({id}))}>&times;</span>
    </li>
  )
}


