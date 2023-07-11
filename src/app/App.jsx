import { useState, useEffect } from 'react';
import axios from 'axios';

import { getSevenDayRange } from '../utils/DateUtils';
import { Header } from '../component/Header';
import { Sidebar } from '../component/Sidebar';
import { TodoContent } from '../component/Todo/TodoContent';

import './App.scss';
// import allTodoMock from '../data/todos.json';

function App() {
	// ## LOGIC : HOOK
	const [todos, setTodos] = useState([]); // Original todos
	const [filterList, setFilterList] = useState([]); // Filter todos

 	useEffect(() => {
		// Run after DID MOUNT
		async function fetchAllTodo() {
			try {
				// let response = await axios({ method: 'GET', url: 'http://localhost:8080/todos' });
				let response = await axios.get('http://localhost:8080/todos');
				let todoList = response.data.todos;
				setTodos(todoList);
				setFilterList(todoList);
			} catch (error) {
				console.log(error.response.status);
			}
		}

		fetchAllTodo();
	}, []);

	// ## LOGIC : FUNCTION
	// Filter Todo
	const handleFilterLists = (index) => {
		// index == 0 : All
		// index == 1 : today
		// index == 2 : next 7

		const [nowStr, nextSevenDayStr] = getSevenDayRange();
		let filteredTodo = [...todos];

		//FILTER LOGIC: Schemo for fillter '2023-04-29' == YYYY-MM-DD
		if (index === 0) {
			setFilterList(todos);
		} else if (index === 1) {
			filteredTodo = todos.filter((todoObj) => todoObj.date === nowStr);
			setFilterList(filteredTodo);
		} else if (index === 2) {
			filteredTodo = todos.filter(
				(todoObj) => todoObj.date > nowStr && todoObj.date <= nextSevenDayStr
			);
			setFilterList(filteredTodo);
		}
		// setTodos (filteredTodo);
		// setFilterList(filteredTodo);
	};

	// Search Todo
	const handleSearch = (searchText) => {
		const newTodo = todos.filter((todoObj) =>
			todoObj.task.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
		);
		// setTodos(newTodo);
		setFilterList(newTodo);
	};

	return (
		<div className='container'>
			<Header onSearchText={handleSearch} />
			<Sidebar onSetectTab={handleFilterLists} />
			<TodoContent todos={filterList} setTodos={setTodos} setFilterList={setFilterList} />
		</div>
	);
} 

export default App;
