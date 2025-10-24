let task = document.querySelector(".task");
let add = document.querySelector(".add");
let ul = document.querySelector(".ul");

window.addEventListener("DOMContentLoaded", function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(({ text, completed }) => {
    createTaskElement(text, completed);
  });
});

add.addEventListener("click", function () {
  if (task.value.trim().length > 0) {
    createTaskElement(task.value.trim(), false);
    task.value = "";
    saveTasks(); 
  } else {
    alert("lah yrdi 3lik awldi ; maktbty walo");
  }
});

function createTaskElement(text, completed) {
  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  let span = document.createElement("span");
  span.textContent = text;
  if (completed) {
    span.classList.add("completed");
  }

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "msa7 task";
  deleteBtn.classList.add("delete-btn");

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  checkbox.addEventListener("change", function () {
    span.classList.toggle("completed", checkbox.checked);
    saveTasks();
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
    saveTasks();
  });
}

function saveTasks() {
  const tasks = [];
  ul.querySelectorAll("li").forEach((li) => {
    const text = li.querySelector("span").textContent;
    const completed = li.querySelector("input[type='checkbox']").checked;
    tasks.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
