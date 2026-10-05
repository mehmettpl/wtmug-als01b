const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    const li = document.createElement("li");
    li.className = "task";

    const span = document.createElement("span");
    span.textContent = text;

    // Tamamla butonu oluşturuluyor
    const completeButton = document.createElement("button");
    completeButton.textContent = "Tamam";
    completeButton.className = "complete-button";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.className = "delete-button";

    // Tamamla butonuna tıklama olayı
    completeButton.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    // Butonları ve metni li içine ekle
    li.appendChild(span);
    
    // Butonları bir kapsayıcı içine alalım (yan yana düzgün durması için)
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";
    buttonGroup.appendChild(completeButton);
    buttonGroup.appendChild(deleteButton);
    
    li.appendChild(buttonGroup);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// Service Worker kaydı (değişiklik yok)
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => {
                console.log("Service Worker kayıt edildi.");
            })
            .catch((error) => {
                console.error("Service Worker kayıt hatası:", error);
            });
    });
}