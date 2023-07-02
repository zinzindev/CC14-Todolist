import { useState } from 'react';
import styles from './TodoForm.module.scss';

export function TodoForm({ onSetIsShowForm, submitText, todo, onAddTodo, onEditTodo }) {
	// #1: Logic-Section
	/* The line `const [task, setTask] = useState(todo?.task || '');` is using the `useState` hook to
	create a state variable called `task` and a corresponding setter function called `setTask`. The
	initial value of `task` is set to `todo?.task` if it exists, otherwise it is set to an empty string
	(`''`). */
	const [task, setTask] = useState(todo?.task || '');
	const [isError, setIsError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		// validate
		// case 1 : not-valid
		// case 2A : valid-create
		// case 2B : valid-update
		if (task.trim() === '') {
			setIsError(true);
			return;}
		// validate passed, execute addTodo

		// onAddTodo(task); // from <TodoContent />

		// onEditTodo(todo.id, { task: task });
		if (todo) onEditTodo(todo.id, { task }); // send => 1.todoid 2.newTaskObj
		else onAddTodo(task);

		// จบ AddMode
		onSetIsShowForm(false);
	};
	const handleClickCancel = () => {
		onSetIsShowForm(false);
	};

	const handleChange = (e) => {
		setIsError(false);
		setTask(e.target.value);
	};

	// #2: UI-Section
	return (
		<form className={styles.todo__form__container} onSubmit={handleSubmit}>
			<input className={styles.todo__form__input} placeholder='Task Name' value={task} onChange={handleChange} />
			<div className={styles.todo__form__footer}>
				{isError && <p className={styles.todo__error}>Task Name is required</p>}
				<div className={styles.todo__form__buttons}>
					<button type='button' onClick={handleClickCancel}>
						Cancel
					</button>
					<button type='submit'>{submitText}</button>
				</div>
			</div>
		</form>
	);
}
