import React from 'react'
import BrandGrid from './BrandGrid'
import Carousel from '../containers/Carousel'
import Video from './Video'
import VisibleMap from '../containers/VisibleMap'
import ImageGallery from'./ImageGallery'

const basicSettings = {
  initialCenter: {
    lat: 29.999999,
    lng: -90.102345
  },
  initialZoom: 12,
}

const MainPage = () => (
  <div>
    <Video />
    <ImageGallery />
    <Carousel />
    <BrandGrid />
  </div>
)

export default MainPage