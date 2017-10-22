import React from 'react'
import {PageHeader, Grid, Col, Row, Image} from 'react-bootstrap';

const style = {
  position: 'absolute',
  zIndex: 1,
  padding:'30px',
  color: 'white',
  position: 'absolute',
  textAlign: 'center',
  width: '60%',
  marginLeft: '20%',
}


const styleIcon = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  filter: 'brightness(0) invert(1)'
}

class VideoOverlay extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='overlay' style={style}>
        <h2>Uboston Auto School</h2>
        <hr className="intro-divider" style={{display: 'block'}}/>
        <div style={styleIcon}>
          <Row>
            <Col xs={4} md={4}>
              <Image className="VideoOverlayIcon" src="static/img/repair.png" circle 
                     onClick={ () => {location.hash = "#id3"} }/>
              <p> repair </p>
            </Col>
            <Col xs={4} md={4}>
              <Image className="VideoOverlayIcon" src="static/img/rent.png" circle id="id3"/>
              <p> Rent </p>
            </Col>
            <Col xs={4} md={4}>
              <Image className="VideoOverlayIcon" src="static/img/used.png" circle />
              <p> Sell </p>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default VideoOverlay