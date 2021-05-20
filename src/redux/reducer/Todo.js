
const Todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state , {todo: action.payload, id: action.id}]
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
}

export default Todo