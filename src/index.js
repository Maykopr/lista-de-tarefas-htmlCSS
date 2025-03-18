const textInput = document.getElementById("input");
const btnAdd = document.getElementById("btn-add");
const listArea = document.getElementById("list-area");
btnAdd.onclick = addTask;

function addTask() {
      const inputValue = textInput.value.trim();  
      if (inputValue) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(inputValue);
            localStorage.setItem("tasks", JSON.stringify(tasks));

            listArea.innerHTML = generateTaskHtml(tasks);
            textInput.value = "";
            textInput.focus();
      }
}

function removeTask(taskId) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      const newTasks = tasks.filter((task, index) => index + 1 !== taskId);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      listArea.innerHTML = generateTaskHtml(newTasks);
}

function generateTaskHtml(tasks) {
      return tasks.map((task, index) => {
            const taskCount = index + 1;
            return `
                  <div class="anotation-card" id="${taskCount}">
                  <input type="checkbox" class="check-box" id="check${taskCount}">
                  <label for="check${taskCount}"></label>
                  <p class="anotation-card__text">${task}</p>
                  <button onclick="removeTask(${taskCount})" type="button" class="anotation-card__button" id="deleteButton"><i class="fi fi-ss-trash-restore-alt"></i></button>
                  </div>
                  `;
      }).join("");
}

      
document.addEventListener("DOMContentLoaded", () => {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const taskHtml = generateTaskHtml(tasks);
      listArea.innerHTML = taskHtml;
});
      
textInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
            event.preventDefault();
            addTask();
      }
});

globalThis.removeTask = removeTask;