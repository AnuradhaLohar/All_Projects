const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todosUL = document.querySelector('.todos')

const todos = JSON.parse(localStorage.getItem('todoss'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text

    }

    if (todoText) {
        const todoli = document.createElement('li')
        todoli.innerHTML = todoText
        todosUL.appendChild(todoli)

        if (todo && todo.completed) {
            todoli.classList.add('completed')
        }


        input.value = ''

        todoli.addEventListener('click', () => {
            todoli.classList.toggle('completed')
            updateList()
        })

        todoli.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoli.remove()
            
            updateList()
        })
        updateList()
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo();
})

function updateList() {
    const todoli = document.querySelectorAll('li')

    const todos = [];
    todoli.forEach(todo => {
        todos.push({
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        })

    })
    localStorage.setItem('todoss', JSON.stringify(todos))

}