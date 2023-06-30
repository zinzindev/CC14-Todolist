import { TodoItems } from './TodoItems';

export function TodoLists({ todos }) {
	return (
		<ul>
			{todos.map((todoObj) => (
				<TodoItems key={todoObj.id} todo={todoObj} />
			))}
		</ul>
	);
}
