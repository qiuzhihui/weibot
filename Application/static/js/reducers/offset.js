const offset = (state = {index: 0, direction: 'next'}, action) => {
    switch (action.type) {
        case 'SET_OFFSET':
            return {
                index: action.index,
                direction: action.direction
            }
        default:
        return state
    }
}

export default offset