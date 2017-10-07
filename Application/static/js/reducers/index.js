import { combineReducers } from 'redux'
import todos from './todos'
import offset from './offset'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  offset,
})

export default todoApp