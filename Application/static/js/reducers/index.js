import { combineReducers } from 'redux'
import todos from './todos'
import offset from './offset'
import scrollRef from './scrollRef'
import visibilityFilter from './visibilityFilter'


const todoApp = combineReducers({
  todos,
  visibilityFilter,
  offset,
  scrollRef,
})

export default todoApp