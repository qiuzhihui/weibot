const offset = (state = (1, 'next'), action) => {
  switch (action.type) {
    case 'SET_OFFSET':
      return (action.index, action.direction)
    default:
      return state
  }
}

export default offset