import { useState } from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import EditForm from "./EditForm";
import { InputTask } from "../Context/InputTaskContext";
import { useTaskContext } from "../Context/ListTaskContext";
import { IoIosCheckmark } from 'react-icons/io';

interface TodoItemProps {
	task: InputTask;
}

const TodoItem = ({ task }: TodoItemProps) => {
	const [showEditForm, setShowEditForm] = useState(false);
	const { removeTask, toggleTask } = useTaskContext();

	const handleShowEditForm = () => {
		setShowEditForm(true);
	};

	const handleCloseEditForm = () => {
		setShowEditForm(false);
	};

	return (
		<div className="container mt-10">
		  <div className="flex justify-between items-center border-b-2 border-blue-500 py-2">
			<div className="flex items-center">
			  <input
				className="mr-3"
				type="checkbox"
				title="todoCheck"
				id={`${task.id}`}
				checked={task.isComplete}
				onChange={() => toggleTask(task.id)}
			  />
			  <label
				className={
				  task.isComplete
					? "flex items-center mr-3 text-blue-600 text-3xl"
					: "mr-3 text-cyan-700 text-3xl"
				}
				htmlFor={`${task.id}`}
			  >
				{task.isComplete && <IoIosCheckmark className="mr-2" />}
				{task.taskTitle}
			  </label>
			</div>
			<div className="buttons">
			  <button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mr-2"
				title="Изменить"
				onClick={handleShowEditForm}
			  >
				<FaUserEdit />
			  </button>
			  <button
				className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded"
				title="Удалить"
				onClick={() => removeTask(task.id)}
			  >
				<FaTrash />
			  </button>
			</div>
		  </div>
		  {showEditForm && (
			<EditForm
			  show={showEditForm}
			  handleClose={handleCloseEditForm}
			  TaskID={task.id}
			/>
		  )}
		</div>
	  );
	};
	
export default TodoItem;
