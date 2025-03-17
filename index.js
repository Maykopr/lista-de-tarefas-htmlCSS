const textInput = document.getElementById("input");
const btnAdd = document.getElementById("btn-add");
const listArea = document.getElementById("list-area");
btnAdd.onclick = addTask;
let counter = 0;

/**
 * Add a new task to the list
 *
 * Adds a new task based on the user's input and appends it to the list. If the input is empty, does nothing.
 *
 * @listens textInput#keyup
 * @listens btnAdd#click
 */
function addTask() {
      const inputValue = textInput.value.trim();

      if (inputValue) {
            const taskCount = ++counter;

            const newTaskHtml = `
                  <div class="anotation-card" id="${taskCount}">
                        <input type="checkbox" class="check-box" id="check${taskCount}">
                        <label for="check${taskCount}"></label>
                        <p class="anotation-card__text">${inputValue}</p>
                        <button onclick="removeTask(${taskCount})" type="button" class="anotation-card__button" id="deleteButton"><i class="fi fi-ss-trash-restore-alt"></i></button>
                  </div>`;

            listArea.insertAdjacentHTML("beforeend", newTaskHtml);
            textInput.value = "";
            textInput.focus();
      }
}

function removeTask(id) {
      const task = document.getElementById(id);
      task.remove(id);
}

textInput.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
            event.preventDefault();
            addTask();
      }
});