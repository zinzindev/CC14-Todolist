// import { v4 as uuidv4 } from 'uuid';
import { TodoHeader } from './TodoHeader';
import { AddTodo } from './AddTodo';
import { TodoLists } from './TodoLists';

export function TodoContent({ todos, setTodos, setFilterList }) {
	// logic

	// UPDATE-TODO
	// updatevalue = {}
	const handleEditTodo = (todoId, updateObj) => {
		console.log({ ...updateObj });
		//  Modified Array
		// #1 Findindex
		console.log(todoId);
		const foundedIndex = todos.findIndex((todoObj) => todoObj.id === todoId);
		console.log(foundedIndex);

		// Not founded
		if (foundedIndex === -1) return;

		// Founded
		const newTodos = [...todos];

		// newTodos[foundedIndex] = Object.assign({}, newTodos[foundedIndex], updateObj)
		newTodos[foundedIndex] = { ...newTodos[foundedIndex], ...updateObj };

		//console.log(newTodos[foundedIndex]);
		setTodos(newTodos);
		setFilterList(newTodos);
	};

	const handleDelete = (todoId) => {
		// Logic: Manipulate Array

		// # 1
		// const foundedIndex = todos.findIndex((todoObj) => todoObj.id === todoId);
		// if (foundedIndex === -1) return;

		// const newTodos = [...todos];
		// newTodos.splice(foundedIndex, 1);

		// setTodos(newTodos);

		// # 2
		setTodos((curr) => curr.filter((todoObj) => todoObj.id !== todoId));
	};

	// ui
	return (
		<main className='content'>
			<TodoHeader />
			<AddTodo setTodos={setTodos} setFilterList={setFilterList} />
			<TodoLists todos={todos} onEditTodo={handleEditTodo} onDeleteTodo={handleDelete} />
		</main>
	);
}
