import { useState } from 'react';
import { Header } from './component/Header';
import { Sidebar } from './component/Sidebar';
import { TodoContent } from './component/Todo/TodoContent';
import mockData from './data/todos.json';
import './App.scss';

function App() {
	const [todos, setTodos] = useState(mockData);

	// Filter Todo
	const handleFilterLists = (index) => {
		console.log('selected', index);

		//FILTER LOGIC: Schemo for fillter '2023-04-29' == YYYY-MM-DD
		if (index === 0) setTodos(mockData); // mockData === All todo
		else if (index === 1) {
			const nowObj = new Date();
			const nowStr = nowObj.toISOString().slice(0, 10); // Today

			const filterTodo = todos.filter((todoObj) => todoObj.due_date === nowStr);
			setTodos(filterTodo);
		} else if (index === 2) {
			const nowObj = new Date();
			const nowStr = nowObj.toISOString().slice(0, 10); // Today

			const nextSevenDayObj = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
			const nextSevenDayStr = nextSevenDayObj.toISOString().slice(0, 10);

			const filterTodo = mockData.filter((todoObj) => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenDayStr);
			setTodos(filterTodo);
		}
	};

	return (
		<div className='container'>
			<Header />
			<Sidebar onSetectTab={handleFilterLists} />
			<TodoContent todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
