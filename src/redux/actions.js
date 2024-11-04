export const addTodo = (data) => ({
    type: 'todoList/addTodo',
    payload: data
})

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const prioriryFilterChange = (priorities) => {
    return {
        type: 'filters/prioririesFilterChange',
        payload: priorities
    }
}
// action creator là function, dùng để trả về state của kho chung dựa trên action hiện tại