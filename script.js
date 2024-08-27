let todos = JSON.parse(localStorage.getItem("todos")) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");

function updateTodoCount() {
    todoCount.textContent = todos.length;
}

function addTodo() {
    let todo = todoInput.value.trim();
    if (todo === "") {
        alert("Please enter a task");
    } else {
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        todoInput.value = "";
        showTodo();
    }
}

function showTodo() {
    let html = "";
    todos.forEach((todo, index) => {
        html += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
    </li>`;
    });
    todoList.innerHTML = html;
    updateTodoCount();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodo();
}

function clearAll() {
    if (todos.length === 0) {
        alert("There are no tasks to delete!");
        return;
    }

    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodo();
}


document.addEventListener("DOMContentLoaded", showTodo);
addButton.addEventListener("click", addTodo);
deleteButton.addEventListener("click", clearAll);
