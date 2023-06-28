import styles from './AddTodo.module.scss';
import { TodoForm } from './TodoForm';


export function AddTodo() {
	return (
		<>
			{/* Add Todo */}
			<div className={styles.add__todo}>
				<span>+</span>
				<h3>Add Task</h3>
			</div>

			{/* Todo Form */}
			<TodoForm />
		</>
	);
}
