import React from 'react'
import ReactDOM from 'react-dom';
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
        <Video mainPageRefs={ this.state }
               ref={ ref => !this.state.mainRef && this.setState({mainRef: ref})} />
        <ImageGallery ref={ ref => !this.state.rentalCarRef && this.setState({rentalCarRef: ref})} />
        <Carousel ref={ ref => !this.state.repairRef && this.setState({repairRef: ref})} />
        <VisibleMap ref={ ref => !this.state.mapRef && this.setState({mapRef: ref})} 
                    mapSettings={mapSettings} >
        </VisibleMap>
      </div>
    )
  }
}

export default MainPage