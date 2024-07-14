import { validate, getData, createItm } from "./function.js";

const fild = document.getElementById('tode__info');
const time = document.getElementById('todo__itm');
const button = document.getElementById('button');
//const selekt = document.getElementById("todo__selekt");
const cover = document.getElementById('cover__infos__todo');

button && button.addEventListener('click', function (event) {
    event.preventDefault();

    const isValidat = validate(fild, time);
    if (!isValidat) {
        return;
    }

    let todo = {
        name: fild.value,
        time: time.value,
        status: "active",
        id: Date.now(),
    };

    let todos = getData();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    fild.value = null;
    time.value = null;

    let item = createItm(todo);
    cover.innerHTML += item;
    
});

document.addEventListener('DOMContentLoaded', function(){
    let todos = getData();
    todos.forEach(element => {
         let item = createItm(element);
         cover.innerHTML += item
    })
})
