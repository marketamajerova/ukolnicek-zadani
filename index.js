//component Task which creates one task item
const Task = (props) => {

    const {name, due, done} = props;

    const isDone = (result) => {
        if (result === true){
            return "✓"
        } else {
            return ""
        }
    }
    
    return `
        <div class="task">
            <div class="task__body">
            <div class="task__name">${name}</div>
            <div class="task__due">${due}</div>
            </div>
            <div class="task__done">${isDone(done)}</div>
        </div> `
}

//Function which takes expect array of tasks and renders all the task items using component Task schema
const renderTasks = (tasks) => {
    const listOfTasks = document.querySelector('.todo__tasks');
    listOfTasks.innerHTML = tasks
        .map((task) => Task(task))
        .join('');
}

//fetching data from API and axecuuting fun
fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        renderTasks(data);
    })


//checkbox funcationality
const checkBox = document.getElementById('checkbox-undone');

const filerTasks = () => {
    if (checkBox.checked == true){
        
        fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                renderTasks(data);
            })

    } else if (checkBox.checked == false){
        fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                renderTasks(data);
            })
    }
}

checkBox.addEventListener('click', filerTasks);














