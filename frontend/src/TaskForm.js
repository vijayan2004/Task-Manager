import React, { useEffect, useState } from 'react';
import { createTask, updateTask } from './api';

function TaskForm({ onSuccess, editTask, setEditTask }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    due_date: '',
    completed: false
  });

  useEffect(() => {
    if (editTask) setForm(editTask);
  }, [editTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editTask) {
      await updateTask(editTask.id, form);
    } else {
      await createTask(form);
    }
    setForm({ title: '', description: '', due_date: '', completed: false });
    setEditTask(null);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-xl border border-gray-200 max-w-full sm:max-w-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 text-center mb-4">{editTask ? 'Edit Task' : 'Add New Task'}</h2>

      <div>
        <label className="block text-sm font-semibold text-indigo-700">Title</label>
        <input
          type="text"
          placeholder="Task title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          className="mt-1 w-full p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-indigo-700">Description</label>
        <textarea
          placeholder="Describe your task"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="mt-1 w-full p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          rows="3"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-indigo-700">Due Date</label>
        <input
          type="date"
          value={form.due_date}
          onChange={e => setForm({ ...form, due_date: e.target.value })}
          className="mt-1 w-full p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={form.completed}
          onChange={e => setForm({ ...form, completed: e.target.checked })}
          className="h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
        />
        <span className="text-sm text-gray-700">Mark as completed</span>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-center"
      >
        {editTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;