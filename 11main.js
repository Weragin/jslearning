const todoList = [{
    todo: 'Make a program',
    date: '13.8.2023'
}]

function renderList(){
    let listHTML = '';

    for (let plan in todoList){
        listHTML += `
            <div>${plan.todo}</div>
            <div>${plan.date}</div>
            <button class="remove-button" onclick="deletePlan()">Delete</button>`
    }
}

function deletePlan(id){

}