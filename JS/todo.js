

const todo = document.querySelector(".form-todo");

const todoInput = document.querySelector(".form-todo input[type='text']");

// for input given by user
let todoInputText;


// for all clear todo list
const todoClear = document.querySelector(".clearAll")


const todoList = document.querySelector(".todo-list");

// if localStorage object length is greater than zero then we will show all clear option and value present in localStorage
if(localStorage.length>0){
    for (const key in localStorage) {
        if(Object.hasOwnProperty.call(localStorage, key)){
            const newli = document.createElement('li');
            newli.innerHTML = 
            `
                <span class="text">
                    ${localStorage.getItem(`${key}`)}
                </span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>
            `
            todoList.appendChild(newli);
        }
    }
}else{
    // if localStorage length is less than zero then clear all option will not be visible
    todoClear.style.display="none";
}

// after entering text in text box 
todo.addEventListener("submit",(e) => {
    e.preventDefault();
    todoInputText = todoInput.value
    if(todoInputText.length > 0){
        // adding key value pair in local storage
        localStorage.setItem(todoInputText , todoInputText)
        const newli = document.createElement('li');
        newli.innerHTML = `
            <span class="text">
                ${localStorage.getItem(`${todoInputText}`)}
            </span>
            <div class="todo-buttons">
                <button class="todo-btn done">Done</button>
                <button class="todo-btn remove">Remove</button>
            </div>
        `
        todoList.appendChild(newli);
        todoInput.value = "";
    }else{
        alert(`Please Enter Some Task to do`)
    }
})

// event bubbling
todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains("done")){
        const spanli = e.target.parentNode.previousElementSibling
        spanli.style.textDecoration = "line-through";
    }
    else if(e.target.classList.contains("remove")){
        const spanli = e.target.parentNode.parentNode
        const removeKey = spanli.querySelector("span").innerText;
        localStorage.removeItem(removeKey.toLowerCase())
        spanli.remove();
    }
})
// on click on all cler option
todoClear.addEventListener('click', () =>{
    localStorage.clear();
    todoList.innerHTML = "";
    todoClear.style.display="none";
})

