const API_URL = 'http://localhost:5000/tasks';

export async function getTasks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getTask(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createTask(task) {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
}

export async function updateTask(id, task) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
}

export async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}