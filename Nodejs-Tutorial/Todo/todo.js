const fs = require("fs");
const filepath = "./tasks.json";

const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("✅ Task added:", task);
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks, null, 2); // Prettier formatting
  fs.writeFileSync(filepath, dataJSON);
};

const listTasks = () => {
  const tasks = loadTask();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

const removeTask = (taskName) => {
  const tasks = loadTask();
  const filteredTasks = tasks.filter((t) => t.task.trim() !== taskName.trim());

  if (filteredTasks.length === tasks.length) {
    console.log(`❌ Task "${taskName}" not found.`);
    return;
  }

  saveTasks(filteredTasks);
  console.log(`✅ Task "${taskName}" removed.`);
};

const command = process.argv[2];
const argument = process.argv.slice(3).join(" ").trim(); // Support multiple words

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(argument);
} else {
  console.log("❗ Command not found. Use add, list, or remove.");
}
