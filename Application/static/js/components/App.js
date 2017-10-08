import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from './Header'
import Video from './Video'
import ControlledCarousel from './ControlledCarousel'
import Carousel from '../containers/Carousel'
import MainPage from './MainPage'

const App = () => (
  <div>
    <Header />
    <Video />
    <MainPage />
    <Carousel />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App