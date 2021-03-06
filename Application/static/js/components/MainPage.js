import React from 'react'
import ReactDOM from 'react-dom';
import BrandGrid from './BrandGrid'
import Carousel from '../containers/Carousel'
import VisibleRepairGrid from '../containers/VisibleRepairGrid'
import Video from './Video'
import VisibleMap from '../containers/VisibleMap'
import ImageGallery from'./ImageGallery'

const mapSettings = {
  initialCenter: {
    lat: 42.371543,
    lng: -71.099883
  },
  zoom: 13,
  draggable: true,
  zoomControl: true,
  scrollwheel: false,
}

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      mainRef: null,
      rentalCarRef: null,
      repairRef: null,
      mapRef: null,
    };
  }

  render() {
    return (
      <div>
        <Video />
        <VisibleRepairGrid />
        <Carousel />
        <div className="container">
          <VisibleMap mapSettings={mapSettings} />
          <BrandGrid />
        </div>
      </div>
    )
  }
}

export default MainPage