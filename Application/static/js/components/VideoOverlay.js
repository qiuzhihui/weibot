import React from 'react'
import {findDOMNode} from 'react-dom'
import {PageHeader, Grid, Col, Row, Image, FormGroup, FormControl, InputGroup, Button, ControlLabel, Form} from 'react-bootstrap';


const style = {
  position: 'absolute',
  zIndex: 1,
  padding:'30px',
  color: 'white',
  textAlign: 'center',
  width: '60%',
  marginLeft: '20%',
  top: '10%'
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
        <h2>Harvard Auto Schools</h2>
        <hr className="intro-divider" style={{display: 'block'}}/>
          <FormGroup>
            <InputGroup>
              <FormControl placeholder="zach@gmail.com" type="text" />
              <InputGroup.Button>
                <Button bsStyle="danger">Request a quote</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
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