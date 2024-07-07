import React from "react";
import { useInputContext } from "../Context/InputTaskContext";
import { useTaskContext } from "../Context/ListTaskContext";
import { IoIosArrowDown } from "react-icons/io";

const InputForm = () => {
	const { inputTask, setInputTask } = useInputContext();
	const { addTask } = useTaskContext();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		addTask(inputTask);

		const newInputTask = {
			taskTitle: "",
			isComplete: false,
			id: Math.random() * 10,
		};
		setInputTask(newInputTask);
	};

	return (
		<div className="container flex items-start justify-start ml-4"> 
			<form onSubmit={handleSubmit} className="w-full max-w-sm">
				<div className="flex items-left  border-b-2 border-blue-500 py-2">
					<input
						className="appearance-none bg-transparent border-none w-full text-cyan-100 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Напишите задание"
						required
						onChange={(e) => {
							setInputTask({ ...inputTask, taskTitle: e.target.value });
						}}
						value={inputTask.taskTitle}
					/>
					<button
						className="flex-shrink-0 bg-blue-500 bg-blue-500 border-blue-500 hover:border-blue-900 text-sm border-4 text-gray-900 py-1 px-2 rounded"
						type="submit"
						title="Добавить"
					>
					<IoIosArrowDown />
					</button>
				</div>
			</form>
		</div>
	);
};

export default InputForm;
