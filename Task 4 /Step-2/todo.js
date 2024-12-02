const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTaskToList);
}

// Save tasks to localStorage
function saveTasks() {
    const tasks = [...taskList.children].map(li => li.firstChild.textContent.trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a task
function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        addTaskToList(task);
        taskInput.value = '';
        saveTasks();
    }
}

// Add task to DOM
function addTaskToList(task) {
    const li = document.createElement('li');
    li.textContent = task;

    // Add remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.onclick = () => {
        li.remove();
        saveTasks();
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
}

// Initialize
addTaskButton.addEventListener('click', addTask);
loadTasks();

