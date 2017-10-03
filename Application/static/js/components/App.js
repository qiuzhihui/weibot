import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from './Header'
import ControlledCarousel from './ControlledCarousel'

const App = () => (
  <div>
  	<Header />
  	<ControlledCarousel />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App