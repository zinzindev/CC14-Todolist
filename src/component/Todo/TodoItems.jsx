import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { TodoForm } from './TodoForm';
import { getFormatDate } from '../../utils/DateUtils';
import styles from './TodoItems.module.scss';

export function TodoItems({ todo, onEditTodo, onDeleteTodo }) {
	// State, Logic
	//  Check === Done === todo.status == true
	const [isEdit, setIsEdit] = useState(false);

	const handleToggleCheck = () => {
		onEditTodo(todo.id, { status: !todo.status }); // handleEditTodo(todo.id, { status: !todo.status })
	};

	const handleOpenEditMode = () => {
		setIsEdit(true);
		console.log(todo.id);
	};

	const handleDeleateTodo = () => onDeleteTodo(todo.id);

	let checkboxStyle = todo.status ? styles.checkbox__icon__done : styles.checkbox__icon;
	let taskStyle = todo.status ? styles.done : '';

	return (
		<>
			{!isEdit ? (
				<li className={styles.todo__item__container}>
					<div className={styles.checkbox__container} onClick={handleToggleCheck}>
						<HiCheck className={checkboxStyle} />
					</div>

					<p className={taskStyle} onClick={handleOpenEditMode}>
						{todo.task}
					</p>

					{/* <p>{todo.due_date}</p> */}
					<span className={styles.date__text}>{getFormatDate(todo.date)}</span>

					<div className={styles.edit__icon} onClick={handleOpenEditMode}>
						<HiPencil />
					</div>

					<div className={styles.delete__icon} onClick={handleDeleateTodo}>
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
