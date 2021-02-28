//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filtertodo);

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
  trashButton.innerHTML = '<i class="fas fa fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv);

  //Clear Todo Input value
  todoInput.value = '';
}
//Delete Todo
function deleteCheck(e) {
  const item = e.target;

  //delete todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.remove();
  }
  //Check Mark
  else {
    if (item.classList[0] === 'complete-btn') {
      console.log('yes');
      const todo = item.parentElement;
      todo.classList.toggle('completed');
    }
  }
}

function filtertodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          console.log('completed');
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          console.log('uncompleted');
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      default:
    }
  });
}
