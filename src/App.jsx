import { Header } from './component/Header';
import { Sidebar } from './component/Sidebar';
import { TodoContent } from './component/Todo/TodoContent';
import './App.scss';

function App() {
	return (
		<div className='container'>
			<Header />
			<Sidebar />
			<TodoContent />
		</div>
	);
}

export default App;
