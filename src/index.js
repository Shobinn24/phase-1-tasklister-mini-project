document.addEventListener("DOMContentLoaded", () => {
  // select the form using its id
  const form = document.getElementById('create-task-form');

  // add an event listener for the form submission
  form.addEventListener('submit', (event) => {
    // prevent the default form submission behavior
    event.preventDefault();

    // get the value of the task input field
    const taskDescription = event.target.querySelector('[name="new-task-description"]').value;

    // call the function to add the task to the list
    buildToDo(taskDescription);

    // reset the form input field
    event.target.querySelector('[name="new-task-description"]').value = '';
  });

  // function to add a task to the task list
  function buildToDo(task) {
    // create a new list item element
    const li = document.createElement('li');
    li.textContent = task;

    // select the task list using its id
    const taskList = document.getElementById('tasks');

    // append the new list item to the task list
    taskList.append(li);
  }   
});
