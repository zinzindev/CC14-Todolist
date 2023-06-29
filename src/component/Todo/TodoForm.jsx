import { useState } from 'react';
import styles from './TodoForm.module.scss';

export function TodoForm({ onSetIsShowForm, submitText, oldTask }) {
	// #1: Logic-Section
	const [task, setTask] = useState(oldTask || '');
	const [isError, setIsError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// validate
		if (task.trim() === '') {
			setIsError(true);
			return;
		}

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
			<input
				className={styles.todo__form__input}
				placeholder='Task Name'
				value={task}
				onChange={handleChange}
			/>
			<div className={styles.todo__form__footer}>
				{isError && (
					<p className={styles.todo__error}>Task Name is required</p>
				)}
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
