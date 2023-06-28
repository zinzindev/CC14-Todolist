import { TodoItems } from './TodoItems';

export function TodoLists() {
	const mockTodo = Array.from({ length: 50 }, (el, idx) => idx + 1);

	return (
		<ul>
			{/* {mockTodo.map((el) => (
					<li key={el}>{`item-${el}`}</li>
				))} */}
			{mockTodo.map((el) => (
				<TodoItems key={el}/>
			))}
		</ul>
	);
}
