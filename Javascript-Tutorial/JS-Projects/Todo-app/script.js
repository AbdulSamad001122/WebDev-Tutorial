document.addEventListener("DOMContentLoaded", () => {

  const todo_input = document.getElementById("todo-input");
  const add_task_btn = document.getElementById("add_task_btn");
  const todo_list = document.getElementById("todo_list");
  const error_line = document.getElementById("error_line");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => render_tasks(task));

  add_task_btn.addEventListener("click", () => {
    const task_text = todo_input.value.trim();
    if (task_text === "") return (error_line.textContent = "plz add a task");

    const new_task = {
      id: Date.now(),
      text: task_text,
      completed: false,
    };

    tasks.push(new_task);
    save_tasks();
    render_tasks(new_task);
    error_line.textContent = "";
    todo_input.value = "";
    console.log(tasks);
  });

  function render_tasks(task) {
    console.log(task.text);
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      save_tasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      save_tasks();
    });
    todo_list.appendChild(li);
  }

  function save_tasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
