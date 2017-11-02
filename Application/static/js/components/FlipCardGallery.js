import React from 'react';
import FlipCard from 'react-flipcard';
import PropTypes from 'prop-types';


const cardBack = {
  width: '250',
  height: '300',
  textAlign: 'center',
  borderRadius: '10px',
  border: '1px solid #ccc',
  padding: '25px',
  backgroundColor: '#cef',
}


export class FlipCardGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    };
  }

  showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }

  render() {
    return (
      <div>
        {/* Default behavior is horizontal flip on hover, or focus */}
        <FlipCard>
          {/* The first child is used as the front of the card */}
          <div>
            <div>{this.props.serviceName}</div>
          </div>
          {/* The second child is used as the back of the card */}
          <div>{this.props.description}</div>
        </FlipCard>

      </div>
    )
  }
}


FlipCardGallery.propTypes = {
  serviceName: PropTypes.string,
  description: PropTypes.string
}

FlipCardGallery.defaultProps = {
  serviceName: 'front',
  description: 'back'
}

export default FlipCardGallery