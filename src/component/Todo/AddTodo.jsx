import { useState } from 'react';
import { TodoForm } from './TodoForm';
import styles from './AddTodo.module.scss';

export function AddTodo({ setTodos, setFilterList }) {
	// Logic & State
	const [isAddMode, setIsAddMode] = useState(false);

	const handleClikAddTasks = () => {
		setIsAddMode(true);
	};

	return (
		<>
			{!isAddMode ? (
				<div className={styles.add__todo} onClick={handleClikAddTasks}>
					<span>+</span>
					<h3>Add Task</h3>
				</div>
			) : (
				<TodoForm
					submitText={'Added task'}
					onSetIsShowForm={setIsAddMode}
					setTodos={setTodos}
					setFilterList={setFilterList}
				/>
			)}
		</>
	);
}
