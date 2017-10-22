import React from 'react'
import {findDOMNode} from 'react-dom'
import {PageHeader, Grid, Col, Row, Image} from 'react-bootstrap';
import $ from 'jquery';

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

  scroll(ref) {
    console.log(ref);
    $('html, body').animate({scrollTop: findDOMNode(ref).getBoundingClientRect().top}, 100);
  }

  render() {
    return (
      <div className='overlay' style={style}>
        <h2>Uboston Auto School</h2>
        <hr className="intro-divider" style={{display: 'block'}}/>
        <div style={styleIcon}>
          <Row>
            <Col xs={4} md={4}>
              <div onClick={ this.scroll.bind(this, this.props.mainPageRefs.mainRef) }>
                <Image className="VideoOverlayIcon" src="static/img/repair.png" circle />
                <p> repair </p>
              </div>  
            </Col>
            <Col xs={4} md={4}>
              <div onClick={ this.scroll.bind(this, this.props.mainPageRefs.rentalCarRef) }>
                <Image className="VideoOverlayIcon" src="static/img/rent.png" circle />
                <p> Rent </p>
              </div>
            </Col>
            <Col xs={4} md={4}>
              <div onClick={ this.scroll.bind(this, this.props.mainPageRefs.mapRef) }>
                <Image className="VideoOverlayIcon" src="static/img/used.png" circle ref="1"/>
                <p> Sell </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default VideoOverlay