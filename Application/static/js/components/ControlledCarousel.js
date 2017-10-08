import React from 'react'
import {Carousel} from 'react-bootstrap';


const ControlledCarousel = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {
    //alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
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
    );
  }
});


export default ControlledCarousel