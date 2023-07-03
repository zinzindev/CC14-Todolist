import { useState } from 'react';
import { Header } from './component/Header';
import { Sidebar } from './component/Sidebar';
import { TodoContent } from './component/Todo/TodoContent';
import { getSevenDayRange } from './utils/DateUtils';
import mockData from './data/todos.json';
import './App.scss';

function App() {
	const [todos, setTodos] = useState(mockData);

	// Filter Todo

	const handleFilterLists = (index) => {
		// index == 0 : All
		// index == 1 : today
		// index == 2 : next 7

		const [nowStr, nextSevenDayStr] = getSevenDayRange();
		let filteredTodo = [...mockData];

		//FILTER LOGIC: Schemo for fillter '2023-04-29' == YYYY-MM-DD
		if (index === 1) {
			filteredTodo = mockData.filter((todoObj) => todoObj.due_date === nowStr);
		} else if (index === 2) {
			filteredTodo = mockData.filter((todoObj) => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenDayStr);
		}
		setTodos(filteredTodo);
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
