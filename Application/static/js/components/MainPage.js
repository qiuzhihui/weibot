import React from 'react'
import ControlledCarousel from './ControlledCarousel'
import Carousel from '../containers/Carousel'
import Video from './Video'
import VisibleMap from '../containers/VisibleMap'

import {Grid, Row, Col} from 'react-bootstrap';

const basicSettings = {
  initialCenter: {
    lat: 29.999999,
    lng: -90.102345
  },
  initialZoom: 12,
}


    // <Map config={basicSettings}/>

const MainPage = () => (
  <div>
    <Video />

    <Carousel />

    <Grid style={{backgroundColor:"black"}}>
      <Row className="show-grid" style={{height:"200px", padding: "10px"}}>
        <Col xs={12} md={4}>
          <img src="/static/img/brands/Audi.png" height="100%" style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={12} md={4}>
          <img src="/static/img/brands/Benz.png" height="100%" style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={12} md={4}>
          <div>
            <img src="/static/img/brands/Bmw.png" height="100%" style={{display:"block", margin:"0 auto"}}></img>
          </div>
        </Col>
      </Row>

      <Row className="show-grid" style={{height:"200px", padding: "10px"}}>
        <Col xs={12} md={4}>
          <img src="/static/img/brands/Chevrolet.png" height="100%" style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={12} md={4}>
          <img src="/static/img/brands/LandRover.png" height="100%" style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={12} md={4}>
          <img src="/static/img/brands/Lexus.png" height="100%" style={{display:"block", margin:"0 auto"}}></img>
        </Col>
      </Row>
    </Grid>


    <VisibleMap />
  </div>
)

export default MainPage