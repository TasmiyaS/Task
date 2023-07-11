// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add event listener to the button
addTaskBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  // Get the task input value
  const task = taskInput.value;

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = task;

  // Create a delete button for the list item
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", deleteTask);

  // Append the delete button to the list item
  listItem.appendChild(deleteBtn);

  // Append the list item to the task list
  taskList.appendChild(listItem);

  // Clear the task input
  taskInput.value = "";
}

// Function to delete a task
function deleteTask(event) {
  // Get the parent list item of the delete button
  const listItem = event.target.parentNode;

  // Remove the list item from the task list
  taskList.removeChild(listItem);
}
