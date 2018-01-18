var todos = ["Buy new Turtle"];

var input = prompt("What would you like to you?");

while (input !== "quit") {
    // handle input
    if (input === "list") {
        console.log(todos);
    } else if(input === "new") {
        // ask for new todo
        var newTodo = prompt("Enter new todo");
        // add to todo array
        todos.push(newTodo);
    }
    // ask again for new input
    input = prompt("What would you like to you?");
} 
console.log("Ok, You quit the app");