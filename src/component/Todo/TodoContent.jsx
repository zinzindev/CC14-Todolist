import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoHeader } from './TodoHeader';
import { AddTodo } from './AddTodo';
import { TodoLists } from './TodoLists';
import mockData from '../../data/todos.json';

export function TodoContent() {
	// logic
	const [todos, setTodos] = useState(mockData);

	const handleAddTodo = (newTask) => {
		// มี new todo
		// let newTodoObj1 = {
		// 	id: crypto.randomUUID(),
		// 	task: 'DoHw',
		// 	status: false,
		// 	due_date: '',
		// };
		let newTodoObj = { id: uuidv4(), task: newTask, status: false, due_date: '' };

		// สร้าง State ใหม่
		// update state โดย new state
		// const newTodos = [newTodoObj, ...todos];
		// setTodos(newTodos);

		// update state โดย callback
		setTodos((currentState) => [newTodoObj, ...currentState]);
	};

	// UPDATE-TODO
	// updatevalue = {}
	const handleEditTodo = (todoId, updateObj) => {
		console.log({ ...updateObj });
		//  Modify Array
		// #1 Findindex
		const foundedIndex = todos.findIndex((todoObj) => todoObj.id === todoId);

		// Not founded
		if (foundedIndex === -1) return;

		// Founded
		const newTodos = [...todos];
		//  let oldTodoObj= newTodos[foundIndex];
		// oldTodoObj.task = newTask;
		newTodos[foundedIndex] = { ...newTodos[foundedIndex], ...updateObj };
		setTodos(newTodos);
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
			<AddTodo onAddTodo={handleAddTodo} />
			<TodoLists todos  ={todos} onEditTodo={handleEditTodo} onDeleteTodo={handleDelete} />
		</main>
	);
}
