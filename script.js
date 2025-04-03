// Task array to store tasks
let tasks = [];

// Function to render the tasks in the list
function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear existing list

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-details">
                <span><strong>Task:</strong> ${task.name}</span>
                <span><strong>Start Date:</strong> ${task.startDate}</span>
                <span><strong>Finish Date:</strong> ${task.finishDate}</span>
                <span><strong>Priority:</strong> ${task.priority}</span>
            </div>
            <button onclick="removeTask(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to add a task
document.getElementById('add-task').addEventListener('click', function() {
    const taskName = document.getElementById('todo-input').value;
    const startDate = document.getElementById('start-date').value;
    const finishDate = document.getElementById('finish-date').value;
    const priority = document.getElementById('priority').value;

    if (taskName === '' || startDate === '' || finishDate === '') {
        alert('Please fill out all fields!');
        return;
    }

    // Add task to tasks array
    tasks.push({
        name: taskName,
        startDate: startDate,
        finishDate: finishDate,
        priority: priority
    });

    // Clear the input fields
    document.getElementById('todo-input').value = '';
    document.getElementById('start-date').value = '';
    document.getElementById('finish-date').value = '';
    document.getElementById('priority').value = 'Low';

    // Render the updated tasks
    renderTasks();
});

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); // Remove task at the specified index
    renderTasks(); // Re-render tasks
}

// Function to download the task list as a text file
document.getElementById('download-btn').addEventListener('click', function() {
    let taskText = 'Task List\n\n';

    tasks.forEach(task => {
        taskText += `Task: ${task.name}\nStart Date: ${task.startDate}\nFinish Date: ${task.finishDate}\nPriority: ${task.priority}\n\n`;
    });

    const blob = new Blob([taskText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'task_list.txt';
    link.click();
});
