//--- alert message, going to hide it in the beginning
const alertMessage = document.getElementById("alert");
alertMessage.style.display = "none";

const taskCount = document.getElementById("taskCount");
let count = 0;
taskCount.innerHTML = count;


// Create a function when the submit button is clicked in the form.
// capture the form
const form = document.getElementById("taskInputContainer");
//When submit button is clicked
form.addEventListener("submit", (e) =>{
    // use this so your page is not refreshed every time you clicked submit
    e.preventDefault();
    //--- Capture the input value
    const input = document.getElementById("newTaskInput");
    let inputValue = input.value;
    //-- Make sure the value is not empty or null
    if (inputValue === "" || inputValue.length === 0){
        // alert message will appear
        alertMessage.style.display = "block";
    }else{
        // alert message will disappear
        alertMessage.style.display = "none";

        count++

        //-- Create The Element div with class tasksContainer
        const taskContainerDiv = document.createElement("div");
        taskContainerDiv.classList.add("tasksContainer")

        //--Create section element with taskTextContainer
        const taskTextContainerSection = document.createElement("section");
        taskTextContainerSection.classList.add("taskTextContainer");

        //-- Create Section element with buttonContainer
        const buttonContainerSection = document.createElement("section");
        buttonContainerSection.classList.add("buttonContainer");

        //--Add the buttons
        //Edit
        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        //Delete
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        //-- Add buttons to buttonContainerSection
        buttonContainerSection.appendChild(editButton);
        buttonContainerSection.appendChild(deleteButton);

        //-- use AppendChild to add inside the div "taskContainer"
        //-- will be adding textContainer and ButtonContainer
        taskContainerDiv.appendChild(taskTextContainerSection);
        taskContainerDiv.appendChild(buttonContainerSection);

        //--Going to create an input element for value with class name and type
        const taskInputList = document.createElement("input");
        taskInputList.classList.add("taskText");
        taskInputList.type = "text"
        taskInputList.value = inputValue;
        taskInputList.setAttribute("readonly","readonly")

        //-- we are adding that input that is readonly to the taskTextContainerSection
        // just like how we built before in the HTML
        taskTextContainerSection.appendChild(taskInputList)

        //-- Now I will add this task Container Div inside the taskList div to showcase the whole list
        const taskList = document.getElementById("taskList");
        taskList.appendChild(taskContainerDiv);

        //finally when enter button is pushed the input value will be cleared
        input.value = "";

        // When the edit button is clicked the edit button will change to a save button
        //delete button will disappear
        editButton.addEventListener("click", () => {
            if (editButton.classList == "edit" ){
                //Take out ReadOnly
                taskInputList.removeAttribute("readonly");
                taskInputList.focus();
                // Change the innerHTML with a save icon
                editButton.innerHTML = `<i class="fa-solid fa-floppy-disk"></i>`
                // remove class and add new one.
                editButton.classList.remove("edit");
                editButton.classList.add("save");
                deleteButton.style.display = 'none';
            }else{

                if (taskInputList.value === "" || taskInputList.value.length === 0) {
                    // alert message will appear
                    alertMessage.style.display = "block";

                }else{
                    //alert message will disappear
                    alertMessage.style.display = "none";
                    // Restoring the readonly
                    taskInputList.setAttribute("readonly","readonly")
                    // turn the save button back to edit
                    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
                    //take out the save class to the edit class
                    editButton.classList.remove("save");
                    editButton.classList.add("edit");
                    // show the delete button
                    deleteButton.style.display = 'block';
                }
            }
        })

        // When the delete button is clicked you will be removing the child
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskContainerDiv);
            count -= 1;
            taskCount.innerHTML = count;
        })

        //-- this will show the count of how many task there is
        taskCount.innerHTML = count;

    }
})

