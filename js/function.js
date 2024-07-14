function validate(fild, time) {
    if (fild.value.lenght < 5) {
        alert('Koproq malumat kiriting')
        fild.focus();

        return false;
    }

    if (!time.value) {
        alert('Toliq malumot kititing')
        time.focus();

        return false;
    }
    return true;
}
function getData() {
    let data = [];
    if (localStorage.getItem("todos")) {
        data = JSON.parse(localStorage.getItem("todos"));
    }
    return data;
}

function createItm(todo) {
    return `
     <div class="cover__icons__info">
                <div class="infos__chek">
                    <input id="chek" type="checkbox">
                    <div class="infos">
                        <p>${todo.name[0].toUpperCase() + todo.name.slice(1)}</p>
                        <p>${todo.time}</p>
                    </div>
                </div>


                <div class="icons">
                    <i class="fa-solid fa-trash"></i>
                    <i class="fa-solid fa-pen"></i>
                </div>
            </div>
 `;
}

export {validate, getData, createItm}