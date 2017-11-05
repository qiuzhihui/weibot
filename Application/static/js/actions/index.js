let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setOffset = (index, direction) => {
  return {
    type: 'SET_OFFSET',
    index,
    direction
  }
}

export const setRef = (repairRef, carousalRef, mapRef) => {
  return {
    type: 'SET_REF',
    repairRef,
    carousalRef,
    mapRef,
  }
}