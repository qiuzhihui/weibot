import React from 'react'
import {PageHeader, Grid, Col, Row, Image} from 'react-bootstrap';

const style = {
  'position': 'absolute',
  'zIndex': 1,
  'padding':'30px',
  'color': 'white',
  position: 'absolute',
  textAlign: 'center',
  width: '100%'
  }


const styleIcon = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  filter: 'brightness(0) invert(1)'
}

const VideoOverlay = () => (
  <div className='overlay' style={style}>
    <h2>Uboston Auto School</h2>
    <hr className="intro-divider" style={{display: 'block'}}/>
    <div style={styleIcon}>
      <Grid>
        <Row>
          <Col xs={4} md={2}>
            <Image  width={50} height={50} src="static/img/repair.png" rounded />
            <p> repair </p>
          </Col>
          <Col xs={4} md={2}>
            <Image width={50} height={50} src="static/img/rent.png" rounded />
            <p> Rent </p>
          </Col>
          <Col xs={4} md={2}>
            <Image width={50} height={50} src="static/img/used.png" rounded />
            <p> Sell </p>
          </Col>
          <Col xs={4} md={2}>
            <Image width={50} height={50} src="static/img/video.png" rounded />
            <p> Video </p>
          </Col>
          <Col xs={4} md={2}>
            <Image width={50} height={50} src="static/img/contact.png" rounded />
            <p> Contact </p>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
)

export default VideoOverlay