import { TodoItems } from './TodoItems';

export function TodoLists({ todos, onEditTodo }) {
	return (
		<ul>
			{todos.map((todoObj) => (
				<TodoItems
					key={todoObj.id}
					todo={todoObj}
					onEditTodo={onEditTodo}
				/>
			))}
		</ul>
	);
}
