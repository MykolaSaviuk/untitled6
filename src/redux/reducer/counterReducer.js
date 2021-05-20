
const counterReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state ]
        case 'Delete':
            return [...state]
        default:
            return state
    }
}

export default counterReducer;