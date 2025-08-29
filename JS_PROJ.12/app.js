const todoList = document.getElementById('todoList');
const newtodoInput = document.getElementById('newtodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');

addTodoBtn.addEventListener('click', ()=>{
    
    const newtodoText = newtodoInput.value;

    if(newtodoText!==""){
        const newtodoItem = document.createElement("li");
        newtodoItem.innerText = newtodoText;
        const deletetodoBtn = document.createElement('button');
        deletetodoBtn.innerText = 'X';

        deletetodoBtn.classList.add("delete-todo-btn");
        deletetodoBtn.addEventListener('click', function(){
            newtodoItem.remove();
        });

        newtodoItem.appendChild(deletetodoBtn);
        todoList.appendChild(newtodoItem);
        newtodoInput.value = "";
    }

});