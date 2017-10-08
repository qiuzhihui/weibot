import React from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-bootstrap';


const TestCarousel = ({ offset, handleSelect }) => (
    <Carousel activeIndex={offset.index} direction={offset.direction} onSelect={handleSelect}>
      <Carousel.Item>
        <div style={{'backgroundImage':'url("static/img/porsche1.jpg")', 'backgroundSize':'cover', 'height':'400px'}}>
          <div style={{'backgroundColor':'rgba(255,255,255,0.9)', 'padding':'10px', 'margin':'auto', 'width':'800', 'textAlign':'center', 'top':'20px', 'position':'relative'}}>
            <h2 style={{'margin':'0'}}>Specialize in oil change and engine repair</h2>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{'backgroundImage':'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url("static/img/porsche2.jpg")', 'backgroundSize':'cover', 'height':'400px'}}>
          <div style={{'backgroundColor':'rgba(255,255,255,0.9)', 'padding':'10px', 'margin':'auto', 'width':'800', 'textAlign':'center', 'top':'20px', 'position':'relative'}}>
            <h2 style={{'margin':'0'}}>Upgrade your wheel with tasty 3 star michelin tire</h2>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{'backgroundImage':'url("static/img/porsche3.jpg")', 'backgroundSize':'cover', 'height':'400px'}}>
          <div style={{'backgroundColor':'rgba(255,255,255,0.9)', 'padding':'10px', 'margin':'auto', 'width':'800', 'textAlign':'center', 'top':'20px', 'position':'relative'}}>
            <h2 style={{'margin':'0'}}>Outshine your peers with nitrogen gas booster style</h2>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
)


TestCarousel.propTypes = {
  offset: PropTypes.shape({
    index: PropTypes.number.isRequired,
    direction: PropTypes.string.isRequired
  }).isRequired,
  handleSelect: PropTypes.func.isRequired
}


export default TestCarousel