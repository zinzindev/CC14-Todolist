import { useState } from 'react';
import { TodoHeader } from './TodoHeader';
import { AddTodo } from './AddTodo';
import { TodoLists } from './TodoLists';
import mockData from '../../data/todos.json';

export function TodoContent() {
	// logic
	const [todos, setTodos] = useState(mockData);
	console.log(todos);

	// ui
	return (
		<main className='content'>
			<TodoHeader />
			<AddTodo />
			<TodoLists todos={todos} />
		</main>
	);
}
