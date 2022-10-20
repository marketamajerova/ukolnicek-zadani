const Task = (props) => {
    return `
        <div class="task">
            <div class="task__body">
            <div class="task__name">${props.name}</div>
            <div class="task__due">${props.due}</div>
            </div>
            <div class="task__done">${props.due}</div>
        </div> `
}


