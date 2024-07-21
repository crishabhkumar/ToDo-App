let listContainer = document.getElementById("list-container");

let inputBox = document.getElementById("input-box");

function addTaskIntoList() {
  if (inputBox.value === "") {
    alert("Please enter a task");
    return;
  }
  let task = document.createElement("li");
  task.textContent = inputBox.value;
  listContainer.appendChild(task);
  let span = document.createElement("span");
  span.textContent = "\u00d7";
  task.appendChild(span);

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", (ele) => {
  if (ele.target.tagName == "LI") {
    ele.target.classList.toggle("checked");
    saveData();
  } else if (ele.target.tagName == "SPAN") {
    ele.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}

showData();
