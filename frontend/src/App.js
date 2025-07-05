// 📄 frontend/src/App.js

import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from './api';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-indigo-200 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 transition-transform duration-500 hover:scale-[1.01] border border-indigo-100">
        <h1 className="text-5xl font-black text-center text-indigo-700 mb-12 tracking-tight">
          <span className="inline-block animate-pulse">📋 Task Manager</span>
        </h1>

        <div className="mb-10">
          <TaskForm onSuccess={loadTasks} editTask={editTask} setEditTask={setEditTask} />
        </div>

        <div>
          <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onEdit={setEditTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
