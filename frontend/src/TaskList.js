import React from 'react';

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <ul className="space-y-6 mt-8">
      {tasks.map(task => (
        <li
          key={task.id}
          className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row justify-between gap-4"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                ID - {task.id}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-indigo-800">{task.title}</h3>
            </div>

            <p className="text-gray-700 mb-2">{task.description}</p>
            <p className="text-sm text-gray-500 mb-1">📅 Due: {task.due_date}</p>

            <span
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                task.completed
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {task.completed ? '✅ Completed' : '⏳ Pending'}
            </span>
          </div>

          <div className="flex sm:flex-col sm:items-end sm:gap-2 gap-4">
            <button
              onClick={() => onEdit(task)}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z" />
              </svg>
              Edit
            </button>

            <button
              onClick={() => onDelete(task.id)}
              className="text-sm font-medium text-red-600 hover:text-red-800 flex items-center gap-1 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
