function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskImage = document.getElementById("taskImage");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            taskItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });

        const taskText = document.createElement("span");
        taskText.textContent = taskInput.value;

        taskItem.appendChild(checkbox);

        if (taskImage.files.length > 0) {
            const image = document.createElement("img");
            image.src = URL.createObjectURL(taskImage.files[0]);
            image.alt = "Task Image";
            taskItem.appendChild(image);
        }

        taskItem.appendChild(taskText);
        taskList.appendChild(taskItem);

        // Clear inputs
        taskInput.value = "";
        taskImage.value = "";
    }
}