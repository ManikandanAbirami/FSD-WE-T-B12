let todos = [];

function addTodo() {
  const todoText = document.getElementById("todo-text").value.trim();
  if (todoText === "") {
    alert("Please enter a task.");
    return;
  }

  const todo = {
    id: Date.now(),
    text: todoText,
  };

  todos.push(todo);
  document.getElementById("todo-text").value = "";
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${todo.text}</span>
      <div>
      <button class="edit-btn" onclick="editTodo(${todo.id})">Edit</button>
      <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });
}

function editTodo(id) {
  const newTodoText = prompt("Enter your task:");
  if (newTodoText !== null && newTodoText.trim() !== "") {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newTodoText } : todo
    );
  }
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}
