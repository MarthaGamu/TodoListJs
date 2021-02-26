//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  console.log('i am clicked');

  //Todo Div

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //Create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //Check Mark Button
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="far fa fa-check-square"></i>';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);

  //Check Trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa fa-trash-alt"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv);
}
