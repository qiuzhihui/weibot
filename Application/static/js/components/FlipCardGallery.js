import React from 'react';
import FlipCard from 'react-flipcard';
import PropTypes from 'prop-types';


const cardBack = {
  display: 'table-cell',
  verticalAlign: 'middle',
  color: 'white',
}

const cardFront = {
  color: 'white',
  fontWeight: '500',
  fontFamily: '"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.80)',
  borderRadius: '10px',
}

const imageStyle = {
  width: '100%',
  height: '100%'
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
      <div className={this.props.serviceType}>
        {/* Default behavior is horizontal flip on hover, or focus */}
        <FlipCard> 
          {/* The first child is used as the front of the card */}
          <div style={cardFront}>
            <div >{this.props.serviceName}</div>
          </div>
          {/* The second child is used as the back of the card */}
          <div style={cardBack}>{this.props.description}</div>
        </FlipCard>
      </div>
    )
  }
}


FlipCardGallery.propTypes = {
  serviceName: PropTypes.string,
  description: PropTypes.string,
  serviceType: PropTypes.string
}

FlipCardGallery.defaultProps = {
  serviceName: 'front',
  description: 'back',
  serviceType: 'Autobody'
}

export default FlipCardGallery