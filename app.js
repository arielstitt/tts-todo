function onSubmit() {
    let input = document.getElementById("input");
    let newTodo = document.createElement('DIV');
    let list = document.getElementById('list');
    let deleteButton = document.createElement('button');
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    newTodo.innerText = input.value;
    deleteButton.innerText = "delete";
    list.appendChild(newTodo);

    newTodo.prepend(checkbox);
    newTodo.appendChild(deleteButton);

    deleteButton.onclick = () => onDelete(newTodo);
}

function onDelete(t) {
    console.log("deleting...", t);
    t.remove();
    
}

function markComplete() {

}