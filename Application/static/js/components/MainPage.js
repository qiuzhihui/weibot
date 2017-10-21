import React from 'react'
import BrandGrid from './BrandGrid'
import Carousel from '../containers/Carousel'
import Video from './Video'
import VisibleMap from '../containers/VisibleMap'
import ImageGallery from'./ImageGallery'

const mapSettings = {
  initialCenter: {
    lat: 42.349379,
    lng: -71.049842
  },
  zoom: 12,
  draggable: true,
  zoomControl: true,
  scrollwheel: false,
}

const MainPage = () => (
  <div>
    <Video />
    <ImageGallery />
    <Carousel />
    <VisibleMap mapSettings={mapSettings}>
    </VisibleMap>
  </div>
)

export default MainPage