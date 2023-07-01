import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import styles from './TodoItems.module.scss';
import { TodoForm } from './TodoForm';

export function TodoItems({ todo, onEditTodo }) {
	// State, Logic
	//  Check === Done === todo.status == true
	const [isCheck, setIsCheck] = useState(todo.status);
	const [isEdit, setIsEdit] = useState(false);

	const handleToggleCheck = () => setIsCheck(!isCheck);

	const handleOpenEditMode = () => {
		setIsEdit(true);
		console.log(todo.id);
	};

	const handleDeleateTodo = () => console.log('Deleting');

	let checkboxStyle = isCheck
		? styles.checkbox__icon__done
		: styles.checkbox__icon;
	let taskStyle = isCheck ? styles.done : '';

	return (
		<>
			{!isEdit ? (
				<li className={styles.todo__item__container}>
					<div
						className={styles.checkbox__container}
						onClick={handleToggleCheck}
					>
						<HiCheck className={checkboxStyle} />
					</div>

					<p className={taskStyle} onClick={handleOpenEditMode}>
						{todo.task}
					</p>

					<div
						className={styles.edit__icon}
						onClick={handleOpenEditMode}
					>
						<HiPencil />
					</div>

					<div
						className={styles.delete__icon}
						onClick={handleDeleateTodo}
					>
						<HiTrash />
					</div>
				</li>
			) : (
				<TodoForm
					submitText={'Edited task'}
					onSetIsShowForm={setIsEdit}
					// oldTask={todo.task}
					onEditTodo={onEditTodo}
					todo={todo}
				/>
			)}
		</>
	);
}
