
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//event listeners
loadEventListeners();


function loadEventListeners() {
    form.addEventListener('submit', addTask);
}


function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //create li element 
    const li = document.createElement('li');

    //add a class
    li.className = 'collection-item';

    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //create new link element
    const link = document.createElement('a');
    
    link.className = 'delete-item secondary-content';

    //Add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    //apend to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value= '';

    e.preventDefault();
}