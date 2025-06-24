let todo = [];
let req = prompt("Enter your choice , (list , add , delete, quit)");

while (true) {
    if (req == 'quit') {
        console.log("Quitting app");
        break;
    }

    if (req == 'add') {
        let task = prompt("Enter a task");
        todo.push(task);
    } else if (req == 'list') {
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i])
        }
    }
    else if (req == "delete") {
        let idx = prompt("Enter the index of task to be deleted");
        todo.splice(idx, 1);
    } else {
        console.log("wrong choice")
    }
    req = prompt("Enter your choice , (list , add , delete, quit)");

}