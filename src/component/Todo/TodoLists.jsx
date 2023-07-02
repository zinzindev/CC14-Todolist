import { TodoItems } from './TodoItems';

export function TodoLists({ todos, onEditTodo, onDeleteTodo }) {
	return (
		<ul>
			{todos.map((todoObj) => (
				<TodoItems key={todoObj.id} todo={todoObj} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo} />
			))}
		</ul>
	);
}
