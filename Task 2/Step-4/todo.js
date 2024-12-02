// Select necessary elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task
addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    // Append button to task
    li.appendChild(deleteButton);

    // Add task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
});
