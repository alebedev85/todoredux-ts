import styles from '../App.module.scss'

type InputFieldProps = {
  text: string;
  setText: (value: string) => void;
  handleSubmit: () => void;
}

export default function InputField({ text, setText, handleSubmit }: InputFieldProps) {
  return (
    <label>
      <input placeholder='new todo' value={text} onChange={(e) => setText(e.target.value)}></input>
      <button className={styles.button} onClick={handleSubmit}>Add</button>
    </label>
  )
}

