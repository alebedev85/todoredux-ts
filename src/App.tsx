import React from 'react';
import { useState } from 'react';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { useAppDispatch } from './hooks/hooks';
import { addToDo } from './store/todoSlice'
import styles from './App.module.scss';

function App() {
  const [text, setText] = useState('')

  const dispatch = useAppDispatch()
  const addTask = () => {
    dispatch(addToDo({ text }))
    setText('')
  }

  return (
    <div className={styles.app}>
      <InputField
        text={text}
        setText={setText}
        handleSubmit={addTask}
      />

      <TodoList />

    </div>
  );
}

export default App;
