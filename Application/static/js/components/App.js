import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from './Header'
import ControlledCarousel from './ControlledCarousel'
import Carousel from '../containers/Carousel'
import MainPage from './MainPage'

const App = () => (
  <div>
    <Header />
    <MainPage />

    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App