const scrollRef = (state = {ref: null}, action) => {
    switch (action.type) {
        case 'SET_REF':
            return {
                ref: action.ref,
            }
        default:
        return state
    }
}

export default scrollRef