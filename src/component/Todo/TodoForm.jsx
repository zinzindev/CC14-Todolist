import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import styles from './TodoForm.module.scss';

TodoForm.propTypes = {
	submitText: PropTypes.string.isRequired,
	onSetIsShowForm: PropTypes.func.isRequired,
	onEditTodo: PropTypes.func,
	todo: PropTypes.oneOfType([PropTypes.object]),
	setTodos: PropTypes.string,
	setFilterList: PropTypes.func
};

// TodoFrom => call in 2 Mode
// Mode-1: Add
// Mode-2: Edit
export function TodoForm({
	onSetIsShowForm,
	submitText,
	todo,
	onEditTodo,
	setTodos,
	setFilterList,
}) {
	// #1: Logic-Section
	const [task, setTask] = useState(todo?.task || '');
	const [isError, setIsError] = useState(false);

	const createTodo = async (todoObj) => {
		try {
			let response = await axios.post('http://localhost:8080/todos', todoObj);

			console.log(response.status);
			console.log(response.data);

			//respone new todo
			//setFilterLisst, setTodo
			setTodos((current) => [response.data.todo, ...current]);
			setFilterList((current) => [response.data.todo, ...current]);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// validate
		// case 1 : not-valid
		// case 2A : valid-create
		// case 2B : valid-update
		if (task.trim() === '') {
			setIsError(true);
			return;
		}
		// validate passed, execute addTodo

		// onAddTodo(task); // from <TodoContent />

		// onEditTodo(todo.id, { task: task });
		if (todo) {
			onEditTodo(todo.id, { task }); // send => 1.todoid 2.newTaskObj
		} else {
			// send axios
			let now = new Date().toISOString().slice(0, 10);
			let todoObj = { task: task, status: false, date: now };

			createTodo(todoObj); // send axios & modified internal state
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
