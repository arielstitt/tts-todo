function onSubmit() {
    let input = document.getElementById("input");
    let newTodo = document.createElement('DIV');
    let list = document.getElementById('list');
    let deleteButton = document.createElement('button');
    let checkbox = document.createElement("input");
    let text = document.createElement("span");
    checkbox.setAttribute("type", "checkbox");

    text.innerText = input.value;
    deleteButton.innerText = "delete";
    list.appendChild(newTodo);

    newTodo.appendChild(text);
    newTodo.prepend(checkbox);
    newTodo.appendChild(deleteButton);

    deleteButton.onclick = () => onDelete(newTodo);
    checkbox.onclick = () => markComplete(newTodo);
}

function onDelete(t) {
    console.log("deleting...", t);
    t.remove();
    
}

function markComplete(todoItem) {
    console.log("mark complete...");
    console.log(todoItem.childNodes[1]);
    todoItem.childNodes[1].style = "text-decoration: line-through;"
}