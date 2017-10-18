import React from 'react'
import BrandGrid from './BrandGrid'
import Carousel from '../containers/Carousel'
import Video from './Video'
import ImageGallery from'./ImageGallery'

const MainPage = () => (
  <div>
    <Video />
    <ImageGallery />
    <Carousel />
    <BrandGrid />

    
  </div>
)

export default MainPage