import React, { useState } from "react";

export default function ToDoList() {
	const [taskInput, setTaskInput] = useState("");
	const [tasks, setTasks] = useState([]);

	const addTask = () => {
		if (taskInput.trim() !== "") {
			setTasks([...tasks, taskInput.trim()]);
			setTaskInput("");
		}
	};

	const deleteTask = (index) => {
		const newTasks = tasks.filter((_, i) => i !== index);
		setTasks(newTasks);
	};

	return (
		<div className="w-full max-w-md mt-8 bg-gray-800 p-4 rounded-md">
			<h2 className="text-xl font-semibold mb-3">To-Do List</h2>
			<div className="flex gap-2 mb-4">
				<input
					type="text"
					className="flex-grow px-3 py-2 rounded-md text-black"
					placeholder="Add a new task"
					value={taskInput}
					onChange={(e) => setTaskInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							addTask();
						}
					}}
				/>
				<button
					className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
					onClick={addTask}
				>
					Add
				</button>
			</div>
			<ul className="list-disc list-inside max-h-48 overflow-y-auto">
				{tasks.map((task, index) => (
					<li
						key={index}
						className="flex justify-between items-center mb-1 bg-gray-700 p-2 rounded"
					>
						<span>{task}</span>
						<button
							className="text-red-500 hover:text-red-700 font-bold ml-4"
							onClick={() => deleteTask(index)}
							aria-label={`Delete task ${task}`}
						>
							X
						</button>
					</li>
				))}
				{tasks.length === 0 && (
					<li className="text-gray-400 italic">No tasks added yet.</li>
				)}
			</ul>
		</div>
	);
}
