import React from 'react';

const TaskCard = ({ task, onDelete }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4 rounded border-l-4 border-indigo-500">
            <h2 className='text-lg font-semibold text-gray-800'>{task.title}</h2>
            <button onClick={() => onDelete(task._id)} className="bg-red-500 text-white py-1 px-2 rounded mt-2">
                Delete
            </button>
        </div>
    );
};

export default TaskCard;