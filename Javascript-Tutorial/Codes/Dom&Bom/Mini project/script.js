function addTask() {
  // Get the input field by its ID
  const input = document.getElementById("taskinput");
  const taskText = input.value;

  // Prevent adding empty tasks
  if (taskText.trim() === "") {
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Get the unordered list by its class name (you could also add an ID to the <ul> for easier access)
  // For now, we'll select the first element with the class 'tasklist'
  const taskList = document.querySelector(".tasklist");

  // Append the new list item to the unordered list
  taskList.appendChild(li);

  // Clear the input field after adding the task
  input.value = "";
}