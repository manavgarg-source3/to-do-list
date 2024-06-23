document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.querySelector("#item");
    const toDoBox = document.querySelector("#to-do-box");

    itemInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            const value = event.target.value.trim();
            if (value) {
                addToDo(value);
                event.target.value = "";
            } else {
                alert("Please enter a valid to-do item.");
            }
        }
    });

    const addToDo = (item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item}
            <i class="fas fa-times"></i>
        `;
        toDoBox.appendChild(listItem);
    };

    toDoBox.addEventListener("click", (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle("done");
        } else if (event.target.tagName === 'I') {
            event.target.parentElement.remove();
        }
    });
});
