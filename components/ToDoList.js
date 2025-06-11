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
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-xl p-5">
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-500">To-Do</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="flex-grow px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none text-blue-600"
                    placeholder="Your task..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                />
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition font-semibold"
                    onClick={addTask}
                >
                    +
                </button>
            </div>
            <ul className="space-y-2 max-h-56 overflow-y-auto">
                {tasks.length === 0 && (
                    <li className="text-gray-400 text-center italic">No Task</li>
                )}
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between bg-blue-500 px-3 py-2 rounded shadow-sm"
                    >
                        <span className="truncate font-semibold">{task}</span>
                        <button
                            className="ml-3 text-red-500 hover:text-red-700 text-lg font-black"
                            onClick={() => deleteTask(index)}
                            aria-label={`Hapus tugas ${task}`}
                        >
                            &#10005;
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}