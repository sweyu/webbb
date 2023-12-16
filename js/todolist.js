function addTask() {
  const newTaskInput = document.getElementById("new-task");
  const taskText = newTaskInput.value;

  if (taskText.trim() !== "") {
    const tasksList = document.getElementById("tasks");
    const taskItem = document.createElement("li");

    // Utwórz div, aby zawierał tekst zadania i przyciski
    const taskContent = document.createElement("div");
    taskContent.textContent = taskText;

    // Dodaj przycisk do usuwania zadania
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.className = "remove-button button1"; // Dodaj klasę "button1"
    deleteButton.onclick = function () {
      tasksList.removeChild(taskItem);
    };

    // Dodaj przycisk do edytowania zadania
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "button1"; // Dodaj klasę "button1"
    editButton.onclick = function () {
      const updatedText = prompt("Edit task", taskText);
      if (updatedText !== null) {
        taskContent.textContent = updatedText;
      }
    };

    // Dodaj przyciski do diva
    taskContent.appendChild(deleteButton);
    taskContent.appendChild(editButton);

    // Dodaj div do elementu zadania
    taskItem.appendChild(taskContent);

    // Dodaj element zadania do listy
    tasksList.appendChild(taskItem);

    // Wyczyść pole tekstowe po dodaniu zadania
    newTaskInput.value = "";

    // Ustaw focus na polu tekstowym
    newTaskInput.focus();
  }
}
