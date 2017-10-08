import React from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-bootstrap';


const TestCarousel = ({ offset, handleSelect }) => (
    <Carousel activeIndex={offset.index} direction={offset.direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img width={2000} height={401} alt="900x500" src="static/img/porsche1.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={2000} height={401} alt="900x500" src="static/img/porsche2.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={2000} height={401} alt="900x500" src="static/img/porsche3.jpg"/>
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