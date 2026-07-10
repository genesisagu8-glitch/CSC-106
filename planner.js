document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Array to store tasks
    let tasks = [];

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = ''; // Clear current list

        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;

            const taskText = document.createElement('span');
            taskText.textContent = task.text;

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'task-actions';

            const completeBtn = document.createElement('button');
            completeBtn.className = 'btn-complete';
            completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
            completeBtn.onclick = () => toggleTaskComplete(index);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-delete';
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => deleteTask(index);

            actionsDiv.appendChild(completeBtn);
            actionsDiv.appendChild(deleteBtn);

            li.appendChild(taskText);
            li.appendChild(actionsDiv);
            taskList.appendChild(li);
        });
    }

    // Add new task
    addTaskBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text !== '') {
            tasks.push({ text: text, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    });

    // Toggle task completion
    function toggleTaskComplete(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    // Delete task
    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    // Allow pressing "Enter" to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
