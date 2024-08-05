let todoList = document.getElementById('todo-list');
let inputField = document.getElementById("inputfield");
let button = document.getElementById("btn");


button.addEventListener("click", () => {
    let paragrapgh = document.createElement('p');
    paragrapgh.classList.add("paragraph-styling");
    paragrapgh.innerText = inputField.value;
    todoList.appendChild(paragrapgh);
    inputField.value = "";

    paragrapgh.addEventListener("click", () => {
        paragrapgh.style.textDecoration = "line-through"
    })
    paragrapgh.addEventListener("dblclick", () => {
        todoList.removeChild(paragrapgh);
    })
})
