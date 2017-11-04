import React from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-bootstrap';


const TestCarousel = ({ offset, handleSelect }) => (
  <div style={{clear:"both"}}>
    <Carousel activeIndex={offset.index} direction={offset.direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img width={2000} height={401} alt="900x500" src="static/img/carousel1.jpg"/>
          <Carousel.Caption>
            <h3>Specialize in auto repair</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={2000} height={401} alt="900x500" src="static/img/carousel2.jpg"/>
          <Carousel.Caption>
            <h3>Master Wang has been engaged in auto repair since 1984.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={2000} height={401} alt="900x500" src="static/img/carousel3.jpg"/>
          <Carousel.Caption>
            <h3>Master Su has 21 car repair experience.</h3>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  </div>
)


TestCarousel.propTypes = {
  offset: PropTypes.shape({
    index: PropTypes.number.isRequired,
    direction: PropTypes.string.isRequired
  }).isRequired,
  handleSelect: PropTypes.func.isRequired
}


export default TestCarousel