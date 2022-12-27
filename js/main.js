
//--- Capture input value
let inputValue = document.getElementById("ToDoListItem");

//--- When the button pushed, console log the value of input
// Button
const enterButton = document.getElementById("enterButton");
enterButton.addEventListener("click", enterButtonPushed);

// Function for when the button is pushed
function enterButtonPushed(){
    console.log(inputValue.value);
}