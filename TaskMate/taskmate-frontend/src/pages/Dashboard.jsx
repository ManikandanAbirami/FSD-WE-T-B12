import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const fetchTasks = async () => {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/tasks", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setTasks(response.data);
    };

    const handleCreate = async () => {
        const token = localStorage.getItem("token");
        await axios.post(
            "http://localhost:3000/api/tasks",
            { title },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        setTitle("");
        fetchTasks();
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:3000/api/tasks/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        fetchTasks();
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <div className="min-h-screen px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
                    TaskMate Dashboard
                </h1>
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            </div>

            <div className="flex justify-center mb-6 gap-2">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="New task title"
                    className="w-64 p-2 border border-gray-300 rounded"
                />
                <button onClick={handleCreate} className="bg-indigo-600 text-white px-4 rounded">Add Task</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
