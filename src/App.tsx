import InputForm from "./Components/InputForm";
import { InputProvider } from "./Context/InputTaskContext";
import { TaskProvider } from "./Context/ListTaskContext";
import ListTasks from "./Components/ListTasks";

function App() {
	return (
		<InputProvider>
			<TaskProvider>
				<div className="App">
					<h1 className="container text-left mt-20 text-cyan-700">Лист заданий</h1>
					<InputForm />
					<ListTasks />
				</div>
			</TaskProvider>
		</InputProvider>
	);
}

export default App;
