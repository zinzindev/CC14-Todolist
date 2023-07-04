import { useState } from 'react';

import { getSevenDayRange } from '../utils/DateUtils';
import { Header } from '../component/Header';
import { Sidebar } from '../component/Sidebar';
import { TodoContent } from '../component/Todo/TodoContent';

import './App.scss';
import allTodoMock from '../data/todos.json';

function App() {
	const [todos, setTodos] = useState(allTodoMock);
	const [filterList, setFilterList] = useState(allTodoMock);

	// Filter Todo

	const handleFilterLists = (index) => {
		// index == 0 : All
		// index == 1 : today
		// index == 2 : next 7

		const [nowStr, nextSevenDayStr] = getSevenDayRange();
		let filteredTodo = [...allTodoMock];

		//FILTER LOGIC: Schemo for fillter '2023-04-29' == YYYY-MM-DD
		if (index === 1) {
			filteredTodo = allTodoMock.filter((todoObj) => todoObj.due_date === nowStr);
		} else if (index === 2) {
			filteredTodo = allTodoMock.filter(
				(todoObj) => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenDayStr
			);
		}
		setTodos(filteredTodo);
		setFilterList(filteredTodo);
	};

	// Search Todo
	const handleSearch = (searchText) => {
		const newTodo = filterList.filter((todoObj) => todoObj.task.includes(searchText));
		setTodos(newTodo);
	};

	return (
		<div className='container'>
			<Header onSearchText={handleSearch} />
			<Sidebar onSetectTab={handleFilterLists} />
			<TodoContent todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
