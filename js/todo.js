const todoForm = document.querySelector('#todoform');
const todoInput = document.querySelector('#todoform>input');
const todoList = document.querySelector('#todolist');
const TODOLIST_KEY = 'todos';
let toDos = [];
const savetodoLocal = () =>{
        const strToDo = JSON.stringify(toDos);
        localStorage.setItem(TODOLIST_KEY, strToDo);
}

const savetoDos = (nowdate, todoName)=>{
    if(toDos.length<5){
        const todoObj = {
            id : nowdate,
            value : todoName
        };
        toDos.push(todoObj);
        savetodoLocal();
    }
}
const todoCreate = (nowdate, todoName) =>{
    const todoLi = document.createElement('li');
    todoLi.id = nowdate;
    
    const todoText = document.createElement('span');
    const todoBtn = document.createElement('button');
    if(toDos.length<5){
        todoBtn.innerText ="❌";
        todoText.innerText = todoName;
    }else{
        alert('5개 까지만 작성 할 수 있습니다.')
    }
    todoLi.appendChild(todoBtn); 
    todoLi.appendChild(todoText);
    todoList.appendChild(todoLi);
    savetoDos(nowdate, todoName);
    
    todoBtn.addEventListener('click', function(e){
        const deletebtn = e.target.parentElement;
        deletebtn.remove();
        const delebtnID = parseInt(deletebtn.id);
        toDos = toDos.filter((item)=>{
            return item.id !== delebtnID;
        });
        savetodoLocal();
        
    });
};
const todoSave = () => {
    event.preventDefault();
    const todoName = todoInput.value;
    todoInput.value="";
    todoCreate(Date.now(),todoName);
}

const loadTodoStorage = () =>{
    const loadTodos = localStorage.getItem(TODOLIST_KEY);
    if(loadTodos){
        const objTodos = JSON.parse(loadTodos)
        objTodos.forEach((item) =>{
            todoCreate(item.id, item.value);
        });
    }
}
loadTodoStorage();
todoForm.addEventListener('submit', todoSave);